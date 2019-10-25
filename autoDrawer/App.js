import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Home from "./home";
import Popup from "./popup";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}></View>
            <View style={styles.menuRow}>
                <View style={{ flex: 7 }}></View>
                <View style={{ flex: 1, backgroundColor: '#02C340' }}></View>
            </View>
            <View style={styles.rowSpace1}></View>
            <View style={styles.rowLogo}>
                <View style={{ flex: 1 }}></View>
                <Image style={styles.logo}
                    source={require('./logo.png')} />
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.rowSpace1}></View>
            <View style={styles.rowBtn}>
                <View style={{ flex: 3 }}></View>
                <View style={{ flex: 5, backgroundColor: '#02C340' }}></View>
                <View style={{ flex: 3 }}></View>
                <View style={{ flex: 5, backgroundColor: '#02C340' }}></View>
                <View style={{ flex: 3 }}></View>
            </View>
            <View style={styles.rowSpace2}></View>
            <View style={{ flex: 1 }}></View>
            <View style={styles.rowFileName}>
                <View style={{ flex: 2 }}></View>
                <View style={{ flex: 5, backgroundColor: '#02C340' }}></View>
                <View style={{ flex: 2 }}></View>
                <View style={{ flex: 5, backgroundColor: '#02C340' }}></View>
                <View style={{ flex: 2 }}></View>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={styles.rowGoBtn}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 2, backgroundColor: '#02C340' }}></View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.rowSpace3}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#CAC0E4',
    },
    menuRow: {
        flex: 3,
        flexDirection: 'row',
    },
    rowSpace1: {
        flex: 5,
    },
    rowLogo: {
        flex: 6,
        flexDirection: 'row',
    },
    rowBtn: {
        flex: 7,
        flexDirection: 'row',
    },
    rowSpace2: {
        flex: 1,
    },
    rowFileName: {
        flex: 2,
        flexDirection: 'row',
    },
    rowGoBtn: {
        flex: 4,
        flexDirection: 'row',
    },
    rowSpace3: {
        flex: 12,
    },
    logo: {
        flex: 2,
        alignItems: "flex-start",
        height: '150%',
        width: '100%',
    },
});