import { Button, View, Text } from "react-native";

type props = {
  name: string;
  onClear: () => void;
}

export const RegisterAnother = ({name, onClear}: props) => {
  return (
    <View>
      <Text>Cadastrado com sucesso:{name}</Text>
      <Button title='Cadastrar Outro' onPress={onClear} />
    </View>
  );
}