import 'dotenv/config';

export default {
    "name": "BarCodeApp3",
    "slug": "barcodeapp3",
    extra: {
      enableComments: process.env.COOLAPP_COMMENTS === 'true',
    },
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "requireFullScreen": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.glc.strans",
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "description": ""
}
