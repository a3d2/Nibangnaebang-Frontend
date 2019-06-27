import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import MessageList from './MessageList';

@inject(stores => ({
    messagesList:stores.message.messagesList,
    loadMessages:stores.message.loadMessages,
    user:stores.auth.user
}))
class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        const { loadMessages, user } = this.props;
        loadMessages(user.UserNo);
    }
    

    render() {
        return (
            <Container>
                <MessageList/>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default Message;