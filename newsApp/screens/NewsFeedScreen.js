import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useLayoutEffect, useState } from "react"
import { View,Text,Image,FlatList} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import News from "../component/News";
import CustomDrawer from "./CustomDrawer";


const Drawer = createDrawerNavigator();

export default function NewsFeedScreen({route,navigation }){


    const [newsDetails,setNewsDetails] = useState('')


    function renderNews({item}){

        console.log("Itemdata", item)

        return(
            <News item={item}/>
        )

        
    }

    let content;
    useLayoutEffect(()=>{


         fetch(`https://newsapi.org/v2/top-headlines?category=${route.params.category.toLowerCase()}&apiKey=${'36b5c100edb144d5b83b39234dcf5a09'}`)
        .then(response =>
            response.json().then(response =>{
                content = response.articles.map((item)=>item)
                console.log("Content",content)
                setNewsDetails(content)
                
              
            }).catch(error =>{
                console.log(error);
            }))

    },[])


    return(

        

        <View>
            <View style={{flexGrow:1,backgroundColor:'#b0c4de'}} >
            <FlatList  data={newsDetails} keyExtractor={(item)=>item.id} renderItem={renderNews} numColumns={1}></FlatList>
           
        </View>
        
        </View>

        
        
        
    )


    
}