import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getAsync, askAsync, CAMERA, CAMERA_ROLL } from 'expo-permissions';
import { launchCameraAsync, launchImageLibraryAsync } from 'expo-image-picker';

import * as actions from '../modules/ducks';
import styles from '../styles';

class pattern extends Component {
    constructor(props) {
        super(props);
    }
    getPermission = async ( grant ) => {
        const { status } = await getAsync(grant);
        if (status !== 'granted') {
            const { status, permissions } = await askAsync(grant);
        }
    }
    selectImage = async () => {
        let result = await launchImageLibraryAsync({ 'base64': true});
        this.props.setPattern(result.base64);
    }
    componentDidMount() { // 유저가 거부했을 때 체크해보기
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
                        source={require('../icons/Pattern.png')} />
                    <View style={{ flex: 1 }}></View>
                </View>
                <View style={styles.rowSpace1}></View>
                <View style={styles.rowBtn}>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity
                        style={{ flex: 5, backgroundColor: '#7DC1E0' }}
                        onPress={this.selectImage}>
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
                        style={{ flex: 5, backgroundColor: '#7DC1E0' }}
                        onPress={ () => navigation.navigate("Palette") }>
                        <View style={{ flex: 8 }}>
                        {/* <Text>
                            otherParam:{' '}
                            {this.props.pattern}
                        </Text> */}
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 4, flexDirection: 'row' }}>
                                <Image style={styles.icon2}
                                    source={require('../icons/Palette.png')} />
                            </View>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}></View>
                            <Text style={styles.btnText}>Palette</Text>
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

pattern.navigationOptions = {
    header: null
}

export default connect(
    (state) => ({
        pattern     : state.duck.pattern,
    }), 
    (dispatch) => ({
        setPattern  : (data) => dispatch(actions.setPattern(data)),
    })
)(pattern);
