import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getTodo } from '../api/getTodo';
import ListItem from './ListItem';
// import ActionSheet from 'react-native-actions-sheet';
import ActionButton from '../components/ActionButton';

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo()
      .then((data) => setTodo(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(todo);

  return (
    <View style={style.container}>
      <Header />
      <FlatList
        ItemSeparatorComponent={() => <View style={style.separator} />}
        data={todo}
        renderItem={ListItem}
        keyExtractor={(item) => item.id}
      />
      <ActionButton />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default Home;
