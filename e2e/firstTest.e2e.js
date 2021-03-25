import {reloadApp} from 'detox-expo-helpers';

const waitingForScreenToRenderTimeout = 2000;

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
        await waitFor(element(by.id('welcome'))).toBeVisible().withTimeout(waitingForScreenToRenderTimeout);
    });

    it('should have native-base components', async () => {
        await waitFor(element(by.id('tidContainer'))).toBeVisible().withTimeout(waitingForScreenToRenderTimeout);
        await expect(element(by.id('tidHeader'))).toBeVisible();
        await expect(element(by.id('tidContent'))).toBeVisible();
        await expect(element(by.id('tidForm'))).toBeVisible();
    });

    // will fail till native-base Picker is fixed
    it('should find Picker component', async () => {
        await waitFor(element(by.id('tidPicker'))).toBeVisible().withTimeout(waitingForScreenToRenderTimeout);
    });

    // will fail till native-base Picker and PickerItem is fixed
    it('should open Picker', async () => {
        await waitFor(element(by.id('tidPicker'))).toBeVisible().withTimeout(waitingForScreenToRenderTimeout);
        await element(by.id('tidPicker')).tap();
        await element(by.id('tidPickerItem2')).tap();
    });


});
