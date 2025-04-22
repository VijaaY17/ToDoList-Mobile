// import { useState } from "react"
// import { View,Text, StatusBar,StyleSheet,TextInput,ScrollView, FlatList} from "react-native"
// import { Button, Card, Title, List,IconButton } from 'react-native-paper';



// export default function ToDoList  ()  {
//     const[task,setTask] = useState<string>("")
//     const[tasks,setTasks] = useState<string[]>([])

//     const AddTask = () => {
//         if(task.trim())
//         {
//         setTasks([...tasks,task])
//         setTask("")
//         }
//     }

    
//   const deleteTask = (index : number) => {
//     const updated = [...tasks];
//     updated.splice(index, 1);
//     setTasks(updated);
//   };

// //   const editTask = (index) => {
// //     const update = setTasks(index)
// //     setTask(update)
// //   }

//   const renderItem = ({ item, index }) => (
//     <Card style={styles.card}>
//       <View style={styles.cardRow}>
//         <Text style={styles.cardText}>📝 {item}</Text>
//         <View style={styles.actions}>
//           <IconButton
//             icon="pencil"
//             size={20}
//             onPress={() => console.log("hi")}
//           />
//           <IconButton
//             icon="delete"
//             size={20}
//             onPress={() => deleteTask(index)}
//           />
//         </View>
//       </View>
//     </Card>
//   );
  

    

//     return (
        
//         <View style={styles.div}>
//             <Text style={styles.title}>ToDoList</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter a task..."
//                 placeholderTextColor="#aaa"
//                 value={task}
//                 onChangeText={setTask}
//             />
            
//              <Button
//           mode="contained"
//           onPress={AddTask}
//           style={styles.paperButton}
//           contentStyle={{ paddingVertical: 8 }}
//           buttonColor="dodgerblue"
          
//         >
//           Add Task
//         </Button>
        

//       <FlatList
//             data={tasks}
//             keyExtractor={(item,index) => index.toString()}
//            renderItem={renderItem}
//             style={styles.taskList}
//             />

            
//         </View> 
        

            
                
           
//     )
// }





// const styles = StyleSheet.create(
//     {
//         div : {
//             flex:1,
//             marginTop:40,
//             padding:40,
//             alignItems:"center"
//         },

//         title : {
//             fontSize:30,
//             fontFamily:'tahoma',
//             fontWeight:"bold",
//             color:"dodgerblue",

//         },
//         input: {
           
//             borderWidth:1,
//             width:'100%',
//             borderRadius:8,
//             fontSize:16,
//             borderColor:'#ccc',
//             padding:12,
//             marginTop:20
            
//           },
//           paperButton: {
//             width: "100%",
//             borderRadius: 8,
//             marginTop:10,
//             marginBottom:6
//           },
//           taskList: {
//             width: '100%',
//           },
//           card: {
//             marginBottom: 10,
//             backgroundColor: "#f1f5f9",
//             borderRadius: 10,
            
            
            
//           },
//           cardText: {
//             fontSize: 18,
//             color: "#111",
//           },

//           actions : {
//             flexDirection:'row'
//           },
//           cardRow :{
//             flexDirection:'row',
//             justifyContent:'space-between',
//             alignItems:'center',
//             paddingHorizontal:16,
//             paddingVertical:12
            


//           }
          


        



//     }
// )


import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';




const schema = Yup.object().shape({
  name : Yup.string().required('Name is required'),
  email : Yup.string().email('Invalid Email').required('Email is required'),
  password : Yup.string().min(6,'Password must be atleast 6 characters').required('Password is required')
})

export default function Register () {
  console.log("check")

  const {control,handleSubmit}=useForm()
  return (
  <View>
    <Text>hello world</Text>     
  </View>
  )
}




