import {ScrollView, StyleSheet, Text, Button, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Video from 'react-native-video';
const EC = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Embedded Components',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
      <View style={{alignItems:'center'}}>
        <View style={styles.imageCent}>
        <Image        
        source={require('./AAC_ResLOGOMOFFITT.png')} // Replace 'path_to_your_image.jpg' with the actual path to your image
        style={{}}></Image>
        </View>
        <View>
        {/* <VideoView
          videoURL={
            
          }
        /> */}
      <Text style={{
        marginTop: 40,
        fontSize: 50,
        fontWeight: 800}}>
        {'Educational Video'} </Text>

        <Text style={{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 400}}>
        {'Please watch the video below, and then confirm by tapping  “Next.”'} </Text>
      <Video source={{uri: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4', type: 'mp4'}} 
      // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                
       controls={true}                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
       <View style={{alignItems:'center'}}>
        <TouchableOpacity
            style={styles.buttonCs}
            onPress={() => {navigation.navigate('enroll');}
            }
          ><Text style={{color:'#111111', fontSize: 13, paddingHorizontal: 16,}}>{"Next"}</Text></TouchableOpacity>
          </View>
          </View>
      </View>
  );
};

export default EC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button2: {
    padding: '15px 30px 15px 30px',
    borderRadius: '10px',
    marginRight: '10px',
    backgroundColor: '#f9cb42',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop:20,
  },
  backgroundVideo: {
    marginTop: 40,
    width:600,
    height:500,
  },
  imageCent:{
    alignItems:'center',
    marginBottom:40,
    marginTop:40,
  },
  buttonCs: {
    marginTop: 40,
    backgroundColor: '#f9cb42',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    width:112,
  },
});
