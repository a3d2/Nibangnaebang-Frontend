import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
}))
class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { 
        } = this.state;

        return (
            <Container>
                <Text>
                    Upload
                </Text>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default Upload;