const path = require('path');
const {config} = require('./wdio.shared.conf');


// ====================
// Runner Configuration
// ====================
//
config.port = 4723;
config.runner = 'local',
config.hostname = '127.0.0.1',
config.path = '/',

//
// ============
// Specs
// ============
config.specs = [
    './test/specs/android/add-note-screen*.js'
];


//
// ============
// Capabilities
// ============
config.capabilities = [
  {
      // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        //'appium:platformVersion': '15.0', Se puede dejar desactivado, para que no exija explicitamente esta version
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app', 'ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];


exports.config = config;