import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../utils";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewBanner: {
        height: "35%"
    },
    banner: {
        width: "100%",
        height: "100%"
    },
    requirement: {
        flex: 1,
        marginTop: -40,
        backgroundColor: COLORS.lightGray,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingVertical: SIZES.padding
    },
    label: {
        ...FONTS.h1,
        paddingHorizontal: SIZES.padding,
        color: COLORS.secondary
    }
})
export default styles