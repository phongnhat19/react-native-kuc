import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputProps {
  value?: string;
  onChange?: (newValue: string) => void;
}

const CustomTextInput = ({value, onChange}: TextInputProps) => {
  return(
    <TextInput style={styles.textInput} value={value} onChangeText={onChange} />
  )
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 0.3,
    minWidth: 200,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  }
});