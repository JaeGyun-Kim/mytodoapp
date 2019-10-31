import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style = {StyleSheet.headerContainer}>
    <Text style = {StyleSheet.headerText}>My To Do App</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop:100,
    marginBottom:40,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'#00F4FC'
  }
})

export default Header;