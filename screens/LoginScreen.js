import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Button, Input } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        navigation.replace('Home')
      }
    })

    return unSubscribe
  }, [])

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert(error))
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar styles='light' />
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png'
        }}
        style={{ height: 200, width: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title='Login' />
      <Button
        containerStyle={styles.button}
        type='outline'
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
})
