declare module "react-native-device-info-lite" {
	export default class {
		static async initialize(): Promise<void>;
		static async isAutoDateAndTime(): Promise<boolean>;
		static async isAutoTimeZone(): Promise<boolean>;
		static async hasSystemFeature(feature: string): Promise<boolean>;
		static async getSystemAvailableFeatures(): Promise<Array<string>>;
		static async getCurrentLocale(): Promise<string>;
		static getVersion(): string;
		static getBuildNumber(): string;
		static getFirstInstallTime(): number;
		static getLastUpdateTime(): number;
		static getApplicationName(): string;
		static getBundleId(): string;
		static getSystemVersion(): string;
		static getModel(): string;
		static getBrand(): string;
		static getBuildId(): string;
		static getDeviceId(): string;
		static getAPILevel(): number;
		static getBootloader(): string;
		static getDevice(): string;
		static getDisplay(): string;
		static getFingerprint(): string;
		static getHardware(): string;
		static getHost(): string;
		static getProduct(): string;
		static getTags(): string;
		static getType(): string;
		static getBaseOS(): string;
		static getPreviewSdkInt(): number;
		static getSecurityPatch(): string;
		static getCodename(): string;
		static getIncremental(): string;
		static getDeviceLocale(): string;
		static getPreferredLocales(): Array<string>;
		static getDeviceCountry(): string;
		static getManufacturer(): string;
		static getTimezone(): string;
		static getFontScale(): number;
		static getIs24Hour(): boolean;
		static getTotalDiskCapacity(): number;
		static getFreeDiskStorage(): number;
		static getDeviceType(): string;
		static getSupportedABIs(): Array<string>;
		static getSupported32BitABIs(): Array<string>;
		static getSupported64BitABIs(): Array<string>;
	}
}
