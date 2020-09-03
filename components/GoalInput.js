import React,{Component} from 'react';
import {StyleSheet,View,TextInput,Button,Modal} from 'react-native';


class GoalInput extends Component{

render(){
    return(
        <View style={styles.inputContainer}>
         <TextInput
          placeholder="Enter Goal"
          style={styles.inputText}
          onChangeText={this.props.handleInputChange}
          value={this.props.user}
         />
         <Button 
           title="Add" 
           color="pink"
           onPress={this.props.AddGoalHandler}
           />
       </View>
    )
}
}


const styles=StyleSheet.create({
    inputText:{
      borderColor:'black',
      borderBottomWidth:1,
      padding:5,
      width:250
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
})

export default GoalInput;