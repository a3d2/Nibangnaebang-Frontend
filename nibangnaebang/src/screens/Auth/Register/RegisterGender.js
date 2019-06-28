import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors'
import assets from "@assets/general";
import BackButton from '../../../components/feedback/button/BackButton';
import NormalButton from '../../../components/feedback/button/NormalButton';
// import { Button } from 'react-native-elements';



@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class RegisterGender extends React.Component{
    constructor(props){
        super(props);
        const { params } = props.navigation.state;

        this.state = {
            ...params,
            
            gender:'',
        }
    }

    onGenderChange = (value) => {
        this.setState({ gender:value });
    }


    onPressNext = () => {
        const {navTo} = this.props;
        navTo('RegisterAuth', this.state);
    }

    onMale = () => {
        {!this.state.male &&
            this.setState({male:true});
        }
        {this.state.male &&
            this.setState({male:false});
        }

    }

    onFemale = () => {
        {!this.state.female &&
            this.setState({female:true});
        }
        {this.state.female &&
            this.setState({female:false});
        }
        
    }

    render(){
        const { gender } = this.state;
        
        return (
            <Container>
                <BackButton>

                </BackButton>
                <Title>
                    성별을 알려주세요
                </Title>
                <Text1>
                    좀 더 안전한 방 거래를 위해
                </Text1>
                <Text2>
                    자신의 성별을 정확히 입력해주세요
                </Text2>

                <ButtonContainer>
                    <Button
                        onPress={this.onGenderChange.bind(this, 'male')}
                        border={gender === "male"}
                    >

                        <ImageContainer>
                            <Image
                                source={assets.iconMan}
                            />
                        </ImageContainer>
                        <Text>
                            남성
                        </Text>
                    </Button>

                    <Button
                        onPress={this.onGenderChange.bind(this, 'female')}
                        border={gender === "female"}
                    >
                        <ImageContainer>
                            <Image
                                source={assets.iconWoman}
                            />
                        </ImageContainer>
                        <TextContainer>
                            <Text>
                                여성
                            </Text>   
                        </TextContainer>
                    </Button>
                </ButtonContainer>
                
                <NormalButton
                    onPress={this.onPressNext}
                    label={'다음'}
                />
            </Container>
        )
    }
}

RegisterGender.PropTypes = {
};

RegisterGender.defaultProps = {
}

const Container = styled.ScrollView`
    flex:1;
    padding-horizontal:20;
`;

const Title = styled.Text`
    fontSize:24;
    fontWeight:bold;
    padding-bottom:3;
    color:${colors.darkGrey};
`;

const Text1 = styled.Text`
    fontSize:15;
`;

const Text2 = styled.Text`
    fontSize:15;
`;

const ButtonContainer = styled.View`
    flex:1;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
    padding-top:108;
    padding-bottom:183;
    color:black;
`;

const Button = styled.TouchableOpacity`
    width:148;
    height:164;
    border-color:${props => props.border ? colors.mainBlue : colors.paleGrey};
    border-width:1;
    border-radius:10;
    alignItems:center;
    justifyContent:center;
`;

const ImageContainer = styled.View`
    alignItems:center;
    justifyContent:center;
    padding-bottom:10;
`;

const Image = styled.Image`
    width:56;
    height:56;
`;

const TextContainer = styled.View`
    alignItems:center;
    justifyContent:center;
`;

const Text = styled.Text`
    fontSize:15;
    color:${colors.darkGrey};
`;

export default RegisterGender;