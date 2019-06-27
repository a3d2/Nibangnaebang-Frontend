/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import NormalButton from '../../feedback/button/NormalButton';

class RoomCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { data, onPressItem, owner, onPressConfirm } = this.props;
        if(!data) return null;

        return (
            <Container
            >
                <InnerContainer
                    onPress={onPressItem}
                >
                    <LeftContainer>
                        <Image
                            source={{ uir:data.image }}
                        />
                    </LeftContainer>
                    <RightContainer>
                        <SchoolName>
                            {data.school}
                        </SchoolName>
                        <Title>
                            {data.title}
                        </Title>
                        <Period>
                            {data.period}
                        </Period>
                        <Price>
                            {data.price}
                        </Price>
                    </RightContainer>
                </InnerContainer>
                {owner && 
                    <NormalButton
                        onPress={onPressConfirm}
                        label={'거래 완료'}
                    />
                }
            </Container>
        );
    }
};

RoomCard.propTypes = {
    data:PropTypes.object.isRequired,
    onPressItem:PropTypes.func,
    onPressConfirm:PropTypes.func,
    owner:PropTypes.bool,
};

RoomCard.defaultProps = {
    owner:false
}

const Container = styled.TouchableOpacity`
    margin-bottom:20;
`;
const InnerContainer = styled.TouchableOpacity`
    padding:20px;
    border-bottom-width:1px;
    border-bottom-color:black;
    flex-direction:row;
`;

const LeftContainer = styled.View`
`;

const Image = styled.Image`
    width:100;
    height:120;
`;

const RightContainer = styled.View`
    flex:1;
`;

const SchoolName = styled.Text`
`;

const Title = styled.Text`
`;

const Period = styled.Text`
`;

const Price = styled.Text`
`;

export default RoomCard;