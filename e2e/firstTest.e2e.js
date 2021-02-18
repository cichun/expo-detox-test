import {reloadApp} from 'detox-expo-helpers';

describe('Example', () => {
  beforeAll(async () => {
    // await device.launchApp();
    await device.launchApp({
      newInstance: true,
      launchArgs: { detoxURLBlacklistRegex: ' \\("http://192.168.1.253:19001/onchange","http://192.168.2.109:19000","https://e.crashlytics.com/spi/v2/events"\\)' },
    });
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
    await device.setURLBlacklist(['.*192.168.2.109.*','.*127.0.0.1.*', '.*exp.host.*']);
    await reloadApp();
    //http://192.168.2.109:19000
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show alert with typed message', async () => {
    await element(by.id('messageInput')).typeText('Awesome!');
    await element(by.id('showAlertButton')).tap();
    // await expect(element(by.text('Awesome'))).toBeVisible();
  });

});
