import React from 'react';
import { Pressable, View , Text} from "react-native";
import DashboardStyle from "../styles/DashboardStyle";


export default function CategoryGridTile({title,color,onPress, id}){

    const handleOnPress = ()=>{
        onPress(id)
    }
    return (
        <View style={[DashboardStyle.item,{backgroundColor:color}]}>
            <Pressable style={({pressed})=>
            [DashboardStyle.buttonStyle,pressed? DashboardStyle.buttonPressed:null]}
            onPress={handleOnPress}>
                <View style = {DashboardStyle.innerContainer}>
                    <Text style={DashboardStyle.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}