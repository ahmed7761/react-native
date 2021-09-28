import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

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

   ChildView = ({childTitle, childSubtitle}) => {
        return(
            <View style={{ backgroundColor: 'grey', padding: 10, margin: 5 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{childTitle}</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>{childSubtitle}</Text>
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