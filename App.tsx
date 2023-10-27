import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View, Text } from 'react-native';
import { YourName } from './components/YourName';
import { RegisterAnother } from './components/RegisterAnother';
import { colors } from './theme';

export default function App() {
  const [name, setName] = useState('');

  const handleClear = () => {
    setName('');
  }

  const handleReq = async () => {
    const filmes = await fetch('https://api.b7web.com.br/cinema/');
    const filmesJson = await filmes.json();
    return filmesJson
  }

  return (
    <View style={styles.container}>
      {name == '' && <YourName setName={setName} />}
      {name != '' && <RegisterAnother name={name} onClear={handleClear} />}
      <TouchableOpacity onPress={handleReq}>
        <Text>REQUISIÇÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    paddingTop: 50,
  },
});
