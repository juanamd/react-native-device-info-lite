package os.juanamd.RNDeviceInfoLite;

import android.app.UiModeManager;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.FeatureInfo;
import android.content.res.Configuration;
import android.net.ConnectivityManager;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.provider.Settings;
import android.view.WindowManager;
import android.util.DisplayMetrics;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.math.BigInteger;

public class RNDeviceInfoLiteModule extends ReactContextBaseJavaModule {
	private static final String TAG = "RNDeviceInfoLite";

	public RNDeviceInfoLiteModule(ReactApplicationContext reactContext) {
		super(reactContext);
		Log.d(TAG, "Initialized");
	}

	@Override
	public String getName() {
		return TAG;
	}

	@ReactMethod
	public void isAutoDateAndTime(final Promise promise) {
		try {
			boolean isAutoDateAndTime;
			if (Build.VERSION.SDK_INT < Build.VERSION_CODES.JELLY_BEAN_MR1) {
				isAutoDateAndTime = Settings.System.getInt(getReactApplicationContext().getContentResolver(),Settings.System.AUTO_TIME, 0) != 0;
			} else {
				isAutoDateAndTime = Settings.Global.getInt(getReactApplicationContext().getContentResolver(),Settings.Global.AUTO_TIME, 0) != 0;
			}
			promise.resolve(isAutoDateAndTime);
			Log.d(TAG, "isAutoDateAndTime: " + isAutoDateAndTime);
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on isAutoDateAndTime()", e);
		}
	}

	@ReactMethod
	public void isAutoTimeZone(final Promise promise) {
		try {
			boolean isAutoTimeZone;
			if (Build.VERSION.SDK_INT < Build.VERSION_CODES.JELLY_BEAN_MR1) {
				isAutoTimeZone = Settings.System.getInt(getReactApplicationContext().getContentResolver(),Settings.System.AUTO_TIME_ZONE, 0) != 0;
			} else {
				isAutoTimeZone = Settings.Global.getInt(getReactApplicationContext().getContentResolver(),Settings.Global.AUTO_TIME_ZONE, 0) != 0;
			}
			promise.resolve(isAutoTimeZone);
			Log.d(TAG, "isAutoTimeZone: " + isAutoTimeZone);
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on isAutoTimeZone()", e);
		}
	}

	@ReactMethod
	public void hasSystemFeature(final String feature, final Promise promise) {
		try {
			if (feature == null || feature == "") {
				promise.resolve(false);
				Log.d(TAG, "hasSystemFeature: false");
			} else {
				boolean hasFeature = getReactApplicationContext().getApplicationContext().getPackageManager().hasSystemFeature(feature);
				promise.resolve(hasFeature);
				Log.d(TAG, "hasSystemFeature: " + hasFeature);
			}
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on hasSystemFeature()", e);
		}
	}

	@ReactMethod
	public void getSystemAvailableFeatures(final Promise promise) {
		try {
			final FeatureInfo[] featureList = getReactApplicationContext().getApplicationContext().getPackageManager().getSystemAvailableFeatures();
			WritableArray promiseArray = Arguments.createArray();
			for (FeatureInfo f : featureList) {
				if (f.name != null) {
					promiseArray.pushString(f.name);
					Log.d(TAG, "Has system feature: " + f.name);
				}
			}
			promise.resolve(promiseArray);
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on getSystemAvailableFeatures()", e);
		}
	}

	@ReactMethod
	public void getCurrentLocale(final Promise promise) {
		try {
			String locale = this.getCurrentLanguage();
			promise.resolve(locale);
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on getCurrentLocale()", e);
		}
	}

	@ReactMethod
	public void isActiveNetworkMetered(final Promise promise) {
		try {
			ConnectivityManager cm = (ConnectivityManager) getReactApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);
			boolean isMetered = cm.isActiveNetworkMetered();
			promise.resolve(isMetered);
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on isActiveNetworkMetered()", e);
		}
	}

	@ReactMethod
	public void getValues(Promise promise) {
		Log.d(TAG, "Getting system values...");
		try {
			WritableMap map = Arguments.createMap();

			map.putString("appVersion", "not available");
			map.putDouble("buildNumber", 0);
			map.putDouble("firstInstallTime", 0);
			map.putDouble("lastUpdateTime", 0);
			map.putString("applicationName", "not available");
			map.putString("bundleId", "not available");

			try {
				PackageManager packageManager = getReactApplicationContext().getPackageManager();
				String packageName = getReactApplicationContext().getPackageName();
				PackageInfo packageInfo = packageManager.getPackageInfo(packageName, 0);
				PackageInfo info = packageManager.getPackageInfo(packageName, 0);
				String applicationName = getReactApplicationContext().getApplicationInfo().loadLabel(packageManager).toString();

				map.putString("appVersion", info.versionName);
				if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
					map.putDouble("buildNumber", info.getLongVersionCode());
				} else {
					map.putDouble("buildNumber", info.versionCode);
				}
				map.putDouble("firstInstallTime", info.firstInstallTime);
				map.putDouble("lastUpdateTime", info.lastUpdateTime);
				map.putString("applicationName", applicationName);
				map.putString("bundleId", packageName);
			} catch (PackageManager.NameNotFoundException e) {
				Log.e(TAG, "Error with PackageManager on getValues()", e);
			}

			map.putString("systemVersion", Build.VERSION.RELEASE);
			map.putString("model", Build.MODEL);
			map.putString("brand", Build.BRAND);
			map.putString("buildId", Build.ID);
			map.putString("deviceId", Build.BOARD);
			map.putInt("apiLevel", Build.VERSION.SDK_INT);
			map.putString("bootloader", Build.BOOTLOADER);
			map.putString("device", Build.DEVICE);
			map.putString("display", Build.DISPLAY);
			map.putString("fingerprint", Build.FINGERPRINT);
			map.putString("hardware", Build.HARDWARE);
			map.putString("host", Build.HOST);
			map.putString("product", Build.PRODUCT);
			map.putString("tags", Build.TAGS);
			map.putString("type", Build.TYPE);
			map.putString("codename", Build.VERSION.CODENAME);
			map.putString("incremental", Build.VERSION.INCREMENTAL);
			map.putString("systemManufacturer", Build.MANUFACTURER);
			map.putString("timezone", TimeZone.getDefault().getID());
			map.putString("deviceLocale", this.getCurrentLanguage());
			map.putArray("preferredLocales", this.getPreferredLocales());
			map.putString("deviceCountry", this.getCurrentCountry());
			map.putDouble("fontScale", this.fontScale());
			map.putBoolean("is24Hour", this.is24Hour());
			map.putDouble("totalDiskCapacity", this.getTotalDiskCapacity().doubleValue());
			map.putDouble("freeDiskStorage", this.getFreeDiskStorage().doubleValue());
			map.putString("deviceType", this.getDeviceType().getValue());

			if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
				map.putString("baseOS", Build.VERSION.BASE_OS);
				map.putInt("previewSdkInt", Build.VERSION.PREVIEW_SDK_INT);
				map.putString("securityPatch", Build.VERSION.SECURITY_PATCH);
			} else {
				map.putString("baseOS", "not available");
				map.putInt("previewSdkInt", 0);
				map.putString("securityPatch", "not available");
			}
			
			if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
				map.putArray("supportedABIs", toWritableArray(Build.SUPPORTED_ABIS));
				map.putArray("supported32BitABIs", toWritableArray(Build.SUPPORTED_32_BIT_ABIS));
				map.putArray("supported64BitABIs", toWritableArray(Build.SUPPORTED_64_BIT_ABIS));
			} else {
				map.putArray("supportedABIs", toWritableArray(new String[]{ Build.CPU_ABI }));
				map.putArray("supported32BitABIs", toWritableArray(new String[] {}));
				map.putArray("supported64BitABIs", toWritableArray(new String[] {}));
			}

			promise.resolve(map);
			Log.d(TAG, "Got all values!");
		} catch (Exception e) {
			promise.reject(e);
			Log.e(TAG, "Error on getValues()", e);
		}
	}

	private WritableArray toWritableArray(final String[] array) {
		WritableArray writable = Arguments.createArray();
		for (String value : array) {
			writable.pushString(value);
		}
		return writable;
	}

	private String getCurrentLanguage() {
		Locale current;
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
			current = getReactApplicationContext().getResources().getConfiguration().getLocales().get(0);
		} else {
			current = getReactApplicationContext().getResources().getConfiguration().locale;
		}

		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
			return current.toLanguageTag();
		} else {
			StringBuilder builder = new StringBuilder();
			builder.append(current.getLanguage());
			if (current.getCountry() != null) {
				builder.append("-");
				builder.append(current.getCountry());
			}
			return builder.toString();
		}
	}

	private WritableArray getPreferredLocales() {
		Configuration configuration = getReactApplicationContext().getResources().getConfiguration();
		WritableArray preferred = Arguments.createArray();
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
			for (int i = 0; i < configuration.getLocales().size(); i++) {
				preferred.pushString(configuration.getLocales().get(i).getLanguage());
			}
		} else {
			preferred.pushString(configuration.locale.getLanguage());
		}

		return preferred;
	}

	private String getCurrentCountry() {
		Locale current;
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
			current = getReactApplicationContext().getResources().getConfiguration().getLocales().get(0);
		} else {
			current = getReactApplicationContext().getResources().getConfiguration().locale;
		}
		return current.getCountry();
	}

	private DeviceType getDeviceType() {
		// Detect TVs via ui mode (Android TVs) or system features (Fire TV).
		if (getReactApplicationContext().getApplicationContext().getPackageManager().hasSystemFeature("amazon.hardware.fire_tv")) {
			return DeviceType.TV;
		}

		UiModeManager uiManager = (UiModeManager) getReactApplicationContext().getSystemService(Context.UI_MODE_SERVICE);
		if (uiManager != null && uiManager.getCurrentModeType() == Configuration.UI_MODE_TYPE_TELEVISION) {
			return DeviceType.TV;
		}

		DeviceType deviceTypeFromConfig = getDeviceTypeFromResourceConfiguration();
		if (deviceTypeFromConfig != null && deviceTypeFromConfig != DeviceType.UNKNOWN) {
			return deviceTypeFromConfig;
		}

		return  getDeviceTypeFromPhysicalSize();
	}

	// Use `smallestScreenWidthDp` to determine the screen size
	// https://android-developers.googleblog.com/2011/07/new-tools-for-managing-screen-sizes.html
	private  DeviceType getDeviceTypeFromResourceConfiguration() {
		int smallestScreenWidthDp = getReactApplicationContext().getResources().getConfiguration().smallestScreenWidthDp;
		if (smallestScreenWidthDp == Configuration.SMALLEST_SCREEN_WIDTH_DP_UNDEFINED) {
			return  DeviceType.UNKNOWN;
		}
		return  smallestScreenWidthDp >= 600 ? DeviceType.TABLET : DeviceType.HANDSET;
	}

	private DeviceType getDeviceTypeFromPhysicalSize() {
		// Find the current window manager, if none is found we can't measure the device physical size.
		WindowManager windowManager = (WindowManager) getReactApplicationContext().getSystemService(Context.WINDOW_SERVICE);
		if (windowManager == null) {
			return DeviceType.UNKNOWN;
		}

		// Get display metrics to see if we can differentiate handsets and tablets.
		// NOTE: for API level 16 the metrics will exclude window decor.
		DisplayMetrics metrics = new DisplayMetrics();
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
			windowManager.getDefaultDisplay().getRealMetrics(metrics);
		} else {
			windowManager.getDefaultDisplay().getMetrics(metrics);
		}

		// Calculate physical size.
		double widthInches = metrics.widthPixels / (double) metrics.xdpi;
		double heightInches = metrics.heightPixels / (double) metrics.ydpi;
		double diagonalSizeInches = Math.sqrt(Math.pow(widthInches, 2) + Math.pow(heightInches, 2));

		if (diagonalSizeInches >= 3.0 && diagonalSizeInches <= 6.9) {
			// Devices in a sane range for phones are considered to be Handsets.
			return DeviceType.HANDSET;
		} else if (diagonalSizeInches > 6.9 && diagonalSizeInches <= 18.0) {
			// Devices larger than handset and in a sane range for tablets are tablets.
			return DeviceType.TABLET;
		} else {
			// Otherwise, we don't know what device type we're on/
			return DeviceType.UNKNOWN;
		}
	}

	private float fontScale() {
		return getReactApplicationContext().getResources().getConfiguration().fontScale;
	}

	private Boolean is24Hour() {
		return android.text.format.DateFormat.is24HourFormat(getReactApplicationContext().getApplicationContext());
	}

	private BigInteger getTotalDiskCapacity() {
		try {
			StatFs root = new StatFs(Environment.getRootDirectory().getAbsolutePath());
			return BigInteger.valueOf(root.getBlockCount()).multiply(BigInteger.valueOf(root.getBlockSize()));
		} catch (Exception e) {
			Log.e(TAG, "Error on getTotalDiskCapacity()", e);
		}
		return null;
	}

	private BigInteger getFreeDiskStorage() {
		try {
			StatFs external = new StatFs(Environment.getExternalStorageDirectory().getAbsolutePath());
			long availableBlocks;
			long blockSize;

			if (Build.VERSION.SDK_INT < Build.VERSION_CODES.JELLY_BEAN_MR2) {
				availableBlocks = external.getAvailableBlocks();
				blockSize = external.getBlockSize();
			} else {
				availableBlocks = external.getAvailableBlocksLong();
				blockSize = external.getBlockSizeLong();
			}
			return BigInteger.valueOf(availableBlocks).multiply(BigInteger.valueOf(blockSize));
		} catch (Exception e) {
			Log.e(TAG, "Error on getFreeDiskStorage()", e);
		}
		return null;
	}
}
