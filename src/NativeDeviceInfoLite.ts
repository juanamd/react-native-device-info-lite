import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

/** Values that cannot change while the app process is alive. */
export type Constants = {
  appVersion: string;
  buildNumber: number;
  firstInstallTime: number;
  lastUpdateTime: number;
  applicationName: string;
  bundleId: string;

  systemVersion: string;
  apiLevel: number;
  baseOS: string;
  previewSdkInt: number;
  securityPatch: string;
  codename: string;
  incremental: string;

  manufacturer: string;
  model: string;
  brand: string;
  buildId: string;
  deviceId: string;
  bootloader: string;
  device: string;
  display: string;
  fingerprint: string;
  hardware: string;
  host: string;
  product: string;
  tags: string;
  type: string;

  supportedABIs: string[];
  supported32BitABIs: string[];
  supported64BitABIs: string[];

  totalDiskCapacity: number;
};

export interface Spec extends TurboModule {
  getConstants(): Constants;

  // Values that can change at runtime, read fresh on every call.
  getTimezone(): string;
  getDeviceLocale(): string;
  getDeviceCountry(): string;
  getPreferredLocales(): string[];
  getFontScale(): number;
  getIs24Hour(): boolean;
  getFreeDiskStorage(): number;
  getDeviceType(): string;
  isAutoDateAndTime(): boolean;
  isAutoTimeZone(): boolean;
  isActiveNetworkMetered(): boolean;

  hasSystemFeature(feature: string): boolean;
  getSystemAvailableFeatures(): string[];
  getDatabasePath(name: string): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DeviceInfoLite');
