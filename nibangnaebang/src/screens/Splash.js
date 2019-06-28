import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import { AsyncStorage, DeviceEventEmitter } from 'react-native';
import TabNavigator from "../navigators/TabNavigator";
import AuthNavigator from "./Auth/index";
import logoAssets from '../assets/logo';

@inject(stores => ({
    spinning:stores.spinner.spinning,
    user:stores.auth.user,
    login:stores.auth.login
}))
class Splash extends React.Component {
    backCounter = 0;

    constructor(props) {
        super(props);

        this.state = {
            waiting:false
        }
        
        console.disableYellowBox = true;
    }

    componentDidMount = async () => {
        const { login } = this.props;
        const id = await AsyncStorage.getItem('id');
        const pw = await AsyncStorage.getItem('pw');
        if(id && pw) {
            this.setState({ waiting:true })
            await login(id, pw);
        }

        // DeviceEventEmitter.addListener('registerComplete', this.forceUpdate)
    }

    render() {
        // A. navigate to tab if logged in
        const { spinning, user } = this.props;
        const { waiting } = this.state;
        
        // if(true || user.UserNo) {
        if(user.UserNo) {
            return(
                <NavigatorContainer>
                    <TabNavigator/>
                </NavigatorContainer>
            )
        } 
        if(!user.UserNo && !waiting) {
            return(
                <NavigatorContainer>
                    <AuthNavigator/>
                </NavigatorContainer>
            )
        }

        return (
            <Container>
                <MainIcon source={logoAssets.mainIcon}/>
                <MainCopy source={logoAssets.mainCopy}/>
            </Container>
        );
    }
}

const NavigatorContainer = styled.View`
    flex:1;
`;

const Container = styled.View`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

const MainIcon = styled.Image`
    width:94;
    height:93;
`;

const MainCopy = styled.Image`
    position:absolute;
    bottom:44;
    width:106;
    height:28;
`;

export default Splash;