import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as Tab from '../screens/Tabs';
import React from 'react'
import TabIcon from '../components/view/icon/TabIcon';
import colors from '../colors/colors';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;
  
    switch (routeName) {
        default:
          return {
                tabBarIcon: ({ focused }) => {
                    return <TabIcon type={routeName} focused={focused}/>;
                },
                tabBarOptions: {
                    activeTintColor: colors.mainBlue,
                    inactiveTinitColor: colors.blueyGrey,
                    labelStyle: {
                        fontSize: 10,
                    },
                },
                style: {
                    backgroundColor:'white',
                }
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
    initialRouteName: TabsConfig.Upload,
    lazy: false,
});

export default createAppContainer(TabNavigator);