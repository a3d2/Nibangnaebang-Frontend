import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import MessageList from './MessageList';

@inject(stores => ({
    messagesList:stores.message.messagesList
}))
class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { messagesList } = this.props;

        return (
            <Container>
                <MessageList
                    messagesList={messagesList}
                />
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default Message;