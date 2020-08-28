import React from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import * as RootNavigation from './RootNavigation'

//Component class that will display the retrieved posts as a FlatList object
export default class Row extends React.Component {
  render() {
    return (
      <View>
        <Button
          //Button that will reset the search results to stop filtering an author
          onPress={()=> this.props.setFiltered}
        >
          Reset
        </Button>
        <TouchableOpacity
          //Navigate to New Screen that shows details of this post when user clicks on it
          onPress={() => RootNavigation.navigate('Details', {post: this.props})}
        >
          <Text>{this.props.title}</Text>
          <Text>{this.props.publishedAt}</Text>

        </TouchableOpacity>
        <TouchableOpacity
          //Will send the authors name to the Post Component which wil lre-render the FlatList with only Posts with the authors name
          onPress={()=> this.props.handleFilter(this.props.author.name)}
        >
          <Text>{this.props.author.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

