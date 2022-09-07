import { TextInput, Text, View, Button } from 'react-native';
import styles from './TextInputStyle.js';
import { useState } from 'react';

const Input = (props) => {

  return (
    <View style={styles.InputContainer}>      
      <TextInput style={styles.input} value={props.text} onChangeText={props.change} placeholder='Agregar un texto'/>
      <Button title='ADD' onPress={props.click}/> 
    </View>
  )
}

export default Input