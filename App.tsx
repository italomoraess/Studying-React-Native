import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleLoginButton = () => {
    setName('Italo Moraes');
    setAge(26);
  }

  const handleClear = () => {
    setName('');
    setAge(0)
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'hhtps://www.google.com.br/google.jpg'}} 
        style={{width: 300, height: 100}}      
      />
      <TextInput
       style={{backgroundColor: '#EEE', padding: 10}}
       placeholder='Digite seu nome:'
      />

      { name != '' && <Text>Logado com {name} e tem {age} anos</Text> }

      { name != '' && <Button title='Limpar Tudo' onPress={handleClear} /> }

      <Button title='Login' onPress={() => {handleLoginButton()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054F77',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
