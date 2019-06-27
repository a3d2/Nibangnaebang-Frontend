/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';

class RoomCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { data, onPressItem } = this.props;
        if(!data) return null;

        return (
            <Container
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
            </Container>
        );
    }
};

RoomCard.propTypes = {
    data:PropTypes.object.isRequired,
    onPressItem:PropTypes.func,
};

RoomCard.defaultProps = {
}

const Container = styled.TouchableOpacity`
    padding:20px;
    margin-bottom:20;
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