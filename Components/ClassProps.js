import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';

class ClassProps extends Component {

    render() {
        return (
            <View>
                <Text style={{ color:'red', fontSize: 24 }}>Class Props</Text>
                <Text>{ this.props.name }</Text>
                <Text>{ this.props.age }</Text>
                <Text>{ this.props.city }</Text>
            </View>
        );
    }
}

export default ClassProps;