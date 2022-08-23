import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Provider} from 'react-redux'
import LoginScreen from '../screens/LoginScreen'
import DashBoard from '../screens/DashBoard'
import NewsFeedScreen from '../screens/NewsFeedScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { store } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux';
import CustomDrawer from '../screens/CustomDrawer'



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomBar = createBottomTabNavigator();




export default function RootNavigator(){

    return(
        <Provider store={store}>
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{headerShown:true}}>
           
            <Stack.Screen name='Login' component={LoginScreen } options={{headerShown: false}}/>
            <Stack.Screen name='DashBoard' component={DashBoard} options={{headerShown: false}} />
            <Stack.Screen name='NewsFeed' component={DrawerNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
           

        </NavigationContainer>
        </Provider>
    )

    function DrawerNavigation(){

        return(
                <Drawer.Navigator   drawerContent={props=><CustomDrawer{...props}/>} screenOptions={{headerShown: true}}>
                     
                    
                    <Drawer.Screen name='News' component={TabNavigation}/>
                    <Drawer.Screen name='Preference' component={DashBoard}  options={{headerShown:true}}/>
                   
                
                </Drawer.Navigator>
        
        )
    
    }

    function TabNavigation(){


        const categoryArray = useSelector((state)=>state.favoriteNews.item);
        const selectedArray = categoryArray.filter((item)=>item.flag===true)
        const tabs = selectedArray.map((item)=> <BottomBar.Screen  key={item.id} name={item.title} component={NewsFeedScreen}
        initialParams={{category:item.title}}/>)

        if(selectedArray.length===0)
            return null;

        return(
                <BottomBar.Navigator screenOptions={{headerShown: false}}>
                    
                   {tabs}
                </BottomBar.Navigator>
        
        )
    
    }

    
}





