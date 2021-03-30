// $FlowFixMe
import { NativeModules } from "react-native";
const RNDeviceInfoLite = NativeModules.RNDeviceInfoLite;
const UNKNOWN = "unknown";
let isInitialized = false;
let constants = undefined;

class DeviceInfoLite {
  static async initialize() {
    if (isInitialized) return;
    constants = await RNDeviceInfoLite.getValues();
    isInitialized = true;
  }

  static async isAutoDateAndTime() {
    return await RNDeviceInfoLite.isAutoDateAndTime();
  }

  static async isAutoTimeZone() {
    return await RNDeviceInfoLite.isAutoTimeZone();
  }

  static async hasSystemFeature(feature) {
    return await RNDeviceInfoLite.hasSystemFeature(feature);
  }

  static async getSystemAvailableFeatures() {
    return await RNDeviceInfoLite.getSystemAvailableFeatures();
  }

  static async getCurrentLocale() {
    return await RNDeviceInfoLite.getCurrentLocale();
  }

  static getVersion() {
    if (!constants) return UNKNOWN;
    return constants.appVersion;
  }

  static getBuildNumber() {
    if (!constants) return UNKNOWN;
    return constants.buildNumber;
  }

  static getFirstInstallTime() {
    if (!constants) return 0;
    return constants.firstInstallTime;
  }

  static getLastUpdateTime() {
    if (!constants) return 0;
    return constants.lastUpdateTime;
  }

  static getApplicationName() {
    if (!constants) return UNKNOWN;
    return constants.applicationName;
  }

  static getBundleId() {
    if (!constants) return UNKNOWN;
    return constants.bundleId;
  }

  static getSystemVersion() {
    if (!constants) return UNKNOWN;
    return constants.systemVersion;
  }

  static getModel() {
    if (!constants) return UNKNOWN;
    return constants.model;
  }

  static getBrand() {
    if (!constants) return UNKNOWN;
    return constants.brand;
  }

  static getBuildId() {
    if (!constants) return UNKNOWN;
    return constants.buildId;
  }

  static getDeviceId() {
    if (!constants) return UNKNOWN;
    return constants.deviceId;
  }

  static getAPILevel() {
    if (!constants) return 0;
    return constants.apiLevel;
  }

  static getBootloader() {
    if (!constants) return UNKNOWN;
    return constants.bootloader;
  }

  static getDevice() {
    if (!constants) return UNKNOWN;
    return constants.device;
  }

  static getDisplay() {
    if (!constants) return UNKNOWN;
    return constants.display;
  }

  static getFingerprint() {
    if (!constants) return UNKNOWN;
    return constants.fingerprint;
  }

  static getHardware() {
    if (!constants) return UNKNOWN;
    return constants.hardware;
  }

  static getHost() {
    if (!constants) return UNKNOWN;
    return constants.host;
  }

  static getProduct() {
    if (!constants) return UNKNOWN;
    return constants.product;
  }

  static getTags() {
    if (!constants) return UNKNOWN;
    return constants.tags;
  }

  static getType() {
    if (!constants) return UNKNOWN;
    return constants.type;
  }

  static getBaseOS() {
    if (!constants) return UNKNOWN;
    return constants.baseOS;
  }

  static getPreviewSdkInt() {
    if (!constants) return 0;
    return constants.previewSdkInt;
  }

  static getSecurityPatch() {
    if (!constants) return UNKNOWN;
    return constants.securityPatch;
  }

  static getCodename() {
    if (!constants) return UNKNOWN;
    return constants.codename;
  }

  static getIncremental() {
    if (!constants) return UNKNOWN;
    return constants.incremental;
  }

  static getDeviceLocale() {
    if (!constants) return UNKNOWN;
    return constants.deviceLocale;
  }

  static getPreferredLocales() {
    if (!constants) return [];
    return constants.preferredLocales;
  }

  static getDeviceCountry() {
    if (!constants) return UNKNOWN;
    return constants.deviceCountry;
  }

  static getManufacturer() {
    if (!constants) return UNKNOWN;
    return constants.systemManufacturer;
  }

  static getTimezone() {
    if (!constants) return UNKNOWN;
    return constants.timezone;
  }

  static getFontScale() {
    if (!constants) return 0;
    return constants.fontScale;
  }

  static getIs24Hour() {
    if (!constants) return false;
    return constants.is24Hour;
  }

  static getTotalDiskCapacity() {
    if (!constants) return 0;
    return constants.totalDiskCapacity;
  }

  static getFreeDiskStorage() {
    if (!constants) return 0;
    return constants.freeDiskStorage;
  }

  static getDeviceType() {
    if (!constants) return UNKNOWN;
    return constants.deviceType;
  }

  static getSupportedABIs() {
    if (!constants) return [];
    return RNDeviceInfoLite.supportedABIs;
  }

  static getSupported32BitABIs() {
    if (!constants) return [];
    return RNDeviceInfoLite.supported32BitABIs;
  }

  static getSupported64BitABIs() {
    if (!constants) return [];
    return RNDeviceInfoLite.supported64BitABIs;
  }

}

export default DeviceInfoLite;