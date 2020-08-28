import React from 'react'
import {View, Text} from 'react-native';

import {fetchResults} from './api'
import FlatListPost from "./FlatList";


export default class Post extends React.Component{

  constructor() {
    super();

    this.state={
      results: [],
      filtered : [],
      isFiltered: false,
    }
  }

  componentDidMount() {

    //Calls get posts function which will retrieve the post data
    let handle = this.getPosts();

  }

  getPosts= async() =>{
    const results = await fetchResults()

    this.setState({results: results});
  }

  //Action called when user wants to filter posts by author
  handleFilter = props =>{

    //create a new array containing only posts with a specific author
   let temp = this.state.results.map( item => item.author.name !== props)
   this.setState({filtered: temp })

  }

  resetFilter(){
    this.setState({isFiltered: false})
  }


  render(){
    if( this.state.isFiltered === false){
      return(
        <View>
          <FlatListPost results={this.state.results} handleFilter={this.handleFilter} setFiltered={this.resetFilter}/>
        </View>
      )
    }else{
      return(
      <View>
        <FlatListPost filteredResults={this.state.filtered} handleFilter={this.handleFilter} setFiltered={this.resetFilter}/>
      </View>
      )
    }
  }
}
