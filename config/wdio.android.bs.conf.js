import path from 'path';
import 'dotenv/config';
// Required for corporate proxy SSL interception
// DO NOT use in production environments
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { config } from './wdio.shared.conf.js';

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// SSL Certificates
// ============
config.hostname = 'hub-cloud.browserstack.com';
config.protocol = 'https';
config.port = 443;

config.connectionRetryTimeout = 180000;
config.connectionRetryCount = 3;

config.connectionOptions = {
  rejectUnauthorized: false
};

config.maxInstances = 1;

//
// ============
// Specs
// ============
config.specs = [
  '../test/specs/android/add-note-screen.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Google Pixel 7',
  'appium:platformVersion': '13.0',
  'appium:app': 'bs://0f2bd12ce9d2f4af5380012f169ee900c5c1d813',
  'appium:autoGrantPermissions': true,
  'bstack:options': {
    projectName: 'WDIO Appium POC',
    buildName: 'Android tests',
    sessionName: 'add-note-screen'
  }
}];

//
// ============
// Services
// ============
config.services = [
  ['browserstack', {
    testObservability: false,
    accessibility: false,
    browserstackLocal: false
  }]
];

export { config };