import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getTodo } from '../api/getTodo';
import ListItem from '../components/ListItem';
// import ActionSheet from 'react-native-actions-sheet';
import ActionButton from '../components/ActionButton';

const Home = ({ navigation }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo()
      .then((data) => setTodo(data))
      .catch((error) => console.error(error));
  }, []);

  const toRegister = () => navigation.navigate('Register');

  return (
    <View style={style.container}>
      <Header />
      <FlatList
        ItemSeparatorComponent={() => <View style={style.separator} />}
        data={todo}
        renderItem={ListItem}
        keyExtractor={(item) => item.id}
      />
      <ActionButton toRegister={toRegister} />
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
