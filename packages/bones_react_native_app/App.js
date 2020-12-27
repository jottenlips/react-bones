/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Bones} from 'react-bones/native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              maxWidth: 300,
              backgroundColor: '#000000',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: 5,
              padding: 24,
            }}>
            <Text
              style={{
                maxWidth: 300,
                textAlign: 'center',
                color: '#ffffff',
                borderRadius: 10,
                bottomMargin: 10,
              }}>
              {'💀 npm i react-bones 💀 '}
            </Text>
            <View style={{padding: 10}} />
            <Text style={{color: '#ffffff'}}>
              {'Dead simple loading components for React and React-Native'}
            </Text>
          </View>
          <Bones />
          {/* <View style={{width: 300, padding: 24, backgroundColor: '#ffffff'}}>
            <Bones borderRadius={25} />
            <View style={{padding: 10}} />
            <Bones width={'100%'} height={20} borderRadius={10} />
            <View style={{padding: 10}} />
            <Bones width={'100%'} height={20} borderRadius={10} />
            <View style={{padding: 10}} />
            <Bones width={'100%'} height={20} borderRadius={10} />
            <View style={{padding: 10}} />
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    width: '100%',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
