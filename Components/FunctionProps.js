import React, {useState} from "react"
import {View, Text } from "react-native"
import { Button } from 'react-native-elements';


export default FunctionProps = (props) => {
  const {name, age, city} = props
  return (
    <View>
      <Text style={{ color:'red', fontSize: 24 }}>Functional Props</Text>
      <Text>{ name }</Text>
      <Text>{ age }</Text>
      <Text>{ city }</Text>
    </View>
  )
}
