import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';


const Sketch = ({ navigation }) => (
    <View style={styles.container}>
        <Button
            title="스케치 다 넣어땅ㅎㅎ"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
);

Sketch.navigationOptions = {
    header: null
}

export default Sketch;