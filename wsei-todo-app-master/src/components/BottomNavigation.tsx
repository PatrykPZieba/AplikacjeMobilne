import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoList from '../screens/TodoList';
import Description from '../screens/Description';
import Welcome from '../screens/Welcome';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoList"
                component={TodoList}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
            name="Description"
            component={Description}
            options={{
                tabBarLabel:'Description',
                tabBarIcon: ({color,size})=>(
                    <MaterialCommunityIcons name="book-open-variant" color={color} size={size}/>
                )
            }}
            />
            <Tab.Screen
            name="Welcome"
            component={Welcome}
            options={{
                tabBarLabel:'Welcome',
                tabBarIcon: ({color,size})=>(
                    <MaterialCommunityIcons name="human-greeting" color={color} size={size}/>
                )
            }}
            />
            
            
        </Tab.Navigator>
    );
};

export default BottomTabs;