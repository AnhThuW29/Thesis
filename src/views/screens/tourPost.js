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

import { NativeBaseProvider, Box, TextArea, useToast, Button } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
// import ImagePicker from 'react-native-image-crop-picker'
import CustomTheme from '../../consts/CustomTheme'
import COLORS from '../../consts/colors';

const TourPost = ({ navigation }) => {

    const toast = useToast()

    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');


    return (
        <NativeBaseProvider>
            <ScrollView >
                <SafeAreaView style={{ flex: 1, }}>
                    <StatusBar translucent={false} backgroundColor={COLORS.white} />
                    <View style={styles.header}>
                        <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                        <Text>Xin chào, Anh Thư</Text>
                        <Icon name='notifications-none' size={24} color={COLORS.white} />
                    </View>

                    <View style={styles.action}>
                        <Icon name="label" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Tiêu đề bài viết"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                COLORS.primary,
                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            keyboardType="email-address"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Feather name="phone" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Số điện thoại"
                            placeholderTextColor="#666666"
                            keyboardType="number-pad"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="today" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Chọn ngày đi"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="today" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Chọn ngày về"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="date-range" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Độ dài"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>

                    <View style={styles.action}>
                        <Icon name="place" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Địa điểm khởi hành"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="euro" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Giá tour"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="source" color={COLORS.primary} size={20} />
                        {/* <TextInput
                            placeholder="Thông tin địa điểm"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                COLORS.primary,

                            ]}
                        /> */}
                        <Box alignItems="flex-start" w="100%" ml={3}>
                            <TextArea h={40} placeholder="Thông tin địa điểm" w="500" maxW="300" />
                        </Box>

                    </View>
                    <View style={styles.action}>
                        <Icon name="flag" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Lịch trình tour"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <TouchableOpacity style={styles.commandButton} onPress={() => toast.show({
                            description: "Hello world"
                        // render: () => {
                        //     return <Box bg="primary.200" px="2" py="1" rounded="sm" mb={5}>
                        //             Vui lòng chờ quản trị viên kiểm duyệt
                        //           </Box>;
                        //   }
                    })}>
                        <Text style={styles.panelButtonTitle}>Đăng bài</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default TourPost
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
