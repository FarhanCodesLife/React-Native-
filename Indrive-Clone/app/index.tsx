import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config/firebase/config'
import { setUser } from './config/redux/reducer/userslice'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'

// Update the RootStackParamList type to be more explicit
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Signup: undefined;
};

// Add type for navigation prop
type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const navigation = useNavigation<SignUpScreenNavigationProp>();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                return navigation.replace("Home")
            }
        })

        return () => unsubscribe()
    }, [navigation])

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match!")
            return
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            dispatch(setUser(userCredential.user))
            alert("Account created successfully")
            
            navigation.replace("Login")
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.formContainer}>
                <TextInput 
                    placeholder='Email' 
                    onChangeText={(text) => setEmail(text)} 
                    style={styles.input}
                    placeholderTextColor="#666" 
                />
                <TextInput 
                    placeholder='Password' 
                    onChangeText={(text) => setPassword(text)} 
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor="#666" 
                />
                <TextInput 
                    placeholder='Confirm Password' 
                    onChangeText={(text) => setConfirmPassword(text)} 
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor="#666" 
                />
                <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')} 
                    style={styles.loginLink}
                >
                    <Text style={styles.loginLinkText}>
                        Already have an account? Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: '#333',
        marginTop: 100,
        marginBottom: 40,
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        width: "100%",
        height: 55,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        marginBottom: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: "#00B555",
        width: "100%",
        height: 55,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
    loginLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginLinkText: {
        color: '#00B555',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default SignUp 