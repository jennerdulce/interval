import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient'


export default function App() {
  const onPress = () => console.log('Hi There');

  return (
    <Router>
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000}/>
      <View style={styles.container}>
        <Route exact path="/">
          <Text style={styles.title}><b>Interval</b></Text>
          <Link to="/saved">
            <TouchableHighlight>
              <Text style={styles.saved}><b>Saved Routines</b></Text>
            </TouchableHighlight>
          </Link>
          <Link to="/create">
          <TouchableHighlight>
            <Text style={styles.create}><b>Create Routine</b></Text>
          </TouchableHighlight>
          </Link>
        </Route>
        <Route exact path="/saved">
          <Text>List of Saved Stretches</Text>
        </Route>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundImage: "linear-gradient(to bottom, #4880EC, #019CAD)"
  },
  title: {
    fontSize: '30px',
    borderRadius: 4,
    border: 'white 4px solid',
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    marginBottom: '5rem'

  },
  saved: {
    backgroundColor: 'black',
    borderRadius: 4,
    border: 'white 4px solid',
    color: 'white',
    padding: 10,
    marginBottom: '2rem'
  },
  create: {
    backgroundColor: 'black',
    borderRadius: 4,
    border: 'white 4px solid',
    color: 'white',
    padding: 10
  },

});
