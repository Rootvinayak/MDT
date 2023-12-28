import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const Signin = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const validateEmail = (text: any) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid || text === ''); // Set isValidEmail to true if text is empty
    setEmail(text);
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'} enabled={true}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.container1}>
          {/* <Image
                        style={styles.logo}
                        source={require('../Images/Mdtlogo.png')}
                    /> */}
          <Text style={{color: 'grey', fontSize: 30}}>Compass</Text>
        </View>
        {/* <View style={styles.container}> */}
        <View style={styles.container}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={validateEmail}
          />
          {!isValidEmail && email !== '' && (
            <Text style={styles.errorText}>
              Please enter a valid email address
            </Text>
          )}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setRememberMe(!rememberMe)}>
              <View style={[styles.checkbox, rememberMe && styles.checked]}>
                {rememberMe && <Feather name="check" size={14} color="black" />}
              </View>
              <Text
                style={styles.checkboxText}
                onPress={() => setRememberMe(!rememberMe)}>
                Remember Me
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => console.log('Forgot Password pressed')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.link}>
            Don't have an account?{' '}
            <Text
              style={{textDecorationLine: 'underline'}}
              // onPress={() => navigation.navigate('Signup')}
            >
              Request access
            </Text>
          </Text>
          {/* </View> */}
          <TouchableOpacity
            style={[
              styles.largeSignInButton,
              (email.trim() === '' || !isValidEmail) && styles.disabledButton,
            ]}
            onPress={() => {
              if (
                email.trim() !== '' &&
                password.trim() !== '' &&
                isValidEmail
              ) {
                navigation.navigate('Tickets');
              }
            }}
            disabled={
              email.trim() === '' || !isValidEmail || password.trim() === ''
            }>
            <View>
              <Text style={styles.largeButtonText}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
    marginBottom: 10,
    marginTop: 20,
  },
  container1: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    paddingLeft: 1,
    color: 'gray',
    padding: 3,
  },
  input: {
    alignContent: 'center',
    flex: 1,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: '100%',
  },
  link: {
    color: 'gray',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  checkboxRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 16,
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 5,
  },
  checked: {
    backgroundColor: 'white',
  },
  checkboxText: {
    color: 'gray',
  },
  forgotPassword: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  forgotPasswordText: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
  largeSignInButton: {
    backgroundColor: 'transparent', // Set background color to transparent
    borderWidth: 1, // Add border width
    borderColor: 'grey', // Set border color to black
    paddingVertical: 20, // Adjust padding vertically
    alignItems: 'center',
    marginTop: 20,
    marginBottom: '50%',
    width: '100%',
  },
  largeButtonText: {
    color: 'grey',
    fontSize: 18,
  },
  disabledButton: {
    opacity: 0.3,
  },
  invalidInput: {
    borderColor: 'red', // Change the border color to indicate invalid input
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default Signin;
