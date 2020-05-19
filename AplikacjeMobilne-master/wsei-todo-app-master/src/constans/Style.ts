import { StyleSheet } from 'react-native';
import  Layout  from './Layout';
import {Dimensions} from 'react-native'

export const Style = StyleSheet.create({

    background: {
        backgroundColor: '#033742',
    },

    fontColor1: {
        color: '#b20051',
        marginLeft:5,
        marginTop:6,
        
    },
    fontColor2: {
        color: '#b20051',
        marginLeft:5,
        textAlign:"center",
        
    },
    title:{
        color: '#b20051',
        fontSize:20,
    },

    container: {
        flex:1,
        marginTop: Layout.statusBar,
        width:Dimensions.get('screen').width,
    },
    container2:{
        flex:1,
        width:Dimensions.get('screen').width,
        justifyContent:"center",
        alignItems:"center",
    },

    
    Image1: {
      height: 150,
      width:'50%',
      position:'absolute',
      transform: [{ translateX: 150 }],
      marginTop:6,

    },

    Image2: {
    
        width:'80%',
        height: 200 ,
        marginTop:15,
        marginBottom:10,
    },
    Image3:{
        marginTop:15,
        marginBottom:5,
        height:300,
        width:"95%",
        alignSelf:"center",


    }
   

  });