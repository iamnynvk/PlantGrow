import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Box, Camera, Search, Favourite } from '../screens';
import { COLORS, icons } from '../constant/'


const Tab = createBottomTabNavigator(); 

const CameraButton = () => {
    return(
        <View>
            <Image source={{uri:"https://img.icons8.com/ios/50/000000/camera--v1.png"}}/>
        </View>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon:({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch(route.name){
                        case "Home":
                            return(
                                <Image source={{uri:"https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/OOOOOO/external-flash-interface-kiranshastry-gradient-kiranshastry.png"}}
                                    resizeMethod="auto"
                                    style={{
                                        tintColor: tintColor,
                                        width:30,
                                        height:30,
                                    }}
                                />
                            )
                        case "Box":
                            return(
                                <Image source={{uri:"https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-box-logistic-delivery-kiranshastry-gradient-kiranshastry.png"}}
                                    resizeMethod="auto"
                                    style={{
                                        tintColor: tintColor,
                                        width:30,
                                        height:30,
                                    }}
                                />
                            )
                        case "Camera":
                            return(
                                <View style={{
                                    alignItems:'center',
                                    alignContent:'center',
                                    width:50,
                                    height:50,
                                    borderRadius:25,
                                    backgroundColor:COLORS.primary
                                }}>
                                    <Image source={{uri:"https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/50/000000/external-camera-hunting-kiranshastry-lineal-kiranshastry.png"}}
                                    resizeMethod="auto"
                                    style={{
                                        tintColor:'white',
                                        marginTop:10,
                                        width:30,
                                        height:30,
                                    }} />
                                </View>
                            )
                        case "Search":
                            return(
                                <Image source={{uri:"https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-search-interface-kiranshastry-gradient-kiranshastry.png"}}
                                    resizeMethod="auto"
                                    style={{
                                        tintColor: tintColor,
                                        width:30,
                                        height:30,
                                    }}
                                />
                            )
                        case "Favourite":
                            return(
                                <Image source={{uri:"https://img.icons8.com/color/48/000000/like--v3.png"}}
                                    resizeMethod="auto"
                                    style={{
                                        tintColor: tintColor,
                                        width:30,
                                        height:30,
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{tabBarShowLabel:false, tabBarStyle:{height:"9%"}}}/>
            <Tab.Screen name="Box" component={Box} options={{tabBarShowLabel:false, tabBarStyle:{height:"9%"}}}/>
            <Tab.Screen name="Camera" component={Camera} options={{tabBarShowLabel:false, tabBarStyle:{height:"9%"}}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarShowLabel:false, tabBarStyle:{height:"9%"}}}/>
            <Tab.Screen name="Favourite" component={Favourite} options={{tabBarShowLabel:false, tabBarStyle:{height:"9%"}}}/>
        </Tab.Navigator>
    )
}

export default Tabs

// 