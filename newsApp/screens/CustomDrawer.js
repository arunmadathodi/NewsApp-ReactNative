import React from "react";
import { View,Text,Image } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetReducer } from "../redux/favourites";

export default function CustomDrawer(props){

    const dispatch = useDispatch();

    const [profile, setProfile] = useState('')

    const imageAsset = require('../assets/profile.png')

    useEffect(()=>{
        getData();
    })

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
           jsonValue != null ? setProfile(JSON.parse(jsonValue).name)  : setProfile('');
        } catch(e) {
          // error reading value
        }
      }


      function onLogoutPress(){
         AsyncStorage.clear();
         dispatch(resetReducer())
        props.navigation.navigate('Login')
      }


    return(

      

        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'purple'}}>
                <Image source={imageAsset} style={styles.profileImage}/>
                <Text style={styles.accountName}>{profile}</Text>
                <View style={styles.itemList}>
                    <DrawerItemList {...props }/>
                </View>
              

        

            </DrawerContentScrollView>
            <View style={styles.borderLine}>
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15,}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text onPress={onLogoutPress} style={{fontSize:15}}>{ "Logout"} </Text>
                    </View>
                
                </TouchableOpacity>
               
            </View>
        </View>
       
    )
} 

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    profileImage:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10,
        margin:25
    },
    accountName:{
        color:"#fff",
        fontSize:18,
        marginLeft:30
    },
    itemList:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:10
    },
    borderLine:{
        padding:20,borderTopWidth:1,borderTopColor:"#ccc"
    }
    

})

