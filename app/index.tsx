import { useState } from "react"
import { View,Text, StatusBar,StyleSheet, Button,TextInput,ScrollView} from "react-native"



export default function HomeScreen  ()  {
    const[text,setText] = useState("")
    const letter = ['A','B','C','D','E','F','G','H','I','J','K','l','m','n','o','p']
    return (
        <View style={styles.div}>
            <Text>hELLO</Text>
            <Hello name = "Vijay"/>
            <Counter/>
            <TextInput onChangeText={(newtext) => setText(newtext)} placeholder="type here"/>
            <Text>{text}</Text>
            {/* <View>
                {letter.map((letters) => {
                    return (
                        <Text style={styles.letter}>{letters}</Text>
                )
                })}
            </View> */}

            <ScrollView>
                {letter.map((letters) => {
                    return (
                        <Text style={styles.letter}>{letters}</Text>
                    )
                })}
                
            </ScrollView>


            <StatusBar barStyle="dark-content"/>
        </View>
    )
}

const Hello = ({name }) => {
    return (
        <View>
            <Text>Hello {name}</Text>
        </View>
    )
}

const Counter = () => {
     const [count,setCount] = useState(0)

     const increment = () => {
        setCount(count+1);
     }

     const decrement = () => {
        setCount(count-1);
     }

    return (
        <View>
            <Text style={styles.text}>Count : {count}</Text>
            <View style={styles.container}>
                <Button onPress={increment} title="Increment"/>
                <Button onPress={decrement} title="Decrement"/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create(
    {
        div : {
            flex: 1,
            alignItems : "center",
            justifyContent : "center"
        },

        container : {
            flexDirection : "row",
            width : "80%",
            justifyContent : "space-around",
            

        },
        text : {
            textAlign : "center",
            marginBottom : 10
        },

        letter : {
            marginBottom : 40
        }



    }
)