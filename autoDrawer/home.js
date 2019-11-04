import React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{ flex: 2 }}></View>
    <View style={styles.menuRow}>
      <View style={{ flex: 7 }}></View>
      <TouchableOpacity style={styles.menu}
      onPress= {navigation.toggleDrawer}
      title="Menu">
        <Image style={styles.menuIcon}
        source={require('./menuIcon.png')}/>
      </TouchableOpacity>
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
      <TouchableOpacity 
      style={{ flex: 5, backgroundColor: '#448E9E'}}
      onPress={() => navigation.navigate('Sketch')}>
        <View style={{ flex: 8 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <Image style={styles.icon1}
              source={require('./sketchIcon.png')} />
          </View>
        </View>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Text style={styles.btnText}> Sketch</Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1 }}></View>
      </TouchableOpacity>
      <View style={{ flex: 3 }}></View>
      <TouchableOpacity 
      style={{ flex: 5, backgroundColor: '#448E9E' }}
      onPress={() => navigation.navigate('Pattern')}>
        <View style={{ flex: 8 }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <Image style={styles.icon2}
              source={require('./patternIcon.png')} />
          </View>
        </View>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Text style={styles.btnText}>Pattern</Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1 }}></View>
      </TouchableOpacity>
      <View style={{ flex: 3 }}></View>
    </View>
    <View style={styles.rowSpace2}></View>
    <View style={{ flex: 1 }}></View>
    <View style={styles.rowFileName}>
      <View style={{ flex: 2 }}></View>
      <View style={{ flex: 5}}>
        <TextInput
        style={styles.fileName}
        placeholder="  파일명"
        placeholderTextColor='#448E9E'
        autoCapitalize="none"
        editable={false}
        //onChangeText={this.sketchFile}
        />
      </View>
      <View style={{ flex: 2 }}></View>
      <View style={{ flex: 5 }}>
      <TextInput
        style={styles.fileName}
        placeholder="  파일명or색상코드"
        placeholderTextColor='#448E9E'
        autoCapitalize="none"
        editable={false}
        //onChangeText={this.patternFile}
        />
      </View>
      <View style={{ flex: 2 }}></View>
    </View>
    <View style={{ flex: 1 }}></View>
    <View style={styles.rowGoBtn}>
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity 
      style={{ flex: 2, backgroundColor: '#448E9E', alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigation.navigate('Transpose')}>
        <Text style={styles.goBtnText}>GO!</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
    </View>
    <View style={styles.rowSpace3}></View>
  </View>
);

Home.navigationOptions = {
  header: null,
  backgroundColor: "#FCF6E4"
}

export default Home;