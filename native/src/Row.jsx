import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import * as RootNavigation from './RootNavigation'

//Component class that will display the retrieved posts as a FlatList object
export default class Row extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          //Navigate to New Screen that shows details of this post when user clicks on it
          onPress={() => RootNavigation.navigate('Details', {post: this.props})}
        >
          <Text>{this.props.title}</Text>
          <Text>{this.props.publishedAt}</Text>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> console.log("todo")}
        >
          <Text>{this.props.author.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

