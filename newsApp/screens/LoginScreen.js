
import React, { useEffect } from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager

} from 'react-native-fbsdk';
import LoginStyle from '../styles/LoginStyle';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';


export default function LoginScreen ({navigation}) {

  const favouriteNewsIds = useSelector((state)=>state.favoriteNews.item);
  const selectedCategories = favouriteNewsIds.filter((item)=>item.flag===true)

  const [user,setUser] = useState('')
  const imageAsset = require('../assets/newspaper.png')


  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      Alert.alert(e.toString())
    }
  }

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          console.log("Result",result)
          setUser(result)
          storeData(result)
          
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  
    return (
      <View style={LoginStyle.container}>
        < Image style={LoginStyle.image} source={imageAsset}/>
        <LoginButton 
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              if(selectedCategories.length>0){
                navigation.navigate('NewsFeed')
              }else{
              navigation.navigate('DashBoard')
              }     
  
               
                AccessToken.getCurrentAccessToken().then(data => {
                const accessToken = data.accessToken.toString();
                this.getInfoFromToken(accessToken);
                LoginManager.logOut()
                
              });
            }
          }}
         
        />
       
      </View>
    );
  }

