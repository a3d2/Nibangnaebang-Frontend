import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components/native';

@inject(stores => ({
    spin:stores.spinner.spin
}))
class Home extends React.Component {
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
                <Button
                    onPress={() => {
                        this.props.spin();
                    }}
                >
                    <Text>
                        spin
                    </Text>
                </Button>
            </Container>
        );
    }
}

const Container = styled.ScrollView`
`;
const Button = styled.TouchableOpacity`
`;
const Text = styled.Text`
    color:red;
`;
const a = styled.View`
`

export default Home;