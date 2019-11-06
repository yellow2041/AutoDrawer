import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { ColorPicker, toHsv } from 'react-native-color-picker';

class palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: toHsv('blue')
        };
        this.onColorChange = this.onColorChange.bind(this);
        const { navigation } = this.props;
    }
    onColorChange(color) {
        this.setState({ color })
    }
    
    render() {
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#212021' }}>
                <Text style={{ color: 'white' }}>React Native Color Picker - Controlled</Text>
                <ColorPicker
                    oldColor='purple'
                    color={this.state.color}
                    onColorChange={this.onColorChange}
                    onColorSelected={() => this.props.navigation.navigate("Pattern", {selectedPattern:this.state.color})}
                    onOldColorSelected={color => alert(`Old color selected: ${color}`)}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}

palette.navigationOptions = {
    header: null
}

export default palette;