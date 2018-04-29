import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text>soy un header</Text></View>
        <View style={styles.elemContainer}>
          <View style={styles.elem1}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>HOLA SOY LAURA!.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>

          <View style={styles.elem2}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>HOLA SOY LAURA!.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>



          <View style={styles.elem3}>
            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Press Me"
              color="#841584"
            />
            <ScrollView >
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
              <View style={[styles.scrollelem]}></View>
            </ScrollView>
          </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  scrollelem: {
    backgroundColor: 'powderblue',
    margin: 10,
    height: 50,
    width: "100%"
  },
  buttom: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    color: '#f0f0f0',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'blue'
    //    flexDirection: 'column',
    // alignItems: 'center',
    //   backgroundColor: 'gray',
    //  justifyContent: 'center'
  },
  header: {
    height: 50,
    //  flex: 1,
    backgroundColor: 'lightgray'
  },
  elemContainer: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'purple',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  elem1: {
    flex: 1,
    backgroundColor: 'red'
  },
  elem2: {
    flex: 2,
    backgroundColor: 'blue'
  },
  elem3: {
    flex: 5,
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  subelem: {
    flex: 1,
    margin: 10
    //  marginTop: 10,
    // width: '90%'
  },
  subelem1: {
    backgroundColor: 'powderblue'
  },

  subelem2: {
    backgroundColor: 'skyblue'
  },

  subelem3: {
    backgroundColor: 'lightblue',
  }

});
