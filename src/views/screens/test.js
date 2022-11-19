import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import { NativeBaseProvider, Box, TextArea, useToast, Center, Select, CheckIcon } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import CustomTheme from '../../consts/CustomTheme'
import COLORS from '../../consts/colors';
import CustomInput from '../../consts/CustomInput';
import CustomButton from '../../consts/CustomButton'
import HomeScreen from '../screens/HomeScreen'

import axiosClient from '../../api/client';


const Test = ({ navigation }) => {

    const toast = useToast()
    const [service, setService] = React.useState("")

    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, email, phone);
    }


    const submitPost = async () => {
        axiosClient.post('/test/test-post', {
            title: title,
            email: email,
            phone: phone,
        })
            .then(res => {
                setPosts([res.data], ...posts)
                console.log(`${res.data.title} is saved successfuly`)
                navigation.navigate("HomeScreen")
            })
            .catch(err => {
                console.log(err)
            })
    
    }

    return (
        <NativeBaseProvider>
            <ScrollView >
                <SafeAreaView style={{ flex: 1, }}>
                    <StatusBar translucent={false} backgroundColor={COLORS.white} />
                    <View style={styles.header}>
                        <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                        <Text>Test</Text>
                        <Icon name='notifications-none' size={24} color={COLORS.white} />
                    </View>

                    <CustomInput
                        placeholder="Tiêu đề bài viết"
                        iconName='label'
                        value={title}
                        onChangeText={text => {
                            setTitle(text)
                        }}
                    />
                    <CustomInput
                        placeholder="Email"
                        iconName='email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <CustomInput
                        placeholder="Sđt"
                        iconName='phone'
                        value={phone}
                        onChangeText={text => setPhone(text)}
                    />

                    <CustomButton
                        text='Đăng bài'
                        type='Primary'
                        widthBtn='80%'
                        onPress={() => submitPost()}
                    />



                </SafeAreaView>
            </ScrollView>
        </NativeBaseProvider >
    )
}

export default Test
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: COLORS.orange,
        alignItems: 'center',
        marginTop: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: COLORS.white
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 16
    },
})
