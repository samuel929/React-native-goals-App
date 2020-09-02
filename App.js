import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
      this.state={
        userInput:'',
        goals:[]
      }
    
  }

  goalInputHandler=text=>{
    this.setState({
      userInput:text
    })
  }

  addGoalHandler=()=>{

  }

  render(){
  return (
    <View style={styles.container}>
       <View style={styles.InputContainer}>
           <TextInput 
            placeholder="Enter a Goal" 
            style={styles.input}
            onChangeText={this.goalInputHandler}
            value={this.state.userInput}
            />
          <Button 
            title="Add" 
            color="purple"
            onPress={this.addGoalHandler}
            />
       </View>
       <View>

       </View>
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
    }
});
