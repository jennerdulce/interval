import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Link } from "react-router-dom";


export default function App() {
  const onPress = () => console.log('Hi There');

  return (
    <Router>
      <View style={styles.container}>
        <Route exact path="/">
          <Text style={styles.title}><b>Interval</b></Text>
          <TouchableHighlight onPress={onPress}>
            <Text style={styles.saved}><b>Saved Routines</b></Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={onPress}>
            <Text style={styles.create}><b>Create Routine</b></Text>
          </TouchableHighlight>
        </Route>
        <Route exact path="/saved">
          <Text>List of Saved Stretches</Text>
        </Route>
      </View>
    </Router>
  );
}