import { useState } from "react"
import { View,Text, StatusBar,StyleSheet,TextInput,ScrollView, FlatList} from "react-native"
import { Button, Card, Title, Paragraph } from 'react-native-paper';



export default function ToDoList  ()  {
    const[task,setTask] = useState<string>("")
    const[tasks,setTasks] = useState<string[]>([])

    const AddTask = () => {
        if(task.trim())
        setTasks([...tasks,task])
        setTask("")
    }

    

    return (
        
        <View style={styles.div}>
            <Text style={styles.title}>ToDoList</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a task..."
                placeholderTextColor="#aaa"
                value={task}
                onChangeText={setTask}
            />
            
             <Button
          mode="contained"
          onPress={AddTask}
          style={styles.paperButton}
          contentStyle={{ paddingVertical: 8 }}
          buttonColor="dodgerblue"
          
        >
          Add Task
        </Button>
        

      <FlatList
            data={tasks}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => (
                <Card style={styles.card}>
                    <Card.Content>
                    <Title style={styles.cardText}>📝 {item}</Title>
                    </Card.Content>
                    </Card>
            )}
            style={styles.taskList}
            />

            
        </View> 
        

            
                
           
    )
}





const styles = StyleSheet.create(
    {
        div : {
            flex:1,
            marginTop:40,
            padding:40,
            alignItems:"center"
        },

        title : {
            fontSize:30,
            fontFamily:'tahoma',
            fontWeight:"bold",
            color:"dodgerblue",

        },
        input: {
           
            borderWidth:1,
            width:'100%',
            borderRadius:8,
            fontSize:16,
            borderColor:'#ccc',
            padding:12,
            marginTop:20
            
          },
          paperButton: {
            width: "100%",
            borderRadius: 8,
            marginTop:10
          },
          taskList: {
            width: '100%',
          },
          card: {
            marginBottom: 10,
            backgroundColor: "#f1f5f9",
            borderRadius: 10,
            
            
            
          },
          cardText: {
            fontSize: 18,
            color: "#111",
          },
          


        



    }
)