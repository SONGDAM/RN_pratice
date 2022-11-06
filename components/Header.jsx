import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={style.headerWrapper}>
      <Text style={style.title}>Your List</Text>
    </View>
  );
};

const style = StyleSheet.create({
  headerWrapper: {
    paddingTop: 45,
  },
  title: {
    paddingTop: 13,
    paddingLeft: 14,
    fontSize: 32,
    color: 'white',
    height: 64,
    backgroundColor: '#80cbc4',
  },
});

export default Header;
