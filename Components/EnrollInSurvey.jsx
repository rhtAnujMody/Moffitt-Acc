import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const EnrollSurvey = ({navigation, route}) => {
  const [isEnroll, setIsEnroll] = useState(true);
  const [showNoEnrollButton, setShowNoEnrollButton] = useState(true);

  const noEnroll = () => {
    setIsEnroll(false);
    setShowNoEnrollButton(false);
  };

  const Enroll = () => {
    setIsEnroll(true);
  };

  return (    
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.TitleText}>{isEnroll ? 'Thank you for your participation.' : 'We understand.'}</Text>
        <Text style={styles.SecondaryInfo}>{isEnroll ? 'Someone from our team will reach out to you to tell you about smoking cessation resources we have to support you. This is an important part of your care! Please return the tablet to the front desk.' : 'Thank you for your participation. If you are interested in future studies, please...'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {showNoEnrollButton && (
          <TouchableOpacity style={styles.button2} onPress={noEnroll}>
            <Text style={{color: '#19b5fe'}}>{"No, don't enroll me"}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.buttonCs} onPress={() => { navigation.navigate('home'); }}>
          <Text style={{paddingLeft:8, paddingRight:8,}}>{isEnroll ? "Exit" : 'Return to beginning'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageCent}>
        <Image source={require('./AAC_Res.png')} style={styles.image}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  textContainer: {
    paddingTop: 80,
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: 'left',
  },
  imageCent: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  buttonCs: {
    backgroundColor: '#f9cb42',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    height: 34,
    width: 'auto',
  },
  TitleText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
    marginTop: 40,
  },
  SecondaryInfo: {
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  button2: {
    width: 140,
    borderRadius: 5,
    marginRight: 40,
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#19b5fe',
    height: 34,
  },
});

export default EnrollSurvey;
