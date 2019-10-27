import React from 'react';
import { StyleSheet, Image, Text, Button, View, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = {
    selectedPicture: null,
    takenPicture: null,
    isUploading: false
  }
  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    });
    this.setState({ selectedPicture: result.uri });

  }
  takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
    });
    this.setState({ selectedPicture: result.uri });
  }

  uploadImage = async () => {
    this.setState({ isUploading: true });
    let base_url = "http://10.10.71.183/apptest/";
    let uploadData = new FormData();
    uploadData.append('submit', 'ok');
    uploadData.append('file', { type: 'image/jpg', uri: this.state.selectedPicture, name: 'uploadimagetmp.jpg' });
    console.log('is working1');
    fetch(base_url, {
      method: 'post',
      body: uploadData
    }).then(response => response.json())
      .then(response => {
        console.log('is working2');

        if (response.status) {
          console.log('is working3');

          this.setState({ isUploading: false, selectedPicture: base_url + response.image });
        } else {
          this.setState({ isUploading: false });
          Alert.alert('Error', response.message);
        }
      }).catch(() => {
        Alert.alert('Error', 'Error on network.');
      })
  }
  getPermission = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
  }
  getPermission2 = async () => {

    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
    }
  }
  componentDidMount() {
    this.getPermission();
    this.getPermission2();
  }
  render() {
    return <View style={styles.container}>

      {
        this.state.selectedPicture ? 
        <Image source={{ uri: this.state.selectedPicture }} style={{ width: '80%', height: 200, resizeMode: 'contain' }} /> 
        : <Text>No image</Text>
      }
      {
        this.state.takenPicture ? 
        <Image source={{ uri: this.state.takenPicture }} style={{ width: '80%', height: 200, resizeMode: 'contain' }} /> 
        : <Text>No image</Text>
      }
      {
        this.state.isUploading && <ActivityIndicator />
      }

      <Button title="Select Image" onPress={this.selectImage} />
      <Button title="Take Picture" onPress={this.takeImage} />
      <Button title="Upload Image" onPress={this.uploadImage} />

    </View>

  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  halfcontainer: {
    flex: 1,
    flexDirection: "row"

  },
  divider: {
    flex: 1
  }
});
