import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class gitbookTestUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: new Animated.Value(100),
            popupTop: new Animated.Value(height)
        };
    }
    click() {
        if (this.state.x._value == 100) {
            Animated.spring(
                this.state.x,
                { toValue: 200 }
            ).start();
        }
        else {
            Animated.timing(
                this.state.x,
                { toValue: 100 }
            ).start();
        }
    }
    popupOn() {
        if (this.state.popupTop._value != height) {
            Animated.spring(
                this.state.popupTop,
                { toValue: height }
            ).start();
        }
        else {
            Animated.spring(
                this.state.popupTop,
                { toValue: 0 }
            ).start();
        }
    }

    pupup() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#FFAAAA', flex: 1 }}>
                    <View style={{ position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30 }}></View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ backgroundColor: '#FFAA00', flex: 1 }}>
                        <View style={{ position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30 }}></View>
                    </View>
                    <View style={{ backgroundColor: '#00AAAA', flex: 1 }}></View>
                </View>
                <View style={{ backgroundColor: '#FF00AA', flex: 1 }}>
                    <View style={{ position: 'absolute', backgroundColor: '#FFFFFF', right: 30, bottom: 30, height: 30, width: 30 }}></View>
                </View>
                <TouchableOpacity onPress={this.click.bind(this)}>
                    <Animated.View style={{ position: 'absolute', backgroundColor: '#AAAAAA', right: this.state.x, bottom: 40, height: 30, width: 30 }}></Animated.View>
                </TouchableOpacity>
                <Animated.View style={{ position: 'absolute', backgroundColor: '#F0A055', height: height, width: width, top: this.state.popupTop, left: 0 }}></Animated.View>
                <TouchableOpacity onPress={this.popupOn.bind(this)}>
                    <View style={{ position: 'absolute', backgroundColor: '#FFFFFF', width: 100, height: 100, borderRadius: 50, bottom: 50, left: 30 }}>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });