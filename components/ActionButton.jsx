import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const ActionButton = ({ toRegister }) => {
  return (
    <TouchableOpacity style={style.actionButton} activeOpacity={0.8} onPress={toRegister}>
      <Text style={style.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  actionButton: {
    position: 'absolute',
    bottom: 32,
    right: 22,
    paddingTop: 12,
    paddingLeft: 14,
    backgroundColor: '#80cbc4',
    width: 80,
    height: 58,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
  },
});

export default ActionButton;
