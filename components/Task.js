import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ( props) => {
    return(
      <View style={styles.item}>

      <View style = {styles.itemLeft}>
      <View style={styles.square}></View>
      <Text style={styles.itemText}>{props.text}</Text>

      </View>
      <View style = {styles.circular}></View>
      </View>  
    )
}
const styles = StyleSheet.create({
item:{
backgroundColor:'#fff',
padding:15,
borderRadius:10,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginBottom:20,
},
itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'

}, 
square:{
width:21,
height:21,
backgroundColor:'red',
opacity:0.5,
borderRadius:5,
marginRight:15

},
itemText:{
    maxWidth:'90%',
    fontFamily:'fantasy',
    fontWeight:600,

}, 
circular:{
    width:15,
    height:15,
    borderColor:'purple',
    borderWidth:3,
    borderRadius:4,

}






});


export default Task;