import React, { FC } from 'react';
import {  View, Image, Text , StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import Colors from '../../components/Colors';

const WelcomeText = styled.Text`
    margin: 10px 10px;
    font-size: 16px;
    font-weight:bold;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 50px;
    height: 50px; 
    marginTop:10px;
    borderRadius:50px;
`;


interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'lightgrey', alignItems:'center' , flex:1}}>
            <WelcomeText>Welcome to HomeScreen </WelcomeText>
            <CustomImage
                source={require('../../assets/splash2.png')}
            />
            </View>
            <View style={{flex:1.5}}>
             <Text style={{fontSize:25 , margin:20 , textAlign:'center' , fontWeight:'bold'}}>Short Text in home screen</Text>
             <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit iste nihil saepe dignissimos unde quisquam fugiat tenetur autem sunt odio, quia maiores dicta ex reprehenderit illo? Temporibus, laborum provident?</Text>
            </View>
            <Image style={{flex:2 , height:undefined, width: undefined}} 
            source={require('../../assets/images.png')} 
            resizeMode="contain"
            /> 
        </View>
        
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:3,
        paddingTop: Constants.statusBarHeight,
    },
    paragraph: {
        margin: 15,
        fontSize: 18,
        textAlign: 'left',
      },
      
});

export default Home;