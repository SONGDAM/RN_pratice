import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const ActionButton = () => {
  return (
    <TouchableOpacity style={style.actionButton} activeOpacity={0.8}>
      <Text style={style.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  actionButton: {
    position: 'absolute',
    paddingTop: 20,
    paddingBottom: 12,
    paddingLeft: 12,
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
