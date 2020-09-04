import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
// I import my component here
import Button from './';
import { View, Text } from 'react-native';

// here I define that I want to create stories with the label "Buttons",
// this will be the name in the storybook navigation

const buttonStories = storiesOf('Buttons', module);

// then I add a story with the name default view, I can add multiple stories to button stories
buttonStories.add('Default Button', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => null} />
  </View>
));

buttonStories.add('Danger Button', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => null} type="danger" />
  </View>
));


const OnPressButton = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={onPress} text="Click to increase count" />
      <View>
        <Text>Count: {count}</Text>
      </View>
    </View>
  )
}
buttonStories.add('onPress', () => <OnPressButton />);