import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS, icons, SIZES } from '../../utils'
import RequirementBar from './RequirementBar'

const RenderRequirementBar = () => {
    return (
        <View style={styles.containerItem}>
            <RequirementBar
                icon={icons.sun}
                barPercentage="50%"
            />
            <RequirementBar
                icon={icons.drop}
                barPercentage="25%"
            />
            <RequirementBar
                icon={icons.temperature}
                barPercentage="80%"
            />
            <RequirementBar
                icon={icons.garden}
                barPercentage="30%"
            />
            <RequirementBar
                icon={icons.seed}
                barPercentage="50%"
            />
        </View>



    )
}

export default RenderRequirementBar

const styles = StyleSheet.create({
    containerItem: {
        flexDirection: "row",
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        justifyContent: "space-between"
    }

})
