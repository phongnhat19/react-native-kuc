/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('./src/stories'); // we will create this file in the next steps
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
