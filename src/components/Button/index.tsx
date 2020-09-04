import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native"

type ButtonType = "normal" | "danger"

interface ButtonProps {
  onPress?: () => void;
  type?: ButtonType;
  text?: string;
}

const Button = ({onPress, type = "normal", text}: ButtonProps) => {
  let finalBtnStyle = {...styles.button}
  let finalTextStyle = {...styles.buttonText}
  if (type === "danger") {
    finalBtnStyle = {...finalBtnStyle, ...styles.dangerButton}
  } else {
    finalBtnStyle = {...finalBtnStyle, ...styles.normalButton}
  }
  return (
    <TouchableOpacity
      style={finalBtnStyle}
      onPress={onPress}
    >
      <Text style={finalTextStyle}>{text || "Button"}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 16,
    height: 48,
    minWidth: 160,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  normalButton: {
    backgroundColor: "#3498db",
  },
  dangerButton: {
    backgroundColor: "#e74c3c",
  }
});