import { View, Text, Pressable } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import { StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Text style={style.landingText}>Add</Text>
      <Text style={style.landingText}>Your Todo!</Text>
      <Pressable style={style.fabButton} color='#616161' onPress={() => navigation.navigate('Home')}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  landingText: {
    fontSize: 40,
  },
  fabButton: {
    position: 'relative',
    top: 80,
    backgroundColor: '#616161',
  },
});

export default Splash;
