## Release Notes

### 2.0.0
Rewritten for the React Native New Architecture. Breaking changes:

* TurboModule (Kotlin + codegen spec). Old architecture is no longer supported. Requires RN >= 0.80, Android minSdk 24.
* Plain TypeScript source, shipped as-is with no build step. No Flow, Babel or hand-written `.d.ts`.
* No `initialize()` / `isInitialized()`. Everything is synchronous.
* Named exports instead of a static class (`import { getModel } from ...`).
* Removed `getCurrentLocale()`; use `getDeviceLocale()` (now always live, not a startup snapshot).
* `getBuildNumber()` now correctly typed as `number`.
* `getPreferredLocales()` returns full BCP 47 tags (`"en-US"`) instead of bare language codes.
* `getTotalDiskCapacity()` / `getFreeDiskStorage()` now both report the internal data partition (previously total measured `/system` and free measured deprecated external storage).
* `getDeviceType()` no longer returns `"Unknown"`.
* Fixed `getSupportedABIs()`, `getSupported32BitABIs()`, `getSupported64BitABIs()` always returning `undefined`.
* Added `getDatabasePath(name)`.
* Removed all pre-API-24 fallbacks and deprecated API usage.

### 1.1.0
* Add isActiveNetworkMetered() to check if current internet connection is mobile or not
* Change isInitialized public field to isInitialized() public method
* Add Typescript declarations

### 1.0.0
* Initial release
