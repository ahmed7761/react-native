import React, {useState} from "react"
import {View, Text } from "react-native"
import { Button } from 'react-native-elements';


export default FunctionState = () => {
    data = {
        name: "Kazi",
        age: "23",
        city: "Khulna",
    }

    const [state, setState] = useState(data)
    const changeValue = () => {
        setState({
            name: "Hasan",
            age: "13",
            city: "Sylhet"
        })
    }

  return (
    <View>
      <Text style={{ color:'red', fontSize: 24 }}>Functional State</Text>
      <Text>{ state.name }</Text>
      <Text>{ state.age }</Text>
      <Text>{ state.city }</Text>
      <Button title="Change Value" onPress={changeValue}></Button>
    </View>
  )
}
