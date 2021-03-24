import {reloadApp} from 'detox-expo-helpers';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show alert with typed message', async () => {
    const textToType = 'Awesome!';

    await element(by.id('messageInput')).typeText(textToType);
    await element(by.id('showAlertButton')).tap();

    await expect(element(by.label(textToType))).toBeVisible();

    await element(by.text('OK')).tap();
  });

});
