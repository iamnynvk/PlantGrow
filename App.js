import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PlantsDetail } from './screens';
import Tabs from './navigation/tabs';


const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name="Tabs" children={Tabs} options={{headerShown:false}}/>

                <Stack.Screen name="PlantsDetail" children={PlantsDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default () => {
    return <App />;
}
