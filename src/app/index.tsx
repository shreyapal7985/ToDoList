import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';

export default function Index() {
  const todolist=[{
    id:1,
    title:"todo 1",
    isdone:false
  },
{
  id:1,
  title:'todo 2',
  isdone:false
},
{
id:3,
title: 'todo 3',
isdone:false},
{
  id:4,
  title:'todo 4',
  isdone:true
}]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity onPress={()=>{}}>
        <Ionicons
  name="home"
  size={24}
  color={"black"}/>
  </TouchableOpacity>

<TouchableOpacity onPress={()=> {}}>
<Image source={{uri:"https://xsgames.co/randomusers/assets/avatars/female/3.jpg"}}
style={{height:40, width:40, borderRadius:20}}/>
</TouchableOpacity>

</View>

<View style={styles.searchBar}>
  <Ionicons 
  name="search"
  size={24}
  color="#333"/>
  <TextInput placeholder="search"  style={styles.searchIput} clearButtonMode="always"/>

</View>
      <Text>hello to do list application.</Text>
      <FlatList
      data={todolist}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=><View style={styles.todoContainer}>
        <View style={styles.todoInfoContainer}>
        <Checkbox  value={item.isdone} style={{height:16, width:16}} color={item.isdone? "#7c6ee9":undefined}/>
        <Text style={[styles.todoText, item.isdone && {textDecorationLine:'line-through'}]}>{item.title}</Text>
        </View>
        <TouchableOpacity onPress={()=>{}} >
          <Ionicons 
          name="trash"
          size={24}
          color={"red"}/>
          </TouchableOpacity></View>}
      />

      //FOOTER SECTION
      <KeyboardAvoidingView behavior={"padding"} style={styles.footer} keyboardVerticalOffset={10}>
        <TextInput placeholder="add new todo" style={styles.newTodoInput}/>
<TouchableOpacity  style={styles.addButton} onPress={()=>{}}>
  <Ionicons 
  name="add"
  size={24}
  color={'#333'}/>
</TouchableOpacity>
      </KeyboardAvoidingView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor:'#f5f5f5'
  },
  header:{
    marginBottom:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  searchBar:{
backgroundColor:"#fff",
flexDirection:'row',
alignItems:"center",
marginBottom:20,
borderRadius:20,
borderColor:"pink",
borderWidth:2,
gap:5,//this is used to give spacing between two child components 
padding:5
  },
  searchIput:{
    flex:1,
    fontSize:20,
    color:"#333",
    
  },
  todoContainer:{
flexDirection:"row",
alignItems:'center',
justifyContent:'space-between',
backgroundColor:'#fff',
marginBottom:20,
padding:16,
marginTop:10,
borderRadius:20,
borderWidth:2,
borderColor:'#c1bbbb',
shadowColor:'blue',
elevation:2
  },
  todoInfoContainer:{
flexDirection:'row',
alignItems:'center',
gap:10
  },
todoText:{
  fontSize:16,
  color:'#333'
},
footer:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
},
newTodoInput:{
backgroundColor:'#fff',
flex:1,
fontSize:16,
padding:16,
color:'#333',
borderRadius:20,
borderWidth:2,
borderColor:'#c1bbbb',
shadowColor:'blue',
elevation:2
},
addButton:{
backgroundColor:'#dfdcf5',
borderRadius:20,
padding:8,
marginLeft:20
}

});
