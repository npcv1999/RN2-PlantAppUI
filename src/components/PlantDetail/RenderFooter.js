import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../utils';

const RenderFooter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    width: '40%',
                    backgroundColor: COLORS.primary,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    paddingHorizontal: SIZES.padding,
                }}
                onPress={() => { console.log("Take Action") }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
                <Image source={icons.chevron} style={{ width: 30, height: 30 }}></Image>
            </TouchableOpacity>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding }}>
                <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>Almost 2 weeks of growing time</Text>
                <Image
                    source={icons.downArrow}
                    resizeMode="contain"
                    style={{
                        tintColor: COLORS.secondary,
                        marginLeft: SIZES.base,
                        width: 20,
                        height: 20
                    }}
                />
            </View>
        </View>
    );
};

export default RenderFooter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: SIZES.padding
    },
});
