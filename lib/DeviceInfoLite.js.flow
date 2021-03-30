// @flow
// $FlowFixMe
import { NativeModules } from "react-native";

const RNDeviceInfoLite = NativeModules.RNDeviceInfoLite;
const UNKNOWN = "unknown";

let isInitialized: boolean = false;
let constants: any = undefined;

class DeviceInfoLite {
	static async initialize() {
		if (isInitialized) return;
		constants = await RNDeviceInfoLite.getValues();
		isInitialized = true;
	}

	static async isAutoDateAndTime(): Promise<boolean> {
		return await RNDeviceInfoLite.isAutoDateAndTime();
	}

	static async isAutoTimeZone(): Promise<boolean> {
		return await RNDeviceInfoLite.isAutoTimeZone();
	}

	static async hasSystemFeature(feature: string): Promise<boolean> {
		return await RNDeviceInfoLite.hasSystemFeature(feature);
	}

	static async getSystemAvailableFeatures(): Promise<Array<string>> {
		return await RNDeviceInfoLite.getSystemAvailableFeatures();
	}

	static async getCurrentLocale(): Promise<string> {
		return await RNDeviceInfoLite.getCurrentLocale();
	}

	static getVersion(): string {
		if (!constants) return UNKNOWN;
		return constants.appVersion;
	}

	static getBuildNumber(): string {
		if (!constants) return UNKNOWN;
		return constants.buildNumber;
	}

	static getFirstInstallTime(): number {
		if (!constants) return 0;
		return constants.firstInstallTime;
	}

	static getLastUpdateTime(): number {
		if (!constants) return 0;
		return constants.lastUpdateTime;
	}

	static getApplicationName(): string {
		if (!constants) return UNKNOWN;
		return constants.applicationName;
	}

	static getBundleId(): string {
		if (!constants) return UNKNOWN;
		return constants.bundleId;
	}

	static getSystemVersion(): string {
		if (!constants) return UNKNOWN;
		return constants.systemVersion;
	}

	static getModel(): string {
		if (!constants) return UNKNOWN;
		return constants.model;
	}

	static getBrand(): string {
		if (!constants) return UNKNOWN;
		return constants.brand;
	}

	static getBuildId(): string {
		if (!constants) return UNKNOWN;
		return constants.buildId;
	}

	static getDeviceId(): string {
		if (!constants) return UNKNOWN;
		return constants.deviceId;
	}

	static getAPILevel(): number {
		if (!constants) return 0;
		return constants.apiLevel;
	}

	static getBootloader(): string {
		if (!constants) return UNKNOWN;
		return constants.bootloader;
	}

	static getDevice(): string {
		if (!constants) return UNKNOWN;
		return constants.device;
	}

	static getDisplay(): string {
		if (!constants) return UNKNOWN;
		return constants.display;
	}

	static getFingerprint(): string {
		if (!constants) return UNKNOWN;
		return constants.fingerprint;
	}

	static getHardware(): string {
		if (!constants) return UNKNOWN;
		return constants.hardware;
	}

	static getHost(): string {
		if (!constants) return UNKNOWN;
		return constants.host;
	}

	static getProduct(): string {
		if (!constants) return UNKNOWN;
		return constants.product;
	}

	static getTags(): string {
		if (!constants) return UNKNOWN;
		return constants.tags;
	}

	static getType(): string {
		if (!constants) return UNKNOWN;
		return constants.type;
	}

	static getBaseOS(): string {
		if (!constants) return UNKNOWN;
		return constants.baseOS;
	}

	static getPreviewSdkInt(): number {
		if (!constants) return 0;
		return constants.previewSdkInt;
	}

	static getSecurityPatch(): string {
		if (!constants) return UNKNOWN;
		return constants.securityPatch;
	}

	static getCodename(): string {
		if (!constants) return UNKNOWN;
		return constants.codename;
	}

	static getIncremental(): string {
		if (!constants) return UNKNOWN;
		return constants.incremental;
	}

	static getDeviceLocale(): string {
		if (!constants) return UNKNOWN;
		return constants.deviceLocale;
	}

	static getPreferredLocales(): Array<string> {
		if (!constants) return [];
		return constants.preferredLocales;
	}

	static getDeviceCountry(): string {
		if (!constants) return UNKNOWN;
		return constants.deviceCountry;
	}

	static getManufacturer(): string {
		if (!constants) return UNKNOWN;
		return constants.systemManufacturer;
	}

	static getTimezone(): string {
		if (!constants) return UNKNOWN;
		return constants.timezone;
	}

	static getFontScale(): number {
		if (!constants) return 0;
		return constants.fontScale;
	}

	static getIs24Hour(): boolean {
		if (!constants) return false;
		return constants.is24Hour;
	}

	static getTotalDiskCapacity(): number {
		if (!constants) return 0;
		return constants.totalDiskCapacity;
	}

	static getFreeDiskStorage(): number {
		if (!constants) return 0;
		return constants.freeDiskStorage;
	}

	static getDeviceType(): string {
		if (!constants) return UNKNOWN;
		return constants.deviceType;
	}

	static getSupportedABIs(): Array<string> {
		if (!constants) return [];
		return RNDeviceInfoLite.supportedABIs;
	}

	static getSupported32BitABIs(): Array<string> {
		if (!constants) return [];
		return RNDeviceInfoLite.supported32BitABIs;
	}

	static getSupported64BitABIs(): Array<string> {
		if (!constants) return [];
		return RNDeviceInfoLite.supported64BitABIs;
	}
}

export default DeviceInfoLite;
