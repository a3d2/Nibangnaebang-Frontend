import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
}))
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { 
        } = this.state;

        return (
            <Container>
                <Text>
                    home
                </Text>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default Home;