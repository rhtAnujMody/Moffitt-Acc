/* eslint-disable react/no-unstable-nested-components */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import combined from './SurveyCombined.json';
import axios from 'axios';

export default function SurveyMain() {
  const navigation = useNavigation();

  const getJson = from => {
    console.log(from);
      return combined;
  };

  const postData = async () => {
    try {
      const response = await axios.get('https://mocki.io/v1/89382998-78c1-4354-b037-e93fbea62cf0');
      return response.data;
    } catch (error) {
      console.error('API error:', error);
    }
  };
  
console.log('API response:', postData())
  const Type = ({text, onPress}) => {
    return (
      <TouchableOpacity style={styles.typeContainer} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (navigation.navigate('survey', {surveyData: getJson('combined')})
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#062F6E',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  typeContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
    color: 'white',
  },
});
