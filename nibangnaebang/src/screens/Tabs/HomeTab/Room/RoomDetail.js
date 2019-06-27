import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import Banner from '../../../../components/view/banner/Banner';
import faker from 'faker';
import NormalButton from '../../../../components/feedback/button/NormalButton';

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
                            source={{ uri:faker.image.avatar() }}
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
                        
                    </MapButton>
                </ProfileContainer>
                <DescContainer>
                    <Title>
                        {data.title}
                    </Title>
                    <Location>

                    </Location>
                    <Description>
                        {data.desc}
                    </Description>
                </DescContainer>
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
`;

const ProfileContainer = styled.View`
    flex-direction:row;
    position:relative;
`;
const ProfileImageContainer = styled.View`
`;
const ProfileImage = styled.Image`
    width:50;
    height:50;
`;
const ProfileInfoContainer = styled.View`
`;
const ProfileNameText = styled.Text`
`;
const ProfileSchoolText = styled.Text`
`;
const MapButton = styled.TouchableOpacity`
    right:0;
    position:absolute;
    width:20;
    height:20;
    background-color:red;
`;

const DescContainer= styled.View`
`;
const Title = styled.Text`
`;
const Location = styled.Text`
`;
const Description = styled.Text`
`;

const BottomButtonContainer = styled.View`
`;

export default RoomDetail;