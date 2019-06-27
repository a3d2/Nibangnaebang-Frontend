/* eslint no-useless-escape: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native';
import tabAssets from '@assets/tab'

const HomeIcon = styled.Image`
    width:21; height:20;
`;
const UploadIcon = styled.Image`
    width:22; height:22;
`;
const MessageIcon = styled.Image`
    width:24; height:20;
`;
const MyPageIcon = styled.Image`
    width:22; height:23;
`;
let Icon = styled.Image`
`;

class TabIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { type, focused } = this.props;

        const source = tabAssets[`${type.toLowerCase()}${focused ? '' : 'Grey'}`];
        switch(type) {
            case 'Home': Icon = HomeIcon; break;
            case 'Upload': Icon = UploadIcon; break;
            case 'Message': Icon = MessageIcon; break;
            case 'MyPage': Icon = MyPageIcon; break;
        }

        return <Icon source={source}/>;
    }
}

TabIcon.propTypes = {
    type:PropTypes.string.isRequired,
    focused:PropTypes.bool,
};

TabIcon.defaultProps = {
    type:'',
    focused:false
}

export default TabIcon;