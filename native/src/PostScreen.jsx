import React from 'react'
import {View, Text} from 'react-native'

export default function PostScreen(post){

  return(
    <View>
      <Text style={{fontSize: 16}}> {post.title}</Text>
      <Text> {post.author.name}</Text>
      <Text> {post.publishedAt}</Text>
      <Text> {post.body}</Text>
    </View>
  )
}
