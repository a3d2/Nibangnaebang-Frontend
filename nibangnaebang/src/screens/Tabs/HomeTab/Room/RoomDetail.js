import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
}))
class RoomDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        const { 
        } = this.state;

        return (
            <Container>
                <Text>
                    room
                </Text>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Text = styled.Text`
`;

export default RoomDetail;