import React from 'react'
import {FlatList} from 'react-native'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const FlatListPost = props =>(
    <FlatList renderItem={renderItem} data={props.results} handleFilter={props.handleFilter} />
)



export default FlatListPost
