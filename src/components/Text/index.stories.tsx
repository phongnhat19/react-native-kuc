import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
// I import my component here
import TextInput from './';
import { View, Text } from 'react-native';

// here I define that I want to create stories with the label "Buttons",
// this will be the name in the storybook navigation

const textStories = storiesOf('Text', module);

// then I add a story with the name default view, I can add multiple stories to button stories
textStories.add('Default Text', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{marginBottom: 15}}>Default text: </Text>
    <TextInput />
  </View>
));

const ControlledText = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{marginBottom: 15}}>Controlled text: </Text>
      <TextInput value={value} onChange={setValue} />
      <Text style={{marginTop: 15}}>Text value: {value}</Text>
    </View>
  )
}

textStories.add('Text with onChange', () => <ControlledText />);