import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons, COLORS, SIZES } from '../../utils';
import { Home, PlantDetail } from '../../screens';

const { height } = SIZES;
const Tab = createBottomTabNavigator();

const tabOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        height: height * 0.1,
    },
};

const CameraBtn = ({ tintColor }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                width: 50,
                height: 50,
                backgroundColor: COLORS.primary,
            }}>
            <Image
                source={icons.camera}
                resizeMode="contain"
                style={{ tintColor: tintColor, width: 23, height: 23 }}></Image>
        </View>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            //   tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                ...tabOptions,
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{ tintColor: tintColor, width: 25, height: 25 }}></Image>
                            );
                        case 'Box':
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{ tintColor, width: 25, height: 25 }}></Image>
                            );
                        case 'Camera':
                            return <CameraBtn tintColor></CameraBtn>;
                        case 'Favorite':
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{ tintColor, width: 25, height: 25 }}></Image>
                            );
                        case 'Search':
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{ tintColor, width: 25, height: 25 }}></Image>
                            );
                    }
                },
            })}>
            <Tab.Screen name="Home" component={PlantDetail}></Tab.Screen>
            <Tab.Screen name="Box" component={Home}></Tab.Screen>
            <Tab.Screen name="Camera" component={Home}></Tab.Screen>
            <Tab.Screen name="Search" component={Home}></Tab.Screen>
            <Tab.Screen name="Favorite" component={Home}></Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabs;
