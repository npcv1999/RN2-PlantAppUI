import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../utils';

const { height } = SIZES;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.base,
    },
    viewNew: {
        height: height * 0.3,
        backgroundColor: COLORS.white,
    },
    viewNewInside: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: COLORS.primary,
    },
    viewHeader: {
        marginTop: SIZES.base,
        marginHorizontal: SIZES.padding,
    },
    txtHeader: {
        color: COLORS.white,
        ...FONTS.h2,
    },
    viewItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.base,
    },
    viewLabel: {
        position: 'absolute',
        bottom: '17%',
        right: -1,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: SIZES.base,
    },
    txtLabel: {
        ...FONTS.body4,
        color: COLORS.white,
    },
    viewHeart: {
        position: 'absolute',
        top: '17%',
        left: 7,
    },
    viewToday: {
        height: height * 0.5,
        backgroundColor: COLORS.lightGray,
    },
    todayArea: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    todayMain: {
        marginTop: SIZES.font,
        marginHorizontal: SIZES.padding,
    },
    viewBodyToday: {
        flexDirection: 'row',
        height: '85%',
        marginTop: SIZES.base,
    },
    leftViewToday: {
        flex: 1,
    },
    rightViewToday: {
        flex: 1,
    },
    viewFriend: {
        height: 'auto',
        backgroundColor: COLORS.lightGray,
        padding: SIZES.padding,
    },
    friend: {
        marginTop: SIZES.base,
        flexDirection: 'row',
        height: 'auto',
    },
    viewAvt: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addNew: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
export { styles };
