import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const todolist=[{
    id:1,
    title:"todo 1",
    isdone:'false'
  },
{
  id:1,
  title:'todo 2',
  isdone:'false'
},
{
id:3,
title: 'todo 3',
isdone:'false'},
{
  id:4,
  title:'todo 4',
  isdone:"false"
}]
  return (
    <View style={styles.container}>
      <Text>hello to do list application.</Text>
      <FlatList
      data={todolist}
      keyExtractor={(item)=>item.id.toString()}
      renderItem={({item})=><View><Text>{item.title}</Text></View>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
