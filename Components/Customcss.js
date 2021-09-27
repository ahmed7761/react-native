import React from "react"
import {View, Text, StyleSheet} from "react-native"
import customStyle from './assets/customStyle';


export default Customcss = () => {

  const myStyle = StyleSheet.create({
    red: {
        color: 'red'
    },
    green: {
            color: 'green'
    }
  });

  return (
    <View>
      <Text style={{ color:'red', fontSize: 24 }}>Inline Css</Text>
      <Text style={ myStyle.green }>Styled Component</Text>
      <Text style={ customStyle.yellow }>External Styled Components</Text>
    </View>
  )
}
