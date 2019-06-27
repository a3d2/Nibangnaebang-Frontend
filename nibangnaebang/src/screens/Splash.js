import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';
import TabNavigator from "../navigators/TabNavigator";

@inject(stores => ({
    spinning:stores.spinner.spinning
}))
class Splash extends React.Component {
    backCounter = 0;

    constructor(props) {
        super(props);

        this.state = {
        }
        
        console.disableYellowBox = true;
    }

    componentDidMount = () => {
    }

    render() {
        // A. navigate to tab if logged in
        const { spinning } = this.props;
        console.log("TCL: Splash -> render -> spinning", spinning)
        
        if(true) {   //TODO to login
            return(
                <NavigatorContainer>
                    <TabNavigator/>
                </NavigatorContainer>
            )
        }
        // B. display login page if user needs login

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