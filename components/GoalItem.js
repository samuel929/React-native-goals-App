import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

class GoalItem extends Component{

    render(){
    return(
        <View style={styles.listItem}>
            <View style={styles.flex}>
            <Text style={styles.goal}>{this.props.title}</Text>
            <TouchableOpacity onPress={this.props.FinishItemHandler}>
            <Ionicons name="md-done-all" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.DeleteItemHandler}>
            <Ionicons name="md-close" size={32} color="white" />
            </TouchableOpacity>
            </View>
        </View> 
    )
}
}

const styles=StyleSheet.create({
    flex:{
        flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center'
      },
      goal:{
       color:'white',
       textAlign:'center',
       fontSize:17
      },
      listItem:{
        padding:10,
        backgroundColor:'pink',
        marginVertical:10,
        textAlign:'center',
        borderColor:'pink',
        justifyContent:'space-between',
        borderWidth:1,
        borderRadius:5
      },
})

export default GoalItem;