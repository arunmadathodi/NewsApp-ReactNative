
import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
    item: {
        flex: 1,
        
        margin: 16,
        height:150,
        borderRadius:8,
        elevation:4,
        justifyContent:'center',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform==='android'?'hidden':'visible',
        alignItems:'center',
        

      },
      innerContainer: {
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'

      },
      buttonStyle:{
        flex:1,
        

      },
      title:{
        fontWeight:'bold',
        fontSize:14
      },
      buttonPressed:{
        opacity:0.3,
        flex:1
      },
      container:{
        flex:1,
        paddingTop:'20%'
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#368dff',
        
      }
    });

