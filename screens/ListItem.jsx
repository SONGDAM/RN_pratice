import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ListItem = ({ item }) => {
  return (
    <View style={style.item}>
      <Text style={style.title}>{item.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default ListItem;
