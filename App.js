import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [number, setNumber] = React.useState(Math.floor(Math.random() * 100) + 1);

  const [text, onChangeText] = React.useState('');
  const [infoText, setInfoText] = React.useState('Guess a number between 1 and 100');
  const [laskuri, setLaskuri] = React.useState(1);
  
  
  console.log(number);

  const buttonPressed= () =>{
    let arvaus = Number(text);
    if (arvaus < number) {
      setInfoText('Your guess is too small');
      setLaskuri(Number(laskuri)+1);
    } else if (arvaus > number) {
      setInfoText('Your guess is too big');
      setLaskuri(Number(laskuri)+1);
    } else {
      Alert.alert('You guessed the number in ' + laskuri + ' guesses');
      setNumber(Math.floor(Math.random() * 100) + 1);
      setLaskuri(1);
    }
  }
    


  return (
    <View style={styles.container}>
      <Text>{infoText}</Text>
      <TextInput
      style={{width:200, borderColor:'gray', borderWidth:1}}
      onChangeText={onChangeText}
      value={text}
      keyboardType="numeric"
      />
      <Button onPress={buttonPressed}title='Make guess'/>
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
});
