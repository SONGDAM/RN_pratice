import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native';
import { TextInput } from 'react-native';

const RegisterTodo = ({ navigation }) => {
  const [title, onChangeTitle] = useState('');
  const [content, onChangeContent] = useState('');

  const handleInput = async () => {
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!request) {
        alert('try again');
      }

      if (request.ok) {
        console.log('request success');
      }

      navigation.navigate('Home');
    } catch {
      throw new Error('check the network response');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.headerWrapper}>
        <Text style={style.title}>Add Todo</Text>
      </View>
      <SafeAreaView>
        <Text style={style.textStyle}>Title</Text>

        <TextInput
          style={style.input}
          placeholder='Enter Title'
          value={title}
          onChangeText={onChangeTitle}
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
        />

        <Text style={style.textStyle}>Content</Text>
        <TextInput
          style={style.contentInput}
          multiline={true}
          numberOfLines={10}
          placeholder='Enter Content'
          value={content}
          onChangeText={onChangeContent}
          returnKeyType='done'
          blurOnSubmit={false}
          onSubmitEditing={Keyboard.dismiss}
        />
      </SafeAreaView>

      <View style={style.buttonGroup}>
        <TouchableOpacity style={style.button} onPress={handleInput}>
          <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={style.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  textStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 20,
  },
  input: {
    height: 48,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    fontSize: 18,
  },
  contentInput: {
    height: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#80cbc4',
    width: 80,
    height: 42,
    marginTop: 20,
    marginRight: 10,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 22,
  },
  backButton: {
    backgroundColor: 'white',
    width: 80,
    height: 42,
    marginTop: 20,
    marginRight: 10,
    borderRadius: 18,
  },
  backButtonText: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 22,
  },
});

export default RegisterTodo;
