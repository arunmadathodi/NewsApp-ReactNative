import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const cardWidth = 9/10*Dimensions.get('window').width;


export default style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    newsDetails:{
    
        width: cardWidth,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin:20,
        justifyContent:'center'
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    },
    image:{
        width:'100%',
        height:350,
        justifyContent:'center'

    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        margin:8,
        textAlign:'center',
        color:'black'
    },
    detailText:{
        color:'black',
        fontSize:15,
        paddingBottom:10,
        margin:10

    },
    


})