import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
}))
class MessageDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item:props.navigation.state.params
        }
    }
    componentDidMount() {
    }

    render() {
        const { 
        } = this.state;

        return (
            <Container>
                <Text>
                    message
                </Text>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default MessageDetail;