import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,}}></View>
      <View style={styles.space2}></View>
      <Image style={styles.logo}
        source={require('./logo.png')} />
      <View style={styles.space}></View>
      <View style={styles.btnLayout}>
        <View style={styles.location}>
          <View style={styles.space2}></View>
          <Button buttonStyle={styles.btn}
            title="     Sketch     "
            titleStyle={styles.sketchTitle}
            type="outline"
          />
          <View style={styles.sideSpace}></View>
        </View>
        <View style={styles.location}>
          <View style={styles.sideSpace}></View>
          <Button buttonStyle={styles.btn}
            title="     Pattern     "
            titleStyle={styles.sketchTitle}
            type="outline"
          />
          <View style={styles.space2}></View>
        </View>
      </View>
      <View style={styles.space}></View>
      <View style={styles.space2}>
        <Button buttonStyle={styles.btn}
          title="          GO!          "
          titleStyle={styles.goTitle}
          type="outline"
        />
      </View>
      <View style={styles.space2}></View>
      <View style={styles.space}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAC0E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideSpace: {
    flex: 1,
    flexDirection: "row",
  },
  center: {
    flex: 3,
    flexDirection: "row",
  },
  btnLayout: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
  },
  space: {
    flex: 1,
  },
  space2: {
    flex: 2,
  },
  logo: {
    flex: 3,
    flexDirection: "column",
    alignItems: "flex-start",
    height: '50%',
    width: '50%',
  },
  location: {
    flex: 2,
    width: "50%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
    backgroundColor: '#448E9E',
    borderColor: '#FCF6E4',
    borderWidth: 1,
  },
  sketchTitle: {
    color: '#FCF6E4',
    fontSize: 20,
  },
  go: {
    flex: 1,
  },
  goTitle: {
    color: '#FCF6E4',
    fontSize: 30,
  }
});