import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      user:'',
      goal:[]
    }
  }
 

 addInputHandler=(text)=>{
   this.setState({
    user:text
   })
 }

 addGoalHandler=()=>{
   console.log(this.state.user)
   this.setState({
     goal:[...this.state.goal,this.state.user]
   })
 }
  

 render(){
 console.log(this.state.goal);
  return (
    <View style={styles.container}>
       <View style={styles.InputContainer}>
          <TextInput 
             placeholder="Enter Goal"
             style={styles.input}
             onChangeText={this.addInputHandler}
             value={this.state.text}
            />
          <Button 
             title='Add' 
             color="purple" 
             onPress={this.addGoalHandler}
             />
       </View>
       <ScrollView>
            {this.state.goal.map(goal=>{
            <View key={goal} style={styles.listItem}>
            <Text >{goal}</Text>
            </View>
            })}
       </ScrollView>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container:{
    padding:50
  },
    InputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
    input:{borderColor:'black',
    borderWidth:1,
    padding:10,
    width:'80%'
    },
    listItem:{
      padding:10,
      marginVertical:10,
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1
    }
});
