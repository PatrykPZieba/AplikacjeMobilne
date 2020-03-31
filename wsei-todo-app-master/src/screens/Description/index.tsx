import React, { FC } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const Description = ({navigation}) => {
    return (
        <View>
            <WelcomeText>To jest Description View</WelcomeText>
            <Button title="Home screen" onPress={() => {
                navigation.navigate('Home');
            }}
            />
        </View>
    );
};

export default Description;