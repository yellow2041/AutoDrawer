import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import * as actions from '../modules/ducks';
import { connect } from 'react-redux';
import styles from '../styles';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  sendToServer = () => {
    fetch(

    )
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}></View>
        <View style={styles.menuRow}>
          <View style={{ flex: 7 }}></View>
          <TouchableOpacity style={styles.menu}
            onPress={() => navigation.toggleDrawer()}
            title="Menu">
            <Image style={styles.menuIcon}
              source={require('../icons/menuIcon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowSpace1}></View>
        <View style={styles.rowLogo}>
          <View style={{ flex: 1 }}></View>
          <Image style={styles.logo}
            source={require('../icons/logo.png')} />
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.rowSpace1}></View>
        <View style={styles.rowBtn}>
          <View style={{ flex: 3 }}></View>
          <TouchableOpacity
            style={{ flex: 5, backgroundColor: '#448E9E' }}
            onPress={() => navigation.navigate('Sketch')}>
            <View style={{ flex: 8 }}>
              <View style={{ flex: 1 }}></View>
              <View style={{ flex: 4, flexDirection: 'row' }}>
                <Image style={styles.icon1}
                  source={require('../icons/sketchIcon.png')} />
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
                  source={require('../icons/patternIcon.png')} />
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
          <View style={{ flex: 5 }}>
            <TextInput
              style={styles.fileName}
              // navigation.getParam --- 첫번째 인자를 키로 가져옴, 단, 첫 번째 인자를 키로하는 값이 없으면 두 번째 인자를 default로 취함
              placeholder={'  ' + this.props.sketch}
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
              placeholder={'  ' + this.props.pattern}
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
            style={{ flex: 2, backgroundColor: '#448E9E', alignItems: 'center', justifyContent: 'center' }}
            onPress={ async () => {
              baseUrl = {}
              options = {
                method: 'POST',
                headers: {
                  Token: this.props.token,
                },
                body: JSON.stringify({
                  sketch: this.props.sketch,
                  pattern: this.props.pattern,
                  recommend: this.props.recommend,
                  category: this.props.category,
                })
              }

              response = await fetch(baseUrl,options)
              responseOK = response && response.ok
              if (reponseOK){
                navigation.navigate('Progress')
              }
              }}>
            <Text style={styles.goBtnText}>GO!</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={styles.rowSpace3}></View>
      </View>
    );
  }
}

Home.navigationOptions = {
  header: null,
  backgroundColor: "#FCF6E4"
}

const mapStateToProps = (state) => {
  console.log(state.duck);
  return {
    sketch      : state.duck.sketch,
    pattern     : state.duck.pattern,
    recommend   : state.duck.recommend,
    token       : state.duck.token,
    category    : state.duck.category,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSketch   : (data) => dispatch(actions.setSketch(data)),
    setPattern  : (data) => dispatch(actions.setPattern(data)),
    setRecommend: (data) => dispatch(actions.setRecommend(data)),
    setToken    : (data) => dispatch(actions.setToken(data)),
    setCategory : (data) => dispatch(actions.setCategory(data)),
    setProgress : (data) => dispatch(actions.setProgress(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);