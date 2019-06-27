import { Platform } from "react-native"
import colors from "../colors/colors";
import { changeOpacity } from "../utils/utils";

const headerHeight = Platform.select({
    ios: 50,
    android: 60
})

export const StackNavOptions = {
    headerStyle: {
        shadowOpacity: 0.6,
        shadowOffset: {
            height: 0,
        },
        shadowColor:colors.cloudyBlue,
        shadowRadius: 5,
        borderBottomWidth:0,
        height:headerHeight
    },
    headerTintColor: colors.slateGrey,
    headerTitleStyle: {
        fontWeight: 'normal',
        alignSelf: 'center',
        fontSize:20
    },
}

export const BlueStackNavOptions = {
    headerStyle: {
        borderBottomWidth:1,
        borderBottomColor:changeOpacity(colors.veryLightBlue, 0.1),
        height:headerHeight,
        backgroundColor: colors.softBlue
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'normal',
        alignSelf: 'center',
        fontSize:20
    },
}

export const TransparentNavOptions = {
    headerStyle: {
        borderBottomWidth:1,
        borderBottomColor:changeOpacity(colors.veryLightBlue, 0.1),
        height:headerHeight,
    },
    headerTransparent:true,
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'normal',
        alignSelf: 'center',
        fontSize:20
    },
}