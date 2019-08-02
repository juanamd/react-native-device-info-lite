// $FlowFixMe
import { NativeModules } from "react-native";
const RNDeviceInfoLite = NativeModules.RNDeviceInfoLite;
const UNKNOWN = "unknown";

class DeviceInfoLite {
  async initialize() {
    this.constants = await RNDeviceInfoLite.getValues();
    this.isInitialized = true;
  }

  async isAutoDateAndTime() {
    return await RNDeviceInfoLite.isAutoDateAndTime();
  }

  async isAutoTimeZone() {
    return await RNDeviceInfoLite.isAutoTimeZone();
  }

  async hasSystemFeature(feature) {
    return await RNDeviceInfoLite.hasSystemFeature(feature);
  }

  async getSystemAvailableFeatures() {
    return await RNDeviceInfoLite.getSystemAvailableFeatures();
  }

  getVersion() {
    if (!this.constants) return UNKNOWN;
    return this.constants.appVersion;
  }

  getBuildNumber() {
    if (!this.constants) return UNKNOWN;
    return this.constants.buildNumber;
  }

  getFirstInstallTime() {
    if (!this.constants) return 0;
    return this.constants.firstInstallTime;
  }

  getLastUpdateTime() {
    if (!this.constants) return 0;
    return this.constants.lastUpdateTime;
  }

  getApplicationName() {
    if (!this.constants) return UNKNOWN;
    return this.constants.applicationName;
  }

  getBundleId() {
    if (!this.constants) return UNKNOWN;
    return this.constants.bundleId;
  }

  getSystemVersion() {
    if (!this.constants) return UNKNOWN;
    return this.constants.systemVersion;
  }

  getModel() {
    if (!this.constants) return UNKNOWN;
    return this.constants.model;
  }

  getBrand() {
    if (!this.constants) return UNKNOWN;
    return this.constants.brand;
  }

  getBuildId() {
    if (!this.constants) return UNKNOWN;
    return this.constants.buildId;
  }

  getDeviceId() {
    if (!this.constants) return UNKNOWN;
    return this.constants.deviceId;
  }

  getAPILevel() {
    if (!this.constants) return 0;
    return this.constants.apiLevel;
  }

  getBootloader() {
    if (!this.constants) return UNKNOWN;
    return this.constants.bootloader;
  }

  getDevice() {
    if (!this.constants) return UNKNOWN;
    return this.constants.device;
  }

  getDisplay() {
    if (!this.constants) return UNKNOWN;
    return this.constants.display;
  }

  getFingerprint() {
    if (!this.constants) return UNKNOWN;
    return this.constants.fingerprint;
  }

  getHardware() {
    if (!this.constants) return UNKNOWN;
    return this.constants.hardware;
  }

  getHost() {
    if (!this.constants) return UNKNOWN;
    return this.constants.host;
  }

  getProduct() {
    if (!this.constants) return UNKNOWN;
    return this.constants.product;
  }

  getTags() {
    if (!this.constants) return UNKNOWN;
    return this.constants.tags;
  }

  getType() {
    if (!this.constants) return UNKNOWN;
    return this.constants.type;
  }

  getBaseOS() {
    if (!this.constants) return UNKNOWN;
    return this.constants.baseOS;
  }

  getPreviewSdkInt() {
    if (!this.constants) return 0;
    return this.constants.previewSdkInt;
  }

  getSecurityPatch() {
    if (!this.constants) return UNKNOWN;
    return this.constants.securityPatch;
  }

  getCodename() {
    if (!this.constants) return UNKNOWN;
    return this.constants.codename;
  }

  getIncremental() {
    if (!this.constants) return UNKNOWN;
    return this.constants.incremental;
  }

  getDeviceLocale() {
    if (!this.constants) return UNKNOWN;
    return this.constants.deviceLocale;
  }

  getPreferredLocales() {
    if (!this.constants) return [];
    return this.constants.preferredLocales;
  }

  getDeviceCountry() {
    if (!this.constants) return UNKNOWN;
    return this.constants.deviceCountry;
  }

  getManufacturer() {
    if (!this.constants) return UNKNOWN;
    return this.constants.systemManufacturer;
  }

  getTimezone() {
    if (!this.constants) return UNKNOWN;
    return this.constants.timezone;
  }

  getFontScale() {
    if (!this.constants) return 0;
    return this.constants.fontScale;
  }

  getIs24Hour() {
    if (!this.constants) return false;
    return this.constants.is24Hour;
  }

  getTotalDiskCapacity() {
    if (!this.constants) return 0;
    return this.constants.totalDiskCapacity;
  }

  getFreeDiskStorage() {
    if (!this.constants) return 0;
    return this.constants.freeDiskStorage;
  }

  getDeviceType() {
    if (!this.constants) return UNKNOWN;
    return this.constants.deviceType;
  }

  getSupportedABIs() {
    if (!this.constants) return [];
    return RNDeviceInfoLite.supportedABIs;
  }

  getSupported32BitABIs() {
    if (!this.constants) return [];
    return RNDeviceInfoLite.supported32BitABIs;
  }

  getSupported64BitABIs() {
    if (!this.constants) return [];
    return RNDeviceInfoLite.supported64BitABIs;
  }

}

export default new DeviceInfoLite();