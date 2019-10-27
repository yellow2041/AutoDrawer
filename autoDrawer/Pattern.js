import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';


const Pattern = ({ navigation }) => (
    <View style={styles.container}>
        <Button
            title="패턴 다 넣어땅"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
);

Pattern.navigationOptions = {
    header: null
}

export default Pattern;