import path from 'path';
import { config as sharedConfig } from './wdio.shared.conf.js';

const config = {
  ...sharedConfig,

  port: 4723,
  runner: 'local',
  hostname: '127.0.0.1',
  path: '/',

//
// ============
// Specs
// ============
  specs: [
    '../test/specs/android/add-note.spec.js'
  ],

  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Android GoogleAPI Emulator',
      // 'appium:platformVersion': '15.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(process.cwd(), 'app', 'android', 'ColorNote+Notepad.apk'),
      'appium:autoGrantPermissions': true
    }
  ],

  services: [[
    'appium',
    {
      args: {
        address: 'localhost',
        port: 4723,
        relaxedSecurity: true
      },
      logPath: './'
    }
  ]]
};

export { config };