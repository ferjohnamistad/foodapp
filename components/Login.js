import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet, Text, Button, Alert, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';



const App = ({navigation}) => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const onClickLogin = () => {
        fetch('http://192.168.0.184:3000/ferjohn/rich/isog', {
        method: 'POST',
        headers: {
            //Header Defination
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Content-Type':
            // 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: JSON.stringify({
            username: Username,
            password: Password
        }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.length >= 1)
            {
                Alert.alert('Enjoy browsing');
                navigation.navigate('Home');
            }else{
                alert("Username and Password doesn't exist");
            }
        })
        .catch((error) => {
            //Hide Loader
            alert('login Failed')
            console.error(error);
        });
    }

return (

    <View style={styles.loginWrapper}>
        <View>
        <Text style={styles.text}>Username</Text>
        <TextInput
            style= {styles.input}
            placeholder='Enter your username'
            placeholderTextColor={colors.textDark}
            onChangeText={(username) => setUsername(username)}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
            style= {styles.input}
            placeholder='Enter your password'
            placeholderTextColor={colors.textDark}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />
        </View>

        <View>
            <Button
            onPress={onClickLogin}
            title='Log In'
            color={colors.primary}

            />
        </View>
        <View style={styles.registerLink}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
        </View>
    
    </View>

    );
    }  


export default App;



const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.primary
    },
   
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
    },
    input: {
        width: 250,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: colors.white,
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 5,
        opacity: 0.3,
        color: colors.black,
        
    },
    loginWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    registerLink: {
        alignSelf: 'center',
        marginTop: 50,

    }
    });


