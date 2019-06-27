import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import Banner from '../../../../components/view/banner/Banner';
import faker from 'faker';
import NormalButton from '../../../../components/feedback/button/NormalButton';
import assets from '../../../../assets/general';
import colors from '../../../../colors/colors';

export const RoomStatus = {
    onSale:'연락하기',
    pending:'거래완료',
    soldOut:'거래가 완료되었습니다',
}

@inject(stores => ({
}))
class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomStatus:RoomStatus.onSale
        }
    }

    onPressButton = () => {

    }

    render() {
        const { user } = this.props;
        const { params:data } = this.props.navigation.state;
        const { roomStatus } = this.state;

        const buttonLabel = roomStatus

        return (
            <Container>
                <Banner
                    images={data.images}
                />
                <ProfileContainer>
                    <ProfileImageContainer>
                        <ProfileImage
                            // source={{ uri:user.image }}
                            source={assets.iconFace}
                        />
                    </ProfileImageContainer>
                    <ProfileInfoContainer>
                        <ProfileNameText>
                            {/* {user.id} */}
                            {faker.name.firstName()}
                        </ProfileNameText>
                        <ProfileSchoolText>
                            {`${data.school}`}
                        </ProfileSchoolText>
                    </ProfileInfoContainer>
                    <MapButton>
                        <MapIcon source={assets.iconMap}/>
                    </MapButton>
                </ProfileContainer>
                
                <DescContainer>
                        <Title>
                            {data.title}
                        </Title>
                        <Location>

                        </Location>
                    
                    <Divider>
                    </Divider>
                    
                    
                    <Description>
                        {data.desc}
                    </Description>
                </DescContainer>
                <Divider>

                </Divider>
                <BottomButtonContainer>
                    <NormalButton
                        onPress={this.onPressButton}
                        label={buttonLabel}
                    />
                </BottomButtonContainer>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
    flex:1;
`;

const ProfileContainer = styled.View`
    flex-direction:row;
    position:relative;
    align-items:center;
    padding-horizontal:20;
    padding-vertical:20;
`;
const ProfileImageContainer = styled.View`
`;
const ProfileImage = styled.Image`
    width:36;
    height:36;
`;
const ProfileInfoContainer = styled.View`
`;
const ProfileNameText = styled.Text`
    padding-horizontal:12;
`;
const ProfileSchoolText = styled.Text`
    padding-horizontal:12;
`;
const MapButton = styled.TouchableOpacity`
    right:20;
    position:absolute;
`;

const DescContainer= styled.View`
    padding-horizontal:20;
    padding-bottom:60;
`;
const Title = styled.Text`
`;
const Location = styled.Text`
`;
const Description = styled.Text`
    padding-top:16;
`;

const BottomButtonContainer = styled.View`
    padding-horizontal:20;
    padding-vertical:12;
`;

const MapIcon = styled.Image`
    width:16;
    height:17;
`;

const Divider = styled.View`
    height:1;
    width:100%;
    background-color:${colors.paleGrey};
`;

export default RoomDetail;