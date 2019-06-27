import React from 'react';
import styled from 'styled-components/native';
import { inject } from 'mobx-react';

@inject(stores => ({
}))
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        return (
            <Container>
                <Text>
                    login
                </Text>
            </Container>
        );
    }
}

const Container = styled.View`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Text = styled.Text`
`;

export default Login;