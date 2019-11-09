import React from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import styles from './styles';

const transpose = ({ navigation }) => (
    <View style={styles.container}>
        <View style={{ flex: 2 }}></View>
        <View style={styles.menuRow}>
            <View style={{ flex: 7 }}></View>
            <TouchableOpacity style={styles.menu}
                onPress={() => navigation.toggleDrawer()}
                title="Menu">
                <Image style={styles.menuIcon}
                    source={require('./menuIcon.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.rowSpace1}></View>
        <View style={styles.rowLogo}>
            <View style={{ flex: 1 }}></View>
            <Image style={styles.logo}
                source={require('./logo.png')} />
            <View style={{ flex: 1 }}></View>
        </View>
        <Text style={styles.transposeText1}>output:                     </Text>
        <View style={{ flex: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.completeMain}
                source={require('./empty.png')} />
        </View>
        
        <View style={{ flex: 1 }}></View>
        <View style={styles.rowGoBtn}>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity
                style={{ flex: 2, backgroundColor: '#448E9E', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.navigate('Transpose')}>
                <Text style={styles.goBtnText}>GO!</Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.rowSpace3}></View>
    </View>
);

transpose.navigationOptions = {
    header: null
}

export default transpose;