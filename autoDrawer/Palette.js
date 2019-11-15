import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import { connect } from 'react-redux';
import ActionCreator from './actions';


class palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: paletteState.color,
            oldColor: paletteState.oldColor
        }
        this.onColorChange = this.onColorChange.bind(this);
        this.onColorSeledted.bind(this);
        this.onOldColorSelected.bind(this);
    }
    onColorChange = (color) => {
        paletteState.color = color;
        this.setState({color: color})
    }
    onColorSelected = (navigation) => {
        paletteState.oldColor = fromHsv(this.state.color);
        navigation.navigate("Pattern", { selectedColor: fromHsv( this.state.color ) })
    }
    onOldColorSelected = (navigation) => {
        navigation.navigate("Pattern", { selectedColor: this.state.oldColor})
    }
    componentDidMount() {
        this.setState({
            color: paletteState.color,
            oldColor: paletteState.oldColor
        })
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#212021' }}>
                <Text style={{ color: 'white' }}>React Native Color Picker - Controlled</Text>
                <NavigationEvents onDidFocus={() => this.setState( {
                    color: paletteState.color,
                    oldColor: paletteState.oldColor
                })} />
                <ColorPicker    
                    oldColor= {this.state.oldColor}
                    color= {this.state.color}
                    onColorChange={this.onColorChange}
                    onColorSelected={this.onColorSelected}
                    
                    onOldColorSelected= {this.onOldColorSelected}
                    style={{ flex: 1 }}
                />
                <Button title = "확인" onPress={this.onColorSelected}></Button>
            </View>
        );
    }
}

palette.navigationOptions = {
    header: null
}

function mapStateToProps(state) {
    return {
        pattern: state.pattern
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setName: (name) => {
            dispatch(ActionCreator.setName(name));
        },
        setImage: (image) => {
            dispatch(ActionCreator.setImage(image));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(palette);