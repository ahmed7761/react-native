import React, {Component} from 'react';
import {View, Text, FlatList, Alert, Image } from 'react-native';

class CountryList extends Component {
    myData=[
        {title: 'Bangladesh', subtitle: 'My Country'},
        {title: 'India', subtitle: 'My Country'},
        {title: 'Canada', subtitle: 'My Country'},
        {title: 'Spain', subtitle: 'My Country'},
        {title: 'China', subtitle: 'My Country'},
        {title: 'Italy', subtitle: 'My Country'},
        {title: 'Africa', subtitle: 'My Country'},
        {title: 'Pakistan', subtitle: 'My Country'},
        {title: 'England', subtitle: 'My Country'},
        {title: 'France', subtitle: 'My Country'},
      ];


   onClickItem = (alertTitle) => {
        Alert.alert(alertTitle)
   }

   ChildView = ({childTitle, childSubtitle}) => {
        return(
            <View style={{ flexDirection: 'row', backgroundColor: 'white', margin:5, flex: 100 }}>
                <View style={{ flex: 30 }}>
                    <Image source={{uri: 'https://picsum.photos/200'}} style={{width: '100%', height: 70}}  />
                </View>
                <View style={{ flex: 70, padding: 10, margin: 5 }} >
                    <Text style={{ color: 'black', fontSize: 20 }} onPress={this.onClickItem.bind(this, childTitle)}>{childTitle}</Text>
                    <Text style={{ color: 'black', fontSize: 12 }}>{childSubtitle}</Text>
                </View>
            </View>
        )
  }

    render() {
        return (
            <FlatList data={this.myData} renderItem={({item})=> <this.ChildView childTitle={item.title} childSubtitle={item.subtitle} /> }></FlatList>
        );
    }
}

export default CountryList;