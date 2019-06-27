/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import colors from '../../../colors/colors';
import HeartIcon from '../icon/HeartIcon';
import assets from '@assets/general';
import { inject } from 'mobx-react';

@inject(stores => ({
    loadAllComments:stores.comment.loadAllComments,
    comments:stores.comment.comments
}))
class CommentButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index:0,
        };
    }

    componentDidMount() {
        const { loadAllComments, comments } = this.props;
        if(!comments.length)
            loadAllComments();
        this.roll();
    }

    roll = (interval = 3000) => {
        //TODO rolling animations
        setTimeout(() => {
            let { index } = this.state;
            let { comments } = this.props;
            index += 1;
            if(index >= Math.min(comments.length, 10)) index = 0;
            this.setState({ index:index }, this.roll)
        }, interval)
    }

    render() {
        const { onPress, comments } = this.props;
        
        const { index } = this.state;
        const comment = (comments && comments.length && comments[index]) || {};

        return (
            <Container>
                <HeartIcon active/>
                <TextContainer>
                    <TargetText>
                        {comment.artistName}
                    </TargetText>
                    <WrittenText
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {comment.text}
                    </WrittenText>
                    <ByText>
                        BY. {comment.nickname}
                    </ByText>
                </TextContainer>
                <Button 
                    onPress={onPress}
                    underlayColor={colors.mainPink}
                >
                    <Icon source={assets.iconEditWhite}/>
                </Button>
            </Container>
        );
    }
}

CommentButton.propTypes = {
    onPress:PropTypes.func.isRequired,
};

const Container = styled.View`
    height:40;
    border:1px solid ${colors.periwinkleGray};
    border-radius:20.5;
    padding: 4px 4px 4px 15px;
    display:flex;
    align-items:center;
    flex-direction:row;
`;
const TextContainer = styled.View`
    margin: 0px 10px;
    display:flex;
    flex-direction: row;
    align-items:center;
    flex:1;
`;
const TargetText = styled.Text`
    font-weight:700;
    color: ${colors.abbey};
`;
const WrittenText = styled.Text`
    margin: 0px 5px;
    color: ${colors.abbey};
    flex-shrink:1;
`;
const ByText = styled.Text`
    font-size:12;
    color:${colors.cloudyBlue};
`;

const Button = styled.TouchableHighlight`
    width:32; height:32;
    border-radius:16;
    background-color:${colors.periwinkleGray};
    justify-content:center;
    align-items:center;
`;
const Icon = styled.Image`
    width:20; height:20;
`;



export default CommentButton;