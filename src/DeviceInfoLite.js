// @flow
// $FlowFixMe
import { NativeModules } from "react-native";

const RNDeviceInfoLite = NativeModules.RNDeviceInfoLite;
const UNKNOWN = "unknown";

class DeviceInfoLite {
	isInitialized: boolean;
	constants: any;

	async initialize() {
		this.constants = await RNDeviceInfoLite.getValues();
		this.isInitialized = true;
	}

	async isAutoDateAndTime(): Promise<boolean> {
		return await RNDeviceInfoLite.isAutoDateAndTime();
	}

	async isAutoTimeZone(): Promise<boolean> {
		return await RNDeviceInfoLite.isAutoTimeZone();
	}

	async hasSystemFeature(feature: string): Promise<boolean> {
		return await RNDeviceInfoLite.hasSystemFeature(feature);
	}

	async getSystemAvailableFeatures(): Promise<Array<string>> {
		return await RNDeviceInfoLite.getSystemAvailableFeatures();
	}

	getVersion(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.appVersion;
	}
	getBuildNumber(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.buildNumber;
	}
	getFirstInstallTime(): number {
		if (!this.constants) return 0;
		return this.constants.firstInstallTime;
	}
	getLastUpdateTime(): number {
		if (!this.constants) return 0;
		return this.constants.lastUpdateTime;
	}
	getApplicationName(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.applicationName;
	}
	getBundleId(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.bundleId;
	}
	getSystemVersion(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.systemVersion;
	}
	getModel(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.model;
	}
	getBrand(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.brand;
	}
	getBuildId(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.buildId;
	}
	getDeviceId(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.deviceId;
	}
	getAPILevel(): number {
		if (!this.constants) return 0;
		return this.constants.apiLevel;
	}
	getBootloader(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.bootloader;
	}
	getDevice(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.device;
	}
	getDisplay(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.display;
	}
	getFingerprint(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.fingerprint;
	}
	getHardware(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.hardware;
	}
	getHost(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.host;
	}
	getProduct(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.product;
	}
	getTags(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.tags;
	}
	getType(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.type;
	}
	getBaseOS(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.baseOS;
	}
	getPreviewSdkInt(): number {
		if (!this.constants) return 0;
		return this.constants.previewSdkInt;
	}
	getSecurityPatch(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.securityPatch;
	}
	getCodename(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.codename;
	}
	getIncremental(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.incremental;
	}
	getDeviceLocale(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.deviceLocale;
	}
	getPreferredLocales(): Array<string> {
		if (!this.constants) return [];
		return this.constants.preferredLocales;
	}
	getDeviceCountry(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.deviceCountry;
	}
	getManufacturer(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.systemManufacturer;
	}
	getTimezone(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.timezone;
	}
	getFontScale(): number {
		if (!this.constants) return 0;
		return this.constants.fontScale;
	}
	getIs24Hour(): boolean {
		if (!this.constants) return false;
		return this.constants.is24Hour;
	}
	getTotalDiskCapacity(): number {
		if (!this.constants) return 0;
		return this.constants.totalDiskCapacity;
	}
	getFreeDiskStorage(): number {
		if (!this.constants) return 0;
		return this.constants.freeDiskStorage;
	}
	getDeviceType(): string {
		if (!this.constants) return UNKNOWN;
		return this.constants.deviceType;
	}
	getSupportedABIs(): Array<string> {
		if (!this.constants) return [];
		return RNDeviceInfoLite.supportedABIs;
	}
	getSupported32BitABIs(): Array<string> {
		if (!this.constants) return [];
		return RNDeviceInfoLite.supported32BitABIs;
	}
	getSupported64BitABIs(): Array<string> {
		if (!this.constants) return [];
		return RNDeviceInfoLite.supported64BitABIs;
	}
}

export default new DeviceInfoLite();
