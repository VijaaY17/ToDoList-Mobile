import { useState } from "react"
import { View,Text, StatusBar,StyleSheet, Button } from "react-native"



export default function HomeScreen  ()  {
    return (
        <View style={styles.div}>
            <Text>hELLO</Text>
            <Hello name = "Vijay"/>
            <Counter/>
            <StatusBar barStyle="dark-content"/>
        </View>
    )
}

const Hello = ({name}) => {
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
        }


    }
)