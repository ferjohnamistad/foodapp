import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from "../assets/colors/colors";

export default class Register extends Component {

  usernameInputRef = React.createRef();
  passwordInputRef = React.createRef();
  firstnameInputRef = React.createRef();
  lastnameInputRef = React.createRef();
  addressInputRef = React.createRef();
  phoneInputRef = React.createRef();
  scrollViewRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        address: '',
        phone: '',
        showEmailError: false,
        showPasswordError: false,
        showFirstnameError: false,
        showLastnameError: false,
        showAddressError: false,
        showPhoneError: false,
    };
    this.submitPressed = this.submitPressed.bind(this);
  }

  inputs = () => {
    return [
      this.usernameInputRef,
      this.passwordInputRef,
      this.firstnameInputRef,
      this.lastnameInputRef,
      this.addressInputRef,
      this.phoneInputRef,
    ];
  };

  editNextInput = () => {
    console.log("editNextInput")
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }

    const nextIndex = activeIndex + 1;
    if (nextIndex < this.inputs().length && this.inputs()[nextIndex].current != null) {
        this.setFocus(this.inputs()[nextIndex], true);
    } else {
        this.finishEditing();
    }
  }

  onInputFocus = () => {
    this.setState({
        activeIndex: this.getActiveInputIndex(),
    });
  }

  onChangeInputHandler = (name, value) => {
    this.setState({
        [name]: value,
    });
  }

  getActiveInputIndex = () => {
    const activeIndex = this.inputs().findIndex((input) => {
        if (input.current == null) {
            return false;
        }
        console.log("input: ", input);
        return input.current.isFocused();
    });
    console.log("activeIndex: ", activeIndex);
    return activeIndex;
  }

  finishEditing = () => {
    const activeIndex = this.getActiveInputIndex();
    if (activeIndex === -1) {
        return;
    }
    this.setFocus(this.inputs()[activeIndex], false);
  }

  setFocus(textInputRef, shouldFocus) {
    if (shouldFocus) {
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    } else {
        textInputRef.current.blur();
    }
  }

  submitPressed = () => {
    const{username, password, firstname, lastname,address,phone} = this.state;
    if(username && password && firstname && lastname && address && phone){
        fetch('http://192.168.0.184:3000/api/register', 
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
            ({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                address: this.state.address,
                phone: this.state.phone,
            }),
        })
            .then ((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                console.log('Registration Success. Please Login to pressed');
                alert('Registration Success');
                this.props.navigation.navigate('Login');
            })
            .catch((error) => {
                alert('Registration Failed');
                
            })
    }
    else
    {
        alert('FIelds must not be emtpy')
    }
}   

  render() {
    return (
        <KeyboardAwareScrollView
          style={styles.container}
          contentOffset={{ x: 0, y: 24 }}
          ref={this._scrollViewRef}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingTop: 24 }}
          contentInsetAdjustmentBehavior="always"
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          enableOnAndroid={true}
          extraHeight={32}
          extraScrollHeight={Platform.OS == "android" ? 32 : 0}
          enableResetScrollToCoords={false}
          onKeyboardDidShow={this._keyboardDidShowHandler}
        >
            <View style={styles.container}>

                <Text style={styles.header}>Registration</Text>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Username"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(userName) => this.setState({username: userName})}
                        ref={this.usernameInputRef}
                    />
                    {this.state.showEmailError &&
                        <Text style={styles.errorText}>Please enter your username.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(Password) => this.setState({password: Password})}
                        ref={this.passwordInputRef}
                    />
                    {this.state.showPasswordError &&
                        <Text style={styles.errorText}>Please enter a password.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="First Name"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(firstName) => this.setState({firstname: firstName})}
                        ref={this.firstnameInputRef}
                    />
                    {this.state.showFirstnameError &&
                        <Text style={styles.errorText}>Please enter your first name.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Last Name"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(lastName) => this.setState({lastname: lastName})}
                        ref={this.lastnameInputRef}
                      />
                    {this.state.showLastnameError &&
                        <Text style={styles.errorText}>Please enter your last name.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Address"
                        style={styles.textInput}
                        returnKeyType="next"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(addRess) => this.setState({address: addRess})}
                        ref={this.addressInputRef}
                      />
                    {this.state.showAddressError &&
                        <Text style={styles.errorText}>Please enter your address.</Text>
                    }
                </View>

                <View style={styles.inputTextWrapper}>
                    <TextInput
                        placeholder="Phone"
                        style={styles.textInput}
                        returnKeyType="done"
                        onSubmitEditing={this.editNextInput}
                        onFocus={this.onInputFocus}
                        onChangeText={(Phone) => this.setState({phone: Phone})}
                        ref={this.phoneInputRef}
                    />
                    {this.state.showPhoneError &&
                        <Text style={styles.errorText}>Please enter your phone number.</Text>
                    }
                </View>

                <View style={styles.btnContainer}>
                  <Button title="Submit" onPress={this.submitPressed} color={colors.primary} />
                </View>

            </View>
        </KeyboardAwareScrollView>
      );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
      backgroundColor: colors.white,
    },
    header: {
      fontSize: 35,
      padding: 10,
      margin: 12,
      textAlign: "center",
      color: colors.black,
      backgroundColor: colors.primary,
      borderTopLeftRadius: 25,
      borderBottomRightRadius: 25,
      marginBottom: 50,
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight: 30,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop:36,
    }
  });