import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView
} from 'react-native';

import { NativeBaseProvider, Box, Button, VStack, Center } from 'native-base'
import CustomTheme from '../../consts/CustomTheme'
import COLORS from '../../consts/colors';
import TourPost from './tourPost';
import HotelPost from './hotelPost';


const Post = ({ navigation }) => {

    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, }}>
                <View style={styles.header}>
                    <Text>Xin chào, Anh Thư</Text>
                </View>

                <View  style={styles.titleContainer}>
                    <Text  style={styles.title}>Đăng bài</Text>
                </View>

                <View style={styles.body}>
                    <VStack space={4} alignItems="center">
                            <Box alignItems="center">
                                <Button w="64" h="20" size='lg' background={COLORS.primary} onPress={() => navigation.navigate(TourPost)}>Tour</Button>
                            </Box>
                            <Box alignItems="center" >
                                <Button w="64" h="20" size='lg' background={COLORS.primary} onPress={() => navigation.navigate(HotelPost)}>Khách sạn</Button>
                            </Box>
                    </VStack>
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

export default Post

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 100,
    }, 
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.orange,
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})