import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config/firebase/config'
import { setUser } from './config/redux/reducer/userslice'

const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            dispatch(setUser(userCredential.user))
        } catch (error: any) {
            alert(error.message)
        }
    }

  return (
    <View>
      <Text>login</Text>
      <TextInput placeholder='Email' onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder='Password' onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity onPress={handleLogin}>
        <Text style={{color: "white"}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default login
