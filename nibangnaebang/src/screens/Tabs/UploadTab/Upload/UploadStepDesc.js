import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types'
import styled from 'styled-components/native';

@inject(stores => ({
    navTo:stores.nav.navTo,
}))
class UploadStepDesc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    
    render() {
        return (
            <Container>
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
`;

export default UploadStepDesc;