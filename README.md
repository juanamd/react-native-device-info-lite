# react-native-device-info-lite

Get basic device information using react-native.
***Only Android is supported for now***

*Based on [react-native-device-info](https://github.com/react-native-community/react-native-device-info)*

All methods which required additional permissions or dependencies (or were not considered useful enough) were removed from this package to make it more lightweight.

## Usage

Unlike react-native-device-info which auto loads all constant values at startup  (which can be [quite costly](https://github.com/react-native-community/react-native-device-info/issues/517)), you must first manually call the initialize method like so:
```javascript
import DeviceInfo from "react-native-device-info-lite";

async open() {
	if (!DeviceInfo .isInitialized) await DeviceInfo.initialize();
	DeviceInfo.getSystemVersion();
	DeviceInfo.getAPILevel();
	// etc...
}
```