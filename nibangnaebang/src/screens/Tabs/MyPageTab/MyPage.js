import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import NormalButton from '../../../components/feedback/button/NormalButton';


@inject(stores => ({
    user:stores.auth.user,
    logout:stores.auth.logout,
    navTo:stores.nav.navTo,
}))
class MyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderSection = (label, preview, route) => {
        const { navTo } = this.props;
        return (
            <SectionItemContainer
                onPress={() => {
                    navTo(route);
                }}
            >
                <SectionItemLeftContainer>
                    <SectionItemContainerLabel>
                        {label}
                    </SectionItemContainerLabel>
                </SectionItemLeftContainer>
                <SectionItemRightContainer>
                    <SectionItemPreviewLabel>
                        {preview} >
                    </SectionItemPreviewLabel>
                </SectionItemRightContainer>
            </SectionItemContainer>
        )
    }

    render() {
        const { user, logout } = this.props;

        return (
            <Container>
                <ProfileContainer>
                    <ProfileImageContainer>
                        <ProfileImage
                            source={{ uri:user.image }}
                        />
                    </ProfileImageContainer>
                    <ProfileInfoContainer>
                        <ProfileNameText>
                            {user.name}
                        </ProfileNameText>
                        <ProfileDescContainer>
                            <ProfileIDText>
                                {`${user.id} / ${user.school}`}
                            </ProfileIDText>
                            {/* <ProfileSchoolText>
                                {user.school}
                            </ProfileSchoolText> */}
                        </ProfileDescContainer>
                    </ProfileInfoContainer>
                </ProfileContainer>
                <RoomsContainer>
                    {this.renderSection('내 방', 'x개', 'MyRoom')}
                    {this.renderSection('니 방', 'y개', 'PickedRoom')}
                </RoomsContainer>
                {/* <ConfigContainer> */}
                    {/* {this.renderSection('키워드 등록', '')} */}
                    {/* {this.renderSection('학생 인증', '')} */}
                {/* </ConfigContainer> */}

                <NormalButton
                    onPress={logout}
                    label={'로그아웃'}
                />
            </Container>
        );
    }
}

const Container = styled.ScrollView`
    padding-horizontal:20;
    padding-top:23;
`;
const ProfileContainer = styled.View`
    flex-direction:row;
`;
const ProfileImageContainer = styled.View`
`;
const ProfileImage = styled.Image`
    width:60;
    height:60;
    borderRadius:40;
`;
const ProfileInfoContainer = styled.View`
`;
const ProfileNameText = styled.Text`
    padding-left:16;
    padding-top:2;
`;
const ProfileDescContainer = styled.View`
    flex-direction:row;
`;
const ProfileIDText = styled.Text`
    padding-left:16;
`;
const ProfileSchoolText = styled.Text`
`;

const RoomsContainer = styled.View`
`;
const SectionItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    border-bottom-width:1px;
    border-bottom-color:black;
    padding:20px;
    margin-bottom:10px;
`;
const SectionItemLeftContainer = styled.View`
    flex:1;
`;
const SectionItemContainerLabel = styled.Text`
`;
const SectionItemRightContainer = styled.View`
    align-items:flex-end;
    flex:1;
`;
const SectionItemPreviewLabel = styled.Text`
`;

const Tab = styled.Text`
    alignItems:center;
    justifyContent:center;
`;

const ConfigContainer = styled.View`
`;

const LogoutContainer = styled.TouchableOpacity`
`;
const LogoutText = styled.Text`
`;

export default MyPage;