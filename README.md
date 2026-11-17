# react-native-device-info-lite

Basic device information for React Native. **Android only, New Architecture only** (TurboModule).

Requires React Native **0.80+** with the New Architecture enabled (the default). Android `minSdk` 24.

*Based on [react-native-device-info](https://github.com/react-native-community/react-native-device-info). Anything that needs extra permissions or dependencies was left out to keep this light.*

## Install

```sh
npm install react-native-device-info-lite
```

Autolinking does the rest. No initialization is needed and every call is synchronous.

```ts
import { getModel, getAPILevel, getDatabasePath } from 'react-native-device-info-lite';

getModel();                   // "Pixel 8"
getAPILevel();                // 35
getDatabasePath('app.db');    // "/data/user/0/com.myapp/databases/app.db"
```

Nothing is loaded at startup. Static values (build info, app info) are fetched from native once on first use and cached. Values that can change while the app runs are read fresh on every call.

## API

**App**: `getVersion`, `getBuildNumber`, `getFirstInstallTime`, `getLastUpdateTime`, `getApplicationName`, `getBundleId`

**System / build**: `getSystemVersion`, `getAPILevel`, `getBaseOS`, `getPreviewSdkInt`, `getSecurityPatch`, `getCodename`, `getIncremental`, `getManufacturer`, `getModel`, `getBrand`, `getBuildId`, `getDeviceId`, `getBootloader`, `getDevice`, `getDisplay`, `getFingerprint`, `getHardware`, `getHost`, `getProduct`, `getTags`, `getType`, `getSupportedABIs`, `getSupported32BitABIs`, `getSupported64BitABIs`, `getTotalDiskCapacity`

**Live** (read on every call): `getTimezone`, `getDeviceLocale`, `getDeviceCountry`, `getPreferredLocales`, `getFontScale`, `getIs24Hour`, `getFreeDiskStorage`, `getDeviceType` (`'Handset' | 'Tablet' | 'Tv'`), `isAutoDateAndTime`, `isAutoTimeZone`, `isActiveNetworkMetered`, `hasSystemFeature(feature)`, `getSystemAvailableFeatures()`

**Paths**: `getDatabasePath(name)` returns the absolute path from `Context.getDatabasePath(name)`. The `databases` directory is created if missing, the file is not. `name` must not contain a path separator.

## Development

The package ships plain TypeScript source (no build step); Metro compiles it like app code.

```sh
npm install
npm run typecheck
```
