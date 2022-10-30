import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Button, Pressable } from 'react-native'
import COLORS from '../consts/colors'

const CustomButton = ({ onPress, text, widthBtn, bgColor, textColor, type }) => {
    
    return (
        <Pressable 
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
                widthBtn ? {width: widthBtn} : {}
                ]}>

            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    textColor ? {color: textColor} : {}
                    ]}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical:5,
        // flexDirection: 'row',
        alignItems:'center',
        // justifyContent: 'center',
        borderRadius: 10,
    },
    container_Primary: {
        backgroundColor: COLORS.primary,
    },
    container_Secondary: {
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.white,
    },
    text_Secondary: {
        color: 'gray'
    }
})