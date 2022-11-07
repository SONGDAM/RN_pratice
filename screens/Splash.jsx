import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import { StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  return (
    <View style={globalStyle.container}>
      <Text style={style.landingText}>Add</Text>
      <Text style={style.landingText}>Your Todo!</Text>
      <TouchableOpacity style={style.fabButton} color='#616161' onPress={() => navigation.navigate('Home')}>
        <Text style={style.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
    width: 120,
    height: 40,
    paddingTop: 8,
    borderRadius: 12,
    backgroundColor: '#616161',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Splash;
