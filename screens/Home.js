import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'PhotoClicker'
  };

  render() {
    let photo = this.props.navigation.getParam('photo', 'empty');


    return (
      <View style={styles.container}>
        <Image
          resizeMode='center'
          style={styles.imageHolder}
          source={photo === 'empty' ? require('../assets/logo.png') : photo}
        />
        <Button
          title='Take Photo'
          styles={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Camera');
          }}
        />
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
  },
  imageHolder: {
    alignSelf: 'center'
  },
  button: {
    margin: 20
  }
});
