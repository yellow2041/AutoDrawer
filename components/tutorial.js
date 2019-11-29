import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Slideshow from 'react-native-image-slider-show';

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:[
                JSON.stringify(require('../icons/tutorial_image/1.jpg')),
                '../icons/tutorial_image/2.jpg',
                '../icons/tutorial_image/3.jpg',
                '../icons/tutorial_image/4.jpg',
                '../icons/tutorial_image/6.jpg',
            ]
        };
    }
render(){
    return(
    <View style={{flex: 1}}>
        <Slideshow 
      dataSource={[
        require('../icons/tutorial_image/1.jpg'),
        require('../icons/tutorial_image/2.jpg'),
        require('../icons/tutorial_image/3.jpg'),
        require('../icons/tutorial_image/4.jpg'),
        require('../icons/tutorial_image/5.jpg'),
        require('../icons/tutorial_image/6.jpg')
    ]}/> 
    </View>
);
    }
}

export default Tutorial;