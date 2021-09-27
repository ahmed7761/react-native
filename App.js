//import React, {Component} from 'react';
//import {View, Text} from 'react-native';
//
//class App extends Component {
//    render() {
//        return (
//            <View>
//                <Text>Hello World</Text>
//            </View>
//        );
//    }
//}
//
//export default App;

import React from "react"
import { List, Heading, Box, Center, NativeBaseProvider } from "native-base"
import { Button } from 'react-native-elements';

export default App = () => {
  return (
    <>
      <NativeBaseProvider>
            <Center flex={1} px="3">
             <Box w="80%">
                   <Heading fontSize={24}>Topics (Plain List)</Heading>
                   <List space={2} my={2}>
                     <List.Item>Education</List.Item>
                     <List.Item>Health</List.Item>
                     <List.Item>Office</List.Item>
                     <List.Item>Sports</List.Item>
                   </List>
                 </Box>
                 <Button
                   title="Solid Button"
                 />
            </Center>
          </NativeBaseProvider>
    </>
  )
}

