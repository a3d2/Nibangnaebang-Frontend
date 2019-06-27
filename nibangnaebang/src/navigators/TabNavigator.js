import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as Tab from '../screens/Tabs';
import React from 'react'

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
    Upload: { screen: Tab.UploadTab, navigationOptions:defaultNavOptions },
    Message: { screen: Tab.MessageTab, navigationOptions:defaultNavOptions },
    MyPage: { screen: Tab.MyPageTab, navigationOptions:defaultNavOptions },
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