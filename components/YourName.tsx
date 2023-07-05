import { useState } from "react";
import { Button, TextInput, View } from "react-native";

type props = {
  setName: (newName: string) => void;
}

export const YourName = ({setName}: props) => {
  const [nameField, setNameField] = useState('');

  const handleClick = () => {
    setName(nameField);
  }
  
  return (
    <View>
      <TextInput
        style={{ backgroundColor: '#EEE', padding: 10 }}
        placeholder='Digite seu nome'
        placeholderTextColor={'#F4793B'}
        value={nameField}
        onChangeText={text => setNameField(text)}
      />

      <Button title='Cadastrar' onPress={handleClick} />
    </View>
  );
}