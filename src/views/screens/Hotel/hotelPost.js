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

import { NativeBaseProvider, Box, TextArea, useToast, Center, Select, CheckIcon } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
// import ImagePicker from 'react-native-image-crop-picker'
import CustomTheme from '../../../consts/CustomTheme'
import COLORS from '../../../consts/colors';

const HotelPost = ({ navigation }) => {

    const toast = useToast()

    const [service, setService] = React.useState("")

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
                            placeholder="Chọn ngày ở"
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
                            placeholder="Địa điểm"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,

                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="view-list" color={COLORS.primary} size={20} />
                        <Text style={{paddingLeft: 10, color: '#05375a'}}>
                            Loại phòng
                        </Text>
                    </View>
                    <Center>
                        <Box maxW="400" >
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Chọn loại phòng" placeholder="Chọn loại phòng" _selectedItem={{
                                
                                endIcon: <CheckIcon size="4" />
                            }} mb={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Phòng giường đơn" value="ux" />
                                <Select.Item label="Phòng giường đôi" value="web" />
                                <Select.Item label="Phòng có giường em bé" value="ui" />
                                <Select.Item label="Phòng view đẹp" value="ui" />
                                <Select.Item label="Village" value="cross" />
                                <Select.Item label="Homestay" value="backend" />
                            </Select>
                        </Box>
                    </Center>


                    <View style={styles.action}>
                        <Icon name="euro" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Giá phòng"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={[
                                styles.textInput,
                                COLORS.primary,

                            ]}
                        />
                    </View>
                    <View style={styles.action}>
                        <Icon name="dialpad" color={COLORS.primary} size={20} />
                        <TextInput
                            placeholder="Số lượng"
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
                        <Box alignItems="flex-start" w="100%" ml={3}>
                            <TextArea h={40} placeholder="Thông tin khách sạn" w="500" maxW="300" />
                        </Box>

                    </View>
                    {/* <View style={styles.action}>
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
                    </View> */}
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

export default HotelPost
const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
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
