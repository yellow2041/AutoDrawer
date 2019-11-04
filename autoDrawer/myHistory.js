import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';


const transpose = ({ navigation }) => (
    <View style={styles.container}>
        <Button
            title="변환 완료!"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
);

transpose.navigationOptions = {
    header: null
}

export default transpose;