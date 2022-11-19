import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from './colors'

const CustomInput = ({
    error,
    iconName,
    password,
    // onFocus = () => { },
    ...props }) => {

    // const [isFocus, setIsFocus] = useState(false)
    const [hidePassword, setHidePassword] = useState(password)
    return (
        <View>
            <View style={[
                styles.container,
                // {
                //     borderColor: error
                //         ? COLORS.red
                //         : isFocus
                //             ? COLORS.dark
                //             : COLORS.light,
                //     alignItems: 'center'
                // }
            ]}>
                <Icon
                    name={iconName}
                    color={COLORS.primary}
                    size={20}
                    style={{marginRight: 8,}}
                />
                <TextInput
                    autoCorrect={false}
                    // onFocus={() => {
                    //     onFocus()
                    //     setIsFocus(true)
                    // }}
                    // onBlur={() => {
                    //     setIsFocus(false)
                    // }}
                    style={styles.input}
                    {...props}
                    secureTextEntry={hidePassword}
                />
                {password && (
                    <Icon
                        onPress={() => {
                            setHidePassword(!hidePassword)
                        }}
                        name={hidePassword ? 'visibility' : 'visibility-off'}
                        style={styles.icon}
                    />

                )}
            </View>
            {error ? (
                <Text style={{ color: COLORS.red, fontSize: 12, marginTop: 7 }}>
                    {error}
                </Text>
            ) : null}
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginVertical: 5,
        // marginHorizontal: 10,
        // justifyContent:'center',
        alignItems:'center',
        // width: '100%'
    },
    input: {
        width: '100%',
        fontSize: 16,
        color: COLORS.dark
    },
    icon: {
        fontSize: 20,
        color: COLORS.dark,
        right: 30
    }
})
