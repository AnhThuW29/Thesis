import React from "react"
import { StyleSheet, Dimensions, View, Text, ImageBackground, TouchableOpacity} from 'react-native'

import COLORS from "../consts/colors"
import places from "../consts/places"
import Icon from 'react-native-vector-icons/MaterialIcons'

import DetailsScreen from '../views/screens/DetailsScreen'

const { width } = Dimensions.get('screen')

const Card = ({ place, navigation }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={(navigation) => {navigation.navigate('DetailsScreen', place)}}
            >
                <ImageBackground
                    style={styles.cardImage}
                    source={place.image}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}>
                        {place.name}
                    </Text>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='place' size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                {place.location}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                5.0
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
}

export default Card

const styles = StyleSheet.create({
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
})