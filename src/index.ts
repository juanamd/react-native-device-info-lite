import NativeDeviceInfoLite from './NativeDeviceInfoLite';
import type { Constants } from './NativeDeviceInfoLite';

export type DeviceType = 'Handset' | 'Tablet' | 'Tv';

// Static values are fetched from native once, on first use.
let cached: Constants | undefined;
const constants = (): Constants =>
  (cached ??= NativeDeviceInfoLite.getConstants());

// ---- App (static) ----------------------------------------------------------

export const getVersion = (): string => constants().appVersion;
export const getBuildNumber = (): number => constants().buildNumber;
/** Epoch millis. */
export const getFirstInstallTime = (): number => constants().firstInstallTime;
/** Epoch millis. */
export const getLastUpdateTime = (): number => constants().lastUpdateTime;
export const getApplicationName = (): string => constants().applicationName;
export const getBundleId = (): string => constants().bundleId;

// ---- System / build (static) -----------------------------------------------

export const getSystemVersion = (): string => constants().systemVersion;
export const getAPILevel = (): number => constants().apiLevel;
export const getBaseOS = (): string => constants().baseOS;
export const getPreviewSdkInt = (): number => constants().previewSdkInt;
export const getSecurityPatch = (): string => constants().securityPatch;
export const getCodename = (): string => constants().codename;
export const getIncremental = (): string => constants().incremental;

export const getManufacturer = (): string => constants().manufacturer;
export const getModel = (): string => constants().model;
export const getBrand = (): string => constants().brand;
export const getBuildId = (): string => constants().buildId;
export const getDeviceId = (): string => constants().deviceId;
export const getBootloader = (): string => constants().bootloader;
export const getDevice = (): string => constants().device;
export const getDisplay = (): string => constants().display;
export const getFingerprint = (): string => constants().fingerprint;
export const getHardware = (): string => constants().hardware;
export const getHost = (): string => constants().host;
export const getProduct = (): string => constants().product;
export const getTags = (): string => constants().tags;
export const getType = (): string => constants().type;

export const getSupportedABIs = (): string[] => constants().supportedABIs;
export const getSupported32BitABIs = (): string[] =>
  constants().supported32BitABIs;
export const getSupported64BitABIs = (): string[] =>
  constants().supported64BitABIs;

/** Size of the internal data partition, in bytes. */
export const getTotalDiskCapacity = (): number => constants().totalDiskCapacity;

// ---- Live values (read on every call) --------------------------------------

export const getTimezone = (): string => NativeDeviceInfoLite.getTimezone();
/** BCP 47 tag of the primary locale, e.g. "en-US". */
export const getDeviceLocale = (): string =>
  NativeDeviceInfoLite.getDeviceLocale();
/** ISO country code of the primary locale, e.g. "US". May be empty. */
export const getDeviceCountry = (): string =>
  NativeDeviceInfoLite.getDeviceCountry();
/** BCP 47 tags, in order of preference. */
export const getPreferredLocales = (): string[] =>
  NativeDeviceInfoLite.getPreferredLocales();
export const getFontScale = (): number => NativeDeviceInfoLite.getFontScale();
export const getIs24Hour = (): boolean => NativeDeviceInfoLite.getIs24Hour();
/** Free space on the internal data partition, in bytes. */
export const getFreeDiskStorage = (): number =>
  NativeDeviceInfoLite.getFreeDiskStorage();
export const getDeviceType = (): DeviceType =>
  NativeDeviceInfoLite.getDeviceType() as DeviceType;

export const isAutoDateAndTime = (): boolean =>
  NativeDeviceInfoLite.isAutoDateAndTime();
export const isAutoTimeZone = (): boolean =>
  NativeDeviceInfoLite.isAutoTimeZone();
export const isActiveNetworkMetered = (): boolean =>
  NativeDeviceInfoLite.isActiveNetworkMetered();

export const hasSystemFeature = (feature: string): boolean =>
  NativeDeviceInfoLite.hasSystemFeature(feature);
export const getSystemAvailableFeatures = (): string[] =>
  NativeDeviceInfoLite.getSystemAvailableFeatures();

// ---- Paths -----------------------------------------------------------------

/**
 * Absolute path for a database file, equivalent to
 * `Context.getDatabasePath(name)`. The parent directory is created if needed,
 * the file itself is not. `name` must not contain a path separator.
 */
export const getDatabasePath = (name: string): string =>
  NativeDeviceInfoLite.getDatabasePath(name);
