import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';
import Banner from '../../../../components/view/banner/Banner';
import faker from 'faker';
import NormalButton from '../../../../components/feedback/button/NormalButton';
import assets from '../../../../assets/general';
import colors from '../../../../colors/colors';
import BackButton from '../../../../components/feedback/button/BackButton';
import { IMAGE_URI } from '../../../../constants/const';

export const RoomStatus = {
    onSale:'연락하기',
    pending:'확정하기',
    soldOut:'확정되었습니다',
}

@inject((stores, ownProps) => {
    const { params } = ownProps.navigation.state;
    const roomDetail = stores.room.rooms[params.No];
    
    return {
        navTo:stores.nav.navTo,
        roomDetail:roomDetail,
        loadRoomDetail:stores.room.loadRoomDetail,
        user:stores.auth.user
    }
})
class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            roomStatus:RoomStatus.onSale
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const { loadRoomDetail } = this.props;
        loadRoomDetail(params.No).then(_ => this.forceUpdate)
    }
    

    onPressButton = () => {
        const { roomDetail, user, navTo } = this.props;

        const isSeller = user.UserNo === roomDetail.Seller;

        if(isSeller) {
            // acceptRoom(roomDetail.)
        } else {
            navTo('Message');
        }
    }

    render() {
        const { roomDetail, user } = this.props;
        console.log("TCL: RoomDetail -> render -> roomDetail", roomDetail)

        const roomStatus = user.UserNo === roomDetail.Seller ? RoomStatus.pending : RoomStatus.onSale;

        const buttonLabel =  roomStatus;

        return (
            <Container>
                <Banner
                    images={roomDetail.images}
                />
                <ProfileContainer>
                    <ProfileImageContainer>
                        <ProfileImage
                            source={roomDetail.SellerGender === "male" ? assets.iconFaceM : assets.iconFaceW}
                        />
                    </ProfileImageContainer>
                    <ProfileInfoContainer>
                        <ProfileNameText>
                            {roomDetail.SellerName}
                        </ProfileNameText>
                        <ProfileSchoolText>
                            {`${roomDetail.School}`}
                        </ProfileSchoolText>
                    </ProfileInfoContainer>
                    {/* <MapButton>
                        <MapIcon source={assets.iconMap}/>
                    </MapButton> */}
                </ProfileContainer>

                <Divider/>
                
                <DescContainer>
                    <TextContainer>
                        <LocationIcon source={assets.iconLocation}/>
                            <Title>
                                {roomDetail.Title}
                            </Title>
                    </TextContainer>
                    <TextContainer>
                        <SchoolIcon source={assets.iconSchool}/>
                            <Location>
                                {roomDetail.Address}
                            </Location>
                    </TextContainer>

                    <Divider/>
                    
                    <Description>
                        {roomDetail.Detail}
                    </Description>
                </DescContainer>

                <Divider/>

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
    padding-top:20;
    padding-bottom:6;
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
    margin-vertical:16;
`;

const TextContainer = styled.View`
    flex-direction:row;
    align-items:center;
    margin-bottom:8;
`;

const SchoolIcon = styled.Image`
    width:15;
    height:20;
    margin-right:8;
`;

const LocationIcon = styled.Image`
    width:15;
    height:20;
    margin-right:8;
`;


export default RoomDetail;