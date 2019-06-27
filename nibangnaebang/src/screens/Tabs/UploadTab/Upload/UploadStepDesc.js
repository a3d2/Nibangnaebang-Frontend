import React from 'react';
import { inject } from 'mobx-react';
import { DeviceEventEmitter } from 'react-native';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';
import TextInput from '../../../../components/data/input/TextInput';
import CheckButton from '../../../../components/feedback/button/CheckButton';
import assets from '@assets/general'
import colors from '../../../../colors/colors';
import Input from '../../../../components/data/input/Input';

@inject(stores => ({
    navTo:stores.nav.navTo,
    createRoom:stores.room.createRoom,
    user:stores.auth.user
}))
class UploadStepDesc extends React.Component {
    constructor(props) {
        super(props);
        const { params } = props.navigation.state;
        this.state = {
            ...params,

            images:[],

            address:'',
            school:'',
            title:'',
            desc:''
        }
    }
    componentDidMount() {
        DeviceEventEmitter.addListener('Upload', this.upload)
    }
    
    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners();
    }

    openPicker = () => {
        ImagePicker.openPicker({
            multiple:true
        }).then(images => {
            this.setState({ images:images })
        });
    }
    
    toggleCheckBox = () => {
        const { cautionChecked } = this.state;
        this.setState({ cautionChecked:!cautionChecked });
    }
    deleteImage = (image) => {
        const { images } = this.state;
        var index = images.indexOf(image);
        if (index !== -1) images.splice(index, 1);
        this.setState({ images:images });
    }

    onAddressChange = (value) => {
        this.setState({ address:value });
    }
    onSchoolChange = (value) => {
        this.setState({ school:value });
    }
    onTitleChange = (value) => {
        this.setState({ title:value });
    }
    onDescChange = (value) => {
        this.setState({ desc:value });
    }

    upload = () => {
        const { createRoom, user } = this.props;
        createRoom({
            title:this.state.title,
            pay:this.state.price,
            detail:this.state.desc,
            address:this.state.address,
            ALStart:this.state.startDate.dateString,
            ALEnd:this.state.endDate.dateString,
            school:this.state.school,
            userNo:user.UserNo,
            sameGender:this.state.switchValue ? 1 : 0,
        })
    }

    render() {
        const { images, cautionChecked } = this.state;

        const roomImages = images.map((each, idx) => {
            return (
                <RoomImageContainer key={idx}>
                    <RoomImage source={{
                        uri:each.path
                    }}/>
                    <EraseButton
                        onPress={this.deleteImage.bind(this, each)}
                    >
                        <EraseIcon source={assets.iconDelete}/>
                    </EraseButton>
                </RoomImageContainer>
            )
        })

        return (
            <Container>
                <RoomImagesContainer
                    horizontal
                >
                    <AddRoomImageButton
                        onPress={this.openPicker}
                    >
                        <AddRoomIcon source={assets.iconAddImage}/>
                    </AddRoomImageButton>
                    {roomImages}
                </RoomImagesContainer>
                <InputsContainer>
                    <InputContainer>
                        <LocationIcon source={assets.iconLocation}/>
                        <TextInput
                            placeholder={'주소'}
                            returnKeyType={'next'}
                            onSubmitEditing={() => {
                                this.schoolRef.focus();
                            }}
                            onChangeText={this.onAddressChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <SchoolIcon source={assets.iconSchool}/>
                        <TextInput
                            inputRef={ref => { this.schoolRef = ref; }}
                            returnKeyType={'next'}
                            placeholder={'학교'}
                            onSubmitEditing={() => {
                                this.titleRef.focus();
                            }}
                            onChangeText={this.onSchoolChange}
                        />
                    </InputContainer>
                    <Input
                        inputRef={ref => { this.titleRef = ref; }}
                        placeholder={'제목'}
                        returnKeyType={'next'}
                        containerStyle={{
                            marginTop:16
                        }}
                        inputStyle={{
                            fontSize:20
                        }}
                        onSubmitEditing={() => {
                            this.descRef.focus();
                        }}
                        onChangeText={this.onTitleChange}
                    />
                    <Input
                        inputRef={ref => { this.descRef = ref; }}
                        placeholder={'방을 자유롭게 소개해주세요'}
                        inputStyle={{
                            marginTop:16,
                            fontSize:15
                        }}
                        multiline
                        removeUnderline
                        onChangeText={this.onDescChange}
                    />
                </InputsContainer>
                {/* <CheckButton
                    onPress={this.toggleCheckBox}
                    checked={cautionChecked}
                    label={'몰라 일단 체크'}
                /> */}
            </Container>
        );
    }
}
UploadStepDesc.propTypes = {
};

UploadStepDesc.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
    padding-horizontal:20;
`;

const RoomImagesContainer = styled.ScrollView`
    flex-direction:row;
`
const AddRoomImageButton = styled.TouchableOpacity`
    margin-right:12;
`;
const AddRoomIcon = styled.Image`
    width:88;
    height:88;
`;
const RoomImageContainer = styled.View`
    margin-right:12;
`;
const RoomImage = styled.Image`
    width:88;
    height:88;
    border-radius:4;
`;

const InputsContainer = styled.View`
    margin-top:8;
`;

const EraseButton = styled.TouchableOpacity`
    position:absolute;
    right:-6;
    top:-6;
`;

const EraseIcon = styled.Image`
    width:24;
    height:24;
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

const InputContainer = styled.View`
    flex-direction:row;
    align-items:center;
    padding-bottom:15;
    border-bottom-width:1;
    border-bottom-color:${colors.lightPeriwinkle};
    margin-top:12;
`;

export default UploadStepDesc;