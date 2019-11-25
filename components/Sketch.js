import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { getAsync, askAsync, CAMERA, CAMERA_ROLL } from 'expo-permissions';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { connect } from 'react-redux';

import styles from '../styles';
import * as actions from '../modules/ducks';
class sketch extends Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
    }
    getPermission = async ( grant ) => {
        const { status } = await getAsync(grant);
        if (status !== 'granted') {
            const { status, permissions } = await askAsync(grant);
        }
        
    }
    selectImage = async () => {
        let result = await launchImageLibraryAsync({ 'base64': true });
        this.props.setSketch(result.base64);
    }
    takeImage = async () => {
        let result = await launchCameraAsync({ 'base64': true });
        this.props.setSketch(result.base64);
    }
    componentDidMount() {
        this.getPermission(CAMERA_ROLL);
        this.getPermission(CAMERA);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 2 }}></View>
                <View style={styles.menuRow}></View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowLogo}>
                    <View style={{ flex: 1 }}></View>
                    <Image style={styles.sketch}
                        source={require('../icons/Sketch.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowBtn}>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#61B7C9' }}
                        onPress={
                            this.selectImage
                        }
                    >
                        <View style={{ flex: 8 }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon1}
                                    source={require('../icons/sketchIcon.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}> Gallery</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#61B7C9' }}
                        onPress={this.takeImage}>
                        <View style={{ flex: 8 }}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon2}
                                    source={require('../icons/cameraIcon.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}>Camera</Text>
                            <View style={{ flex: 1 }}></View>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </TouchableOpacity>
                    <View style={{ flex: 3 }}></View>
                </View>
                <View style={styles.rowSpace2}></View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowFileName}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 4 }}></View>
                    <View style={{ flex: 4 }}>
                    <Button title = "확인" onPress={() => navigation.navigate("Home")}></Button>
                    </View>
                    <View style={{ flex: 4 }}></View>
                    <View style={{ flex: 2 }}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={styles.rowSpace3}></View>
            </View>
        );
    }
}

sketch.navigationOptions = {
    header: null
}
const mapStateToProps = (state) => ({
    sketch      : state.duck.sketch,
})
const mapDispatchToProps = (dispatch) => ({
    setSketch   : (data) => dispatch(actions.setSketch(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(sketch);