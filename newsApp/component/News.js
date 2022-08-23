import React, { useLayoutEffect } from "react"
import {View,Text, Alert,Image} from 'react-native'
import NewsFeedStyle from "../styles/NewsFeedStyle"
import { useEffect } from "react"
import {config} from '../config/config';
import { useDispatch, useSelector } from 'react-redux';


export default function News({item}){
    const imageAsset = require('../assets/journalism.png')


    console.log("data",item)


    return(
        <View style={NewsFeedStyle.newsDetails}>
            <Image style={NewsFeedStyle.image} source={{uri:item.urlToImage}} defaultSource={imageAsset}/>
            <Text style = {NewsFeedStyle.title}>{item.title}</Text>
            <Text style={NewsFeedStyle.detailText}>{item.description}</Text>
        </View>
    )
    

}