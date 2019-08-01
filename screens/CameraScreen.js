import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      isFlashOn: Camera.Constants.FlashMode.off
    };
  }

  static navigationOptions = {
    title: 'Camera'
  };

  //Ask for camera permission
  async componentDidMount() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  //Flip the camera
  flipCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back 
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    });
  }

  //Toggle flash light
  flashLight = () => {
    this.setState({
      isFlashOn: this.state.type === Camera.Constants.FlashMode.off 
      ? Camera.Constants.FlashMode.on
      : Camera.Constants.FlashMode.off,
    });
  }

  //Take picture and send it to home screen
  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.props.navigation.navigate('Home', {photo});
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Camera Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
