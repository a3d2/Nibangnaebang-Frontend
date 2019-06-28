import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import NormalButton from '../../../components/feedback/button/NormalButton';
import assets from '../../../assets/general';
import colors from '../../../colors/colors';


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
                            source={user.Gender === "male" ? assets.iconFaceM : assets.iconFaceW}
                        />
                    </ProfileImageContainer>
                    <ProfileInfoContainer>
                        <ProfileDescContainer>
                            <ProfileIDText>
                                {user.Id}
                            </ProfileIDText>
                            <ProfileSchoolText>
                                {user.School}
                            </ProfileSchoolText>
                        </ProfileDescContainer>
                    </ProfileInfoContainer>
                </ProfileContainer>
                <RoomsContainer>
                    {this.renderSection('내가 올린 방', '', 'MyRoom')}
                    {/* {this.renderSection('찜한 방', '', 'PickedRoom')} */}
                </RoomsContainer>
                {/* <ConfigContainer> */}
                    {/* {this.renderSection('키워드 등록', '')} */}
                    {/* {this.renderSection('학생 인증', '')} */}
                {/* </ConfigContainer> */}

                <LogoutContainer>
                    <NormalButton
                        onPress={logout}
                        label={'로그아웃'}
                    />
                </LogoutContainer>
            </Container>
        );
    }
}

const Container = styled.View`
    padding-horizontal:20;
    padding-top:23;
`;
const ProfileContainer = styled.View`
    flex-direction:row;
    align-items:center;

`;
const ProfileImageContainer = styled.View`
`;
const ProfileImage = styled.Image`
    width:60;
    height:60;
    borderRadius:30;
`;
const ProfileInfoContainer = styled.View`
    align-items:center;
    justify-content:center;
`;
const ProfileNameText = styled.Text`
    padding-left:16;
    padding-top:2;
`;
const ProfileDescContainer = styled.View`
    padding-left:16;
    align-items:center;
    justify-content:center;
`;
const ProfileIDText = styled.Text`
    font-size:20;
    line-height:28;
    font-weight:bold;
    letter-spacing:-0.35;
    color:${colors.darkGrey};
`;
const ProfileSchoolText = styled.Text`
    font-size:15;
    line-height:22;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;

const RoomsContainer = styled.View`
    margin-top:17;
`;
const SectionItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    border-bottom-width:1px;
    border-bottom-color:${colors.paleGrey};
    padding:20px;
    margin-bottom:10px;
`;
const SectionItemLeftContainer = styled.View`
    flex:1;
`;
const SectionItemContainerLabel = styled.Text`
    font-size:17;
    line-height:25;
    letter-spacing:-0.3;
    color:${colors.darkGrey};
`;
const SectionItemRightContainer = styled.View`
    align-items:flex-end;
    flex:1;
`;
const SectionItemPreviewLabel = styled.Text`
    font-size:17;
    line-height:25;
    letter-spacing:-0.3;
    color:${colors.blueyGrey};
`;

const Tab = styled.Text`
    alignItems:center;
    justifyContent:center;
`;

const ConfigContainer = styled.View`
`;

const LogoutContainer = styled.View`
`;

export default MyPage;