import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';

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

     change = () => {
        this.setState({
            name: "Ahmed",
            age: "10",
            city: "CTG",
        })
    }

    render() {
        return (
            <View>
                <Text>{ this.state.name }</Text>
                <Text>{ this.state.age }</Text>
                <Text>{ this.state.city }</Text>
                <Button title="Change Value" onPress={this.change} />
            </View>
        );
    }
}

export default ClassState;