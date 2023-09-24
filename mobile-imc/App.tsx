import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [genero, setGenero] = useState(false)
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight/(height * height)

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
      if (imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado normal`
        );
      if (imc > 26.4 && imc <= 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso`
        );
      if (imc > 27.8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} e está obeso`
        );
    } else {
      if (imc < 19.1)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso`
        );
      if (imc >= 19.1 && imc <= 25.8)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado normal`
        );
      if (imc > 25.8 && imc <= 27.3)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso`
        );
      if (imc > 27.3 && imc <= 32.3)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está acima do peso`
        );
      if (imc > 32.3)
        return Alert.alert(
          "Obesa!",
          `Seu IMC é de ${imc.toFixed(2)} e está obesa`
        );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Tittle}>Calculadora IMC 💪</Text>


      <View style={styles.inputGenero}>
        <Text style={styles.text}>Feminino</Text>
        <Switch
          trackColor={{ false: "#ffc0cb", true: "#81b0ff" }}
          thumbColor={ genero ? "#81b0ff" : "#ffc0cb" }
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={genero}
        />
        <Text style={styles.text}>Masculino</Text>
      </View>
      

      <Text style={styles.text}>Altura</Text>
      <TextInput 
        style={styles.input}
        keyboardType='number-pad'
        value={altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />
      <Text style={styles.text}>Peso</Text>
      <TextInput 
        style={styles.input}
        keyboardType='number-pad'
        value={peso}
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />
      <TouchableOpacity onPress={handleCalcular} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGenero:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    height:54,
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:8,
    justifyContent:"center",
    paddingHorizontal:16,
    marginTop:7,
    borderWidth:1,
    borderColor:"#000"
  },
  button:{
    backgroundColor:"#2ad131",
    width:"80%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 12,
  },
  text: {
    color: '#fff'
  },
  Tittle: {
    color: '#fff',
    fontSize: 30,
    position: 'relative',
    bottom: 70,
  },

});
