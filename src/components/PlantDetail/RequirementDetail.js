import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../../utils'

const RequirementDetail = ({ icon, label, detail }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }} >
                <Image source={icon} style={{ width: 30, height: 30, marginRight: SIZES.base }}></Image>
                <Text>{label}</Text>
            </View>
            <Text style={{ justifyContent: "flex-end" }}>{detail}</Text>
        </View>
    )
}

export default RequirementDetail

