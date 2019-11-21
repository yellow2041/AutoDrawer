import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import ActionCreator from '../modules';
import styles from '../styles';

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';

class palette extends Component {
    constructor(props) {
        super(props);
    }
    onColorSelected = (navigation) => {
        this.props.setOldColor(fromHsv(this.props.color));
        this.props.setPattern(fromHsv(this.props.color));
        navigation.navigate("Pattern");
    }
    onOldColorSelected = (navigation) => {
        this.props.setPattern(this.props.oldColor);
        navigation.navigate("Pattern");
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#212021' }}>
                <ColorPicker  
                    color={ this.props.color }
                    oldColor={ this.props.oldColor }
                    onColorChange={this.props.setColor}
                    onColorSelected={() => {
                        this.props.setOldColor(fromHsv(this.props.color));
                        this.props.setPattern(fromHsv(this.props.color));
                        navigation.navigate("Pattern");
                    }}
                    onOldColorSelected= {() => {
                        this.props.setPattern(this.props.oldColor);
                        navigation.navigate("Pattern");
                    }}
                    style={styles.colorPicker}
                />
                <Button title = "확인" onPress={() => {
                        this.props.setOldColor(fromHsv(this.props.color));
                        this.props.setPattern(fromHsv(this.props.color));
                        navigation.navigate("Pattern");
                    }}></Button>
            </View>
        );
    }
}

palette.navigationOptions = {
    header: null
}

const mapStateToProps = (state) => ({
    oldColor    : state.duck.get('oldColor'),
    color       : state.duck.get('color'),
})

const mapDispatchToProps = (dispatch) => ({
    setPattern  : (data) => dispatch(actions.setPattern(data)),
    setOldColor : (data) => dispatch(actions.setOldColor(data)),
    setColor    : (data) => dispatch(actions.setColor(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(palette);