import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { Component,useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Survey from './Components/Survey';
import SurveyMain from './Components/SurveyMain';
import EC from './Components/EC';
import PatientForm from './Components/Form-Component';
import EnrollSurvey from './Components/EnrollInSurvey';
import combined from '/Users/faizan/Documents/Codes/Development/Moffitt/AACDemo/AAC-Demo/Components/SurveyCombined.json';
import {useNavigation} from '@react-navigation/native';


const getJson = from => {
  console.log(from);
  return combined;
};
const SurveyScreen = () => {
  const navigation = useNavigation();
  return (<Survey surveyData={getJson()} navigation={navigation}/>)
};
const Forms = ({navigation}) => {
  //  useEffect(() => {
  return (<PatientForm></PatientForm>);
};
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="home" component={Forms} />
          <Stack.Screen options={{headerShown:false}} name="surveyOptions" component={SurveyMain} />
          <Stack.Screen options={{headerShown:false}} name="survey" component={SurveyScreen}/>
          <Stack.Screen options={{headerShown:false}} name="ec" component={EC} />
          <Stack.Screen options={{headerShown:false}} name="enroll" component={EnrollSurvey}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
