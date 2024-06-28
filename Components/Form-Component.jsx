import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const PatientForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  const validateForm = () => {
    const firstNameValid = firstName.trim() !== '';
    const lastNameValid = lastName.trim() !== '';
    const dobValid = dob.trim() !== '';
    const phoneNumberValid = validatePhoneNumber(phoneNumber);
    const emailValid = validateEmail(email);

    setIsFormValid(firstNameValid && lastNameValid && dobValid && phoneNumberValid && emailValid);

    setFirstNameError(!firstNameValid);
    setLastNameError(!lastNameValid);
    setDobError(!dobValid);
    setPhoneNumberError(!phoneNumberValid);
    setEmailError(!emailValid);
  };

  // Function to validate phone number
  const validatePhoneNumber = (number) => {
    return /\d{3}-\d{3}-\d{4}/.test(number);
  };

  // Function to validate email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const navigation = useNavigation();

  // Function to handle form submission
  const handleSubmit = () => {
    navigation.navigate('survey');
  };

  // Function to format phone number input
  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');
    const formatted = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    return formatted;
  };

  const formatDateOfBirth = (input) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');
    const formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
    return formatted;
  };

  const validateDateOfBirth = (dateString) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(year, month - 1, day); // month - 1 because months are zero-indexed in JavaScript Date
    
    if (date.getMonth() + 1 !== parseInt(month) || date.getDate() !== parseInt(day) || date.getFullYear() !== parseInt(year)) {
      return false;
    }
    
    return true;
};

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setDob('');
    setPhoneNumber('');
    setEmail('');
    setIsFormValid(false);
    setFirstNameError(false);
    setLastNameError(false);
    setDobError(false);
    setPhoneNumberError(false);
    setEmailError(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
            <Image
        source={require('./AAC_Res.png')} 
        style={styles.image}
      />
      </View>
      <Text style={styles.heading}>
      {'Contact Information'}
      </Text>
      <Text style={styles.sideHeading}>
      {'Please enter your contact information below, then tap “Next"'}
      </Text>
      <View style={styles.astriCont}>
        <Text style={styles.astri}>
        {'*'}
        </Text>
        <Text>
          {' indicates a required field'}
        </Text>
      </View>
      <View style={styles.astriCont}>
      <Text>{'First Name'}</Text>
      <Text style={styles.astri}>{' *'}</Text>
      </View>
      <TextInput
        style={[styles.textBoxCs, firstNameError && styles.errorBorder]}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text);
        }}
      />
      <View style={styles.astriCont}>
      <Text>{'Last Name'}</Text>
      <Text style={styles.astri}>{' *'}</Text>
      </View>
      <TextInput
        style={[styles.textBoxCs, lastNameError && styles.errorBorder]}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => {
          setLastName(text);
        }}
      />
      <View style={styles.astriCont}>
      <Text>{'Date of Birth'}</Text>
      <Text style={styles.astri}>{' *'}</Text>
      </View>
      <TextInput
        style={[styles.textBoxCs, dobError && styles.errorBorder]}
        placeholder="Date of Birth (MM/DD/YYYY)"
        value={dob}
        onChangeText={(text) => {
          if (text.length < dob.length && text.length !== 0) {
            setDob(text);
          } else {
            // Format the input as the use  r types
            setDob(formatDateOfBirth(text));
          }
          if (text.length == 0){
            setDob('');
          }
          if (text.length >= 10){
            if(!validateDateOfBirth(text)){
              Alert.alert('Error', 'Invalid date format');
            }}
        }}
      />
      <View style={styles.astriCont}>
      <Text>{'Phone Number'}</Text>
      <Text style={styles.astri}>{' *'}</Text>
      </View>
      <TextInput
        style={[styles.textBoxCs, phoneNumberError && styles.errorBorder]}
        placeholder="Phone Number (xxx-xxx-xxxx)"
        value={phoneNumber}
        onChangeText={(text) => {
          // Check if backspace is pressed
          if (text.length < phoneNumber.length && text.length !== 0) {
            setPhoneNumber(text);
          } else {
            // Format the input as the user types
            setPhoneNumber(formatPhoneNumber(text));
          }
          if (text.length == 0){
            setPhoneNumber('');
          }

        }}
      />
      <View style={styles.astriCont}>
      <Text>{'Email Address'}</Text>
      <Text style={styles.astri}>{' *'}</Text>
      </View>
      <TextInput
        style={[styles.textBoxCs, emailError && styles.errorBorder]}
        placeholder="Email Address"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateForm();
        }}
      />
      <View style={styles.buttonCent}>
      <TouchableOpacity
        style={[styles.buttonCs, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default PatientForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonCent:{
    alignItems:'center',
  },
  buttonCs: {
    marginTop: 40,
    backgroundColor: '#f9cb42',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    marginHorizontal: 16,
    width:112,
    height:42,
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 13,
    paddingHorizontal: 16,
  },
  textBoxCs: {
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 10,
    borderColor: '#ADB5BD',
    borderRadius: 4,
    borderWidth: 1,
    height: 52,
    justifyContent: 'center',
    width: 500,
  },
  errorBorder: {
    borderColor: 'red',
  },
  imageContainer: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginTop:20,
    marginLeft:20,
    fontSize: 50,
    fontWeight: 'bold',
  },
  sideHeading: {
    marginTop:10,
    marginLeft:20,
    fontSize: 25,
  },
  astri:{
    color:'red',
  },
  astriCont:{
    marginTop:20,
    marginLeft:20,
    flexDirection: 'row',
    alignContent: 'center'
  }
});
