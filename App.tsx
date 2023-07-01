import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button} from 'react-native';

export default function App() {
  const handleLoginButton = () => {
    return alert('Login!!')
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'FFF'}}>My First App</Text>
      <StatusBar style="auto" />
      <Image
        source={{uri: 'hhtps://www.google.com.br/google.jpg'}} 
        style={{width: 300, height: 100}}      
      />
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
