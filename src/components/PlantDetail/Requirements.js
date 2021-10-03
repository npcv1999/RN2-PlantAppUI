import React from 'react'
import { StyleSheet, View } from 'react-native'
import { icons, SIZES } from '../../utils'
import RequirementDetail from './RequirementDetail'

const Requirements = () => {
    return (
        <View style={styles.container}>
            <RequirementDetail
                icon={icons.sun}
                label="Sunlight"
                detail="15°C"
            />
            <RequirementDetail
                icon={icons.drop}
                label="Water"
                detail="250 ML Daily"
            />
            <RequirementDetail
                icon={icons.temperature}
                label="Room Temp"
                detail="25°C"
            />
            <RequirementDetail
                icon={icons.garden}
                label="Soil"
                detail="3 Kg"
            />
            <RequirementDetail
                icon={icons.seed}
                label="Fertilizer"
                detail="150 Mg"
            />
        </View>
    )
}

export default Requirements

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        marginTop: SIZES.base,
        paddingHorizontal: SIZES.padding,
        justifyContent: 'space-around'
    }
})
