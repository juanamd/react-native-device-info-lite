package os.juanamd.deviceinfolite

import android.app.UiModeManager
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.net.ConnectivityManager
import android.os.Build
import android.os.Environment
import android.os.StatFs
import android.provider.Settings
import android.text.format.DateFormat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableArray
import java.util.TimeZone

class DeviceInfoLiteModule(reactContext: ReactApplicationContext) :
  NativeDeviceInfoLiteSpec(reactContext) {

  private val context get() = reactApplicationContext
  private val configuration get() = context.resources.configuration

  override fun getName() = NAME

  // ---- Static values (called once from JS, then cached there) ---------------

  override fun getTypedExportedConstants(): Map<String, Any> {
    val packageName = context.packageName
    val pm = context.packageManager
    val info = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
      pm.getPackageInfo(packageName, PackageManager.PackageInfoFlags.of(0))
    } else {
      @Suppress("DEPRECATION")
      pm.getPackageInfo(packageName, 0)
    }
    val buildNumber = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
      info.longVersionCode
    } else {
      @Suppress("DEPRECATION")
      info.versionCode.toLong()
    }
    val stat = StatFs(Environment.getDataDirectory().absolutePath)

    return mapOf(
      "appVersion" to (info.versionName ?: ""),
      "buildNumber" to buildNumber.toDouble(),
      "firstInstallTime" to info.firstInstallTime.toDouble(),
      "lastUpdateTime" to info.lastUpdateTime.toDouble(),
      "applicationName" to context.applicationInfo.loadLabel(pm).toString(),
      "bundleId" to packageName,

      "systemVersion" to Build.VERSION.RELEASE,
      "apiLevel" to Build.VERSION.SDK_INT.toDouble(),
      "baseOS" to Build.VERSION.BASE_OS,
      "previewSdkInt" to Build.VERSION.PREVIEW_SDK_INT.toDouble(),
      "securityPatch" to Build.VERSION.SECURITY_PATCH,
      "codename" to Build.VERSION.CODENAME,
      "incremental" to Build.VERSION.INCREMENTAL,

      "manufacturer" to Build.MANUFACTURER,
      "model" to Build.MODEL,
      "brand" to Build.BRAND,
      "buildId" to Build.ID,
      "deviceId" to Build.BOARD,
      "bootloader" to Build.BOOTLOADER,
      "device" to Build.DEVICE,
      "display" to Build.DISPLAY,
      "fingerprint" to Build.FINGERPRINT,
      "hardware" to Build.HARDWARE,
      "host" to Build.HOST,
      "product" to Build.PRODUCT,
      "tags" to Build.TAGS,
      "type" to Build.TYPE,

      "supportedABIs" to toArray(Build.SUPPORTED_ABIS),
      "supported32BitABIs" to toArray(Build.SUPPORTED_32_BIT_ABIS),
      "supported64BitABIs" to toArray(Build.SUPPORTED_64_BIT_ABIS),

      "totalDiskCapacity" to stat.totalBytes.toDouble(),
    )
  }

  // ---- Live values -----------------------------------------------------------

  override fun getTimezone(): String = TimeZone.getDefault().id

  override fun getDeviceLocale(): String = configuration.locales[0].toLanguageTag()

  override fun getDeviceCountry(): String = configuration.locales[0].country

  override fun getPreferredLocales(): WritableArray {
    val locales = configuration.locales
    return Arguments.createArray().also { array ->
      for (i in 0 until locales.size()) array.pushString(locales[i].toLanguageTag())
    }
  }

  override fun getFontScale(): Double = configuration.fontScale.toDouble()

  override fun getIs24Hour(): Boolean = DateFormat.is24HourFormat(context)

  override fun getFreeDiskStorage(): Double =
    StatFs(Environment.getDataDirectory().absolutePath).availableBytes.toDouble()

  override fun getDeviceType(): String {
    // Fire TV doesn't always report the TV ui mode, so check its feature flag too.
    if (context.packageManager.hasSystemFeature("amazon.hardware.fire_tv")) return "Tv"

    val uiMode = context.getSystemService(UiModeManager::class.java)
    if (uiMode?.currentModeType == Configuration.UI_MODE_TYPE_TELEVISION) return "Tv"

    // https://developer.android.com/guide/practices/screens_support#NewQualifiers
    return if (configuration.smallestScreenWidthDp >= 600) "Tablet" else "Handset"
  }

  override fun isAutoDateAndTime(): Boolean =
    Settings.Global.getInt(context.contentResolver, Settings.Global.AUTO_TIME, 0) != 0

  override fun isAutoTimeZone(): Boolean =
    Settings.Global.getInt(context.contentResolver, Settings.Global.AUTO_TIME_ZONE, 0) != 0

  override fun isActiveNetworkMetered(): Boolean =
    context.getSystemService(ConnectivityManager::class.java).isActiveNetworkMetered

  override fun hasSystemFeature(feature: String): Boolean =
    feature.isNotEmpty() && context.packageManager.hasSystemFeature(feature)

  override fun getSystemAvailableFeatures(): WritableArray {
    val array = Arguments.createArray()
    for (feature in context.packageManager.systemAvailableFeatures) {
      feature.name?.let { array.pushString(it) }
    }
    return array
  }

  override fun getDatabasePath(name: String): String =
    context.getDatabasePath(name).absolutePath

  private fun toArray(values: Array<String>): WritableArray =
    Arguments.createArray().also { array -> values.forEach { array.pushString(it) } }

  companion object {
    const val NAME = "DeviceInfoLite"
  }
}
