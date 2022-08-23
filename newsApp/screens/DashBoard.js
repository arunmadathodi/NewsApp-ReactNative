import React from 'react';
import { Platform, StyleSheet, FlatList, Text, View, Alert, Button } from "react-native";
import DashboardStyle from '../styles/DashboardStyle';
import { Categories } from '../data/dummyData';
import CategoryGridTile from '../component/CategoryGridtile';
import { useDispatch, useSelector } from 'react-redux';
import {addFavourite,removeFavourite} from '../redux/favourites'
import { useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { add } from 'react-native-reanimated';


 function DashBoard({route,navigation}){

    const favouriteNewsIds = useSelector((state)=>state.favoriteNews.item);
    console.log("favouriteNewsIds",favouriteNewsIds)
    const dispatch = useDispatch();

   function GetGridViewItem(itemData){
     return <CategoryGridTile 
     title ={itemData.item.title}
     color = {itemData.item.color}
     id = {itemData.item.id}
     onPress={onPressHandler}/>
   }

   function onButtonPress(){
    const selectedCategories = favouriteNewsIds.filter((item)=>item.flag===true)
    console.log('cat', selectedCategories)

    if(selectedCategories.length>0){

    navigation.navigate('NewsFeed',{selectedCategories});
    }else{
        Alert.alert('Please select minimum one Favourite Category')
    }

   }
   const onPressHandler = (id) =>{

    console.log('id', id)
    
    // dispatch(addFavourite(true))
    // console.log('favouriteNewsIds', favouriteNewsIds)
    const newsId = favouriteNewsIds.filter((item)=>item.id === id)
    console.log('newsId', newsId)
      if( newsId[0].flag === true){
    
          dispatch(removeFavourite(id))
        
       
      }else{
    
          dispatch (addFavourite(id))
        
        
      }

   }

   useEffect(() => {
    console.log('favouriteNewsIds', favouriteNewsIds)
      
    }, [favouriteNewsIds]);
  
    return(
      
        <View style={DashboardStyle.container}>
            
             <View style={{flex:1}}>
            <FlatList  data = {favouriteNewsIds}
            keyExtractor ={(item)=>item.id}
            renderItem = {GetGridViewItem}
            numColumns ={2}
            
         
          
     
        />
        <View style={DashboardStyle.button}>
           <Button color={'white'}  title='SAVE' onPress={onButtonPress}/>
        </View>
        
       
        </View>
       
        </View>
        
    );
}

export default DashBoard;

