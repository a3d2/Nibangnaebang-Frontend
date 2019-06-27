import React from 'react'
import { DeviceEventEmitter } from 'react-native'
import { createStackNavigator } from "react-navigation";
import { StackNavOptions } from '../../../constants/styles';
import PriceCalculator from './Upload/PriceCalculator';
import UploadStepPeriod from './Upload/UploadStepPeriod';
import UploadStepDesc from './Upload/UploadStepDesc';
import BackButton from "../../../components/feedback/button/BackButton";
import colors from '../../../colors/colors';
import styled from 'styled-components/native';

const RightButton = styled.TouchableOpacity`
    padding-left:60;
    padding-right:16;
    align-items:center;
`;
const ButtonText = styled.Text`
    font-size:17;
    font-weight:500;
    line-height:21;
    color:${colors.mainBlue};
`;

const defaultNavOptions = ({ navigation }) => {
    const { routeName } = navigation.state;

    let options = {
        headerBackImage:<BackButton/>,
        headerBackTitle:null,
        title: '방올리기',
        headerTitleStyle: {
            fontWeight: '500',
            fontSize:17,
            color:colors.darkGrey
        },
    };

    switch (routeName) {
        case UploadStacks.UploadStepDesc:
            options.headerRight = (
                <RightButton onPress={() => {
                    DeviceEventEmitter.emit('Upload');
                }}>
                    <ButtonText>
                        게시
                    </ButtonText>
                </RightButton>
            )
            break;
    }
    return options
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