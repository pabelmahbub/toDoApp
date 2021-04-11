import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  return (
  <View style={styles.container}>
    <View style= {styles.taskWrapper}>
    <Text style={styles.sectionTitle}>My Today's Task List</Text>

    <View style= {styles.items}>
     <Task text={'Going to park'}/>
     <Task text={'Driving Class'}/>
     <Task text={'Coding practice'}/>
    
     </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DCE65',
    
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:700,
    marginBottom:20,
  
    fontSize:35,
    fontFamily:'Courier New', 
    alignItems:'center',
    paddingLeft:20
  },
  items:{
    marginTop:27

  }

});
