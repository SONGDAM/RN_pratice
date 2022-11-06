import { View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getTodo } from '../api/getTodo';
// import ActionSheet from 'react-native-actions-sheet';
// import ActionButton from '../components/ActionButton';

const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo().then((data) => setTodo(data));
  }, []);

  console.log(todo);

  return (
    <View>
      <Header />
    </View>
  );
};

export default Home;
