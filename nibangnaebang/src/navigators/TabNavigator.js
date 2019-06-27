import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as Tab from '../screens/Tabs';
import React from 'react'
import i18n from 'i18n-js';
import colors from '../colors/colors';
import TabIcon from '../components/feedback/icon/TabIcon';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;
  
    switch (routeName) {
        default:
          return {
                // tabBarIcon: ({ focused }) => {
                //     return <TabIcon type={routeName} focused={focused}/>;
                // },
                // tabBarOptions: {
                //     activeTintColor: 'white',
                //     inactiveTintColor: 'rgba(255, 255, 255, 0.35)',
                //     labelStyle: {
                //         fontSize: 10,
                //     },
                //     style: {
                //         backgroundColor: colors.softBlue,
                //     },
                // },
                // tabBarOnPress: ({ navigation, defaultHandler }) => {
                //     if(routeName === TabsConfig.Home) {
                //         navigation.popToTop()
                //     }
                //     defaultHandler();
                // }
          };
    }
};

let Tabs = {
    Home: { screen: Tab.HomeTab, navigationOptions:defaultNavOptions },
}

export const TabsConfig = Object.keys(Tabs).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const TabNavigator = createBottomTabNavigator(Tabs, {
    initialRouteName: TabsConfig.Home,
    lazy: false,
});

export default createAppContainer(TabNavigator);