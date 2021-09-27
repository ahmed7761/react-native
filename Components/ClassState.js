import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ClassState extends Component {

    constructor(){
        super();
        this.state = {
                     name: 'Sharif',
                     age: '23',
                     city: 'Dhaka',
        }
    }

//    state = {
//            name: 'Sharif',
//            age: '23',
//            city: 'Dhaka',
//    }

    render() {
        return (
            <View>
                <Text>{ this.state.name }</Text>
                <Text>{ this.state.age }</Text>
                <Text>{ this.state.city }</Text>
            </View>
        );
    }
}

export default ClassState;