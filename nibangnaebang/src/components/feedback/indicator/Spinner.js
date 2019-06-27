/**
 * Created by jaybe on 2017. 6. 22..
 */
import React, { Component } from 'react';
import {
    View,
    Animated,
    ActivityIndicator, 
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';


class Spinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            scaleValue: new Animated.Value(1)
        };
    }

    render() {
        const { spin, overlayColor } = this.props;

        if (spin) {
            return (
                <View style={styles.spinnerContainer}>
                    <View style={{
                        flex: 1,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.15,
                        backgroundColor: overlayColor
                    }}/>
                    <Animated.View style={[styles.spinnerCircles, {transform: [{ scale: this.state.scaleValue }]}]}>
                        <ActivityIndicator
                            style={{opacity: this.state.opacity, height:80}}
                        />
                    </Animated.View>
                </View>
            );
        } else {
            return null;
        }
    }
}

Spinner.propTypes = {
    spin:PropTypes.bool.isRequired,
    overlayColor:PropTypes.string.isRequired,
};

Spinner.defaultProps = {
    spin:false,
    overlayColor:'black'
}

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent'
    },
    spinnerOverlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: 0.6,
        backgroundColor: 'black'
    },
    spinnerCircles: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        borderRadius: 40,
    }
});

export default Spinner;