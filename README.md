# expo-detox-test
Sample project in React Native to try out Detox E2E tests

##Demo

##How to run it?
1. Install detox-cli as mentioned https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies
2. Install Expo Go client on your simulator by running `yarn downloadExpoApp`
3. Install project dependencies by running `yarn`
4. Start Expo Bundler by running `yarn ios`
5. Open new terminal window and run GUI tests by 'yarn testGUI'

## Things to know about
Since Detox 18.0.0 there's some issue with Expo support. 
So till problem is resolved i stick to detox@17.14.3. and apply patch proposed in this post https://github.com/expo/detox-tools/issues/1#issuecomment-740675824


This project uses [patch-package](https://www.npmjs.com/package/patch-package) to append some code to detox-expo-helpers, it's done automatically after installing dependencies in step #3 ('How to run it)    
