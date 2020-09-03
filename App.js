import React,{Component} from 'react';
import {View,Text,StyleSheet,Button,TextInput,ScrollView,FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
class App extends Component{
constructor(){
  super();
  this.state={
    user:'',
    goal:[],
    managed:false
  }
}


handleInputChange=text=>{
  this.setState({
    user:text
  })
}


AddGoalHandler=()=>{
  this.setState({
    goal:[...this.state.goal,{key:Math.floor(Math.random().toString() *10),value:this.state.user}]
  })
}

DeleteItemHandler=(id)=>{
  const remove=this.state.goal.filter(goal=>goal.id !== id)
  this.setState({
    goal:remove
  })
}





  render(){
    console.log(this.state.goal)
  return(
   <View style={styles.container}>
     <GoalInput
       visible={this.state.managed}
       handleInputChange={this.handleInputChange}
       user={this.state.user}
       AddGoalHandler={this.AddGoalHandler}
     />
       <FlatList
         keyExtractor={(item,index)=>item.id}
         data={this.state.goal}
         renderItem={(itemData)=><GoalItem 
          title={itemData.item.value} 
           DeleteItemHandler={this.DeleteItemHandler.bind(this,id)}
         />}
       />
   </View>
  )
}
}

const styles=StyleSheet.create({
 container:{
   padding:50
 }
})

export default App;