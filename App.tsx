import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { YourName } from './components/YourName';
import { RegisterAnother } from './components/RegisterAnother';
import { colors } from './theme';

export default function App() {
  const [name, setName] = useState('');

  const handleClear = () => {
    setName('');
  }

  return (
    <View style={styles.container}>
      {name == '' && <YourName setName={setName}/>}
      {name != '' && <RegisterAnother name={name} onClear={handleClear} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    paddingTop: 50,
  },
});
