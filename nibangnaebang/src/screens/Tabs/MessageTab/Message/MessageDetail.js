import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import colors from '../../../../colors/colors';
import assets from '../../../../assets/general';

@inject(stores => ({
}))

@inject((stores, ownProps) => {
    return {
        navTo:stores.nav.navTo,
        rooms:stores.message.rooms,
        user:stores.auth.user,
        loadMessageDetail:stores.message.loadMessageDetail,
    }
})
class MessageDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages:[]
        }
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        const { loadMessageDetail } = this.props;
        loadMessageDetail(params.roomNo).then(messages => {
            this.setState({ messages:messages })
        })
    }

    render() {
        const { messages } = this.state;
        const { user } = this.props;

        const messagesView = messages.map(each => {
            const isMine = each.sendUser === user.UserNo

            return (
                <MessageContainer 
                    isMine={isMine}
                    key={each.no}
                >
                    <LeftContainer>
                        {!isMine &&
                            <ProfileImage
                                source={each.sendUserGender === "male" ? assets.iconFaceM : assets.iconFaceW}
                            />
                        }
                    </LeftContainer>
                    <RightContainer>
                        {!isMine &&
                            <Name>
                                {each.sendUserId}
                            </Name>
                        }
                        <DialogContainer
                            isMine={isMine}
                        >
                            <DialogText>
                                {each.msg}
                            </DialogText>
                        </DialogContainer>
                    </RightContainer>
                </MessageContainer>
            )
        })

        return (
            <Container>
                {messagesView}
            </Container>
        );
    }
}

const Container = styled.ScrollView`
    padding-top:16;
    padding-horizontal:20;
`;

const MessageContainer = styled.View`
    align-self:${props => props.isMine ? 'flex-end' : 'flex-start'};
    margin-bottom:12;
    flex-direction:row;
`;
const ProfileImage = styled.Image`
    width:28;
    height:28;
`;
const Name = styled.Text`
    font-size:13;
    line-height:18;
    letter-spacing:-0.3;
    font-weight:bold;
    color:${colors.darkGrey};
`;
const LeftContainer = styled.View`
`;
const RightContainer = styled.View`
    margin-left:8;
`;
const DialogContainer = styled.View`
    align-self:${props => props.isMine ? 'flex-end' : 'flex-start'};
    border-radius:16;
    background-color:rgb(242, 242, 242);
    padding-vertical:12;
    padding-horizontal:16;
`;
const DialogText = styled.Text`
    font-size:14;
    line-height:20;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;

export default MessageDetail;