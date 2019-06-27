import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import { AsyncStorage } from 'react-native';
import TabNavigator from "../navigators/TabNavigator";
import AuthNavigator from "./Auth/index";

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
        }
        
        console.disableYellowBox = true;
    }

    componentDidMount = async () => {
        const { login } = this.props;
        const id = await AsyncStorage.getItem('id');
        const pw = await AsyncStorage.getItem('pw');
        if(id && pw)
            await login(id, pw);
    }

    render() {
        // A. navigate to tab if logged in
        const { spinning, user } = this.props;
        
        // if(true || user.UserNo) {
        if(user.UserNo) {
            return(
                <NavigatorContainer>
                    <TabNavigator/>
                </NavigatorContainer>
            )
        }

        // B. display login page if user needs login
        if(true) {   //TODO to login
            return(
                <NavigatorContainer>
                    <AuthNavigator/>
                </NavigatorContainer>
            )
        }

        return (
            <Container>
                <Copyright>
                    A3D2
                </Copyright>
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

const Copyright = styled.Text`
    position:absolute;
    align-self: center;
    text-align: center;
    bottom: 40;
`;

export default Splash;