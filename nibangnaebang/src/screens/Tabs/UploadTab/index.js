import React from 'react'
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import PriceCalculator from './Upload/PriceCalculator';
import UploadStepPeriod from './Upload/UploadStepPeriod';
import UploadStepDesc from './Upload/UploadStepDesc';

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    switch (routeName) {
    }
};

let Stacks = {
    UploadStepPeriod: { screen: UploadStepPeriod, navigationOptions:defaultNavOptions },
    UploadStepDesc: { screen: UploadStepDesc, navigationOptions:defaultNavOptions },
    PriceCalculator: { screen:PriceCalculator, navigationOptions:defaultNavOptions }
}

export const UploadStacks = Object.keys(Stacks).reduce((acc, cur) => {
    acc[cur] = cur;
    return acc;
}, {});

const StackNavigator = createStackNavigator(Stacks, {
    initialRouteName: UploadStacks.UploadStepPeriod,
    defaultNavigationOptions: StackNavOptions,
    headerLayoutPreset: 'center' 
});

export default StackNavigator;