import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
}))
class Message extends React.Component {
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
                    Message
                </Text>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default Message;