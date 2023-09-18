import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [genero, setGenero] = useState(false)
  const toggleSwitch = () => setGenero(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.inputGenero}>
        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ genero ? "#f5dd4b" : "#f4f3f4" }
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text>Masculino</Text>
      </View>
      

      <Text>Altura</Text>
      <TextInput 
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />
      <Text>Peso</Text>
      <TextInput 
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGenero:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
