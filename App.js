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
import { View, Text, ScrollView, Image, FlatList } from "react-native"
import { List, Heading, Box, Center, NativeBaseProvider } from "native-base"
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Customcss from './Components/Customcss'
import ClassState from './Components/ClassState'
import FunctionState from './Components/FunctionState'
import FunctionProps from './Components/FunctionProps'
import ClassProps from './Components/ClassProps'
import CountryList from './Components/CountryList'

export default App = () => {

  return (
    <ScrollView>
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
                   icon={
                     <Icon
                       name="arrow-right"
                       size={15}
                       color="white"
                     />
                   }
                   iconRight
                   title="Button with right icon"
                 />
                 <Customcss />
                 <ClassState />
                 <Text>--------------------------</Text>
                 <FunctionState />
                 <Text>--------------------------</Text>
                 <FunctionProps name="ABCD" age="05" city="London" />
                 <Text>--------------------------</Text>
                 <ClassProps name="ABCD" age="05" city="London" />
                 <Text>--------------------------</Text>
                 <Image source={{uri: 'https://picsum.photos/200'}} style={{width: 400, height: 200}}  />
                 <Text>--------------------------</Text>
                 <Image source={require('./Components/assets/images/native.jpg')} style={{width:'100%'}} />
                 <Text>------------- Flat List -------------</Text>
            </Center>
            <CountryList />
          </NativeBaseProvider>
    </ScrollView >
  )
}

