import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, ScrollView, StatusBar, SafeAreaView, ToastAndroid } from 'react-native';
import { NativeBaseProvider, Box, TextArea, useToast, Center, Select, CheckIcon } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
// import ImagePicker from 'react-native-image-crop-picker'
import CustomTheme from '../../../consts/CustomTheme'
import COLORS from '../../../consts/colors';
import CustomInput from '../../../consts/CustomInput';
import CustomButton from '../../../consts/CustomButton'
import axiosClient from '../../../api/client';

import { isValidEmail } from '../../../utils/methods'

// const validationSchema = Yup.object({
//     title: Yup.string().min(5, 'Tiêu đề không hợp lệ').required('Bạn cần nhập tiêu đề'),
//     content: Yup.string().min(50, 'Nội dung không hợp lệ').required('Bạn cần nhập nội dung'),
//     place: Yup.string().min(2, 'Không hợp lệ').required('Bạn cần nhập địa danh'),
//     city: Yup.string().min(2, 'Không hợp lệ').required('Bạn cần nhập thành phố'),
//     email: Yup.string().email('Email không hợp lệ').required('Bạn cần nhập email'),
//     phone: Yup.number().min(8, 'Quá ngắn').required('Bạn cần nhập số điện thoại'),
//     startDate: Yup.date().min(2, 'Không hợp lệ').required('Bạn cần nhập ngày đi'),
//     endDate: Yup.date().min(2, 'Không hợp lệ').required('Bạn cần nhập ngày về'),
//     price: Yup.number().min(4, 'Không hợp lệ').required('Bạn cần nhập giá tiền'),
//     tags: Yup.string().min(4, 'Không hợp lệ').required('Bạn cần nhập đúng loại tour'),
//     range: Yup.number().max(2, 'Không hợp lệ')
//     // schedule: Yup.
// })

const TourPost = ({ navigation }) => {

    const toast = useToast()
    const [service, setService] = React.useState("")
    const [error, setError] = useState('')

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [place, setPlace] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [range, setRange] = useState("")
    const [price, setPrice] = useState("")
    const [tags, setTags] = useState([])
    const [schedule, setSchedule] = useState("")
    const [posts, setPosts] = useState([])

    // const tour = {
    //     title: '',
    //     content: '',
    //     place: '',
    //     city: '',
    //     email: '',
    //     phone: '',
    //     startDate: '',
    //     endDate: '',
    //     range: '',
    //     price: '',
    //     tags: '',
    // }

    const showToast = (msg) => {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, content, place, city, email, phone, startDate, endDate, range, price, tags, schedule);
    }

    const submitPost = async () => {
        if (title.length < 5) {
            showToast("Tiêu đề không được ngắn hơn 5 ký tự!")
            return
        }

        if (content.length < 5) {
            showToast("Nội dung không được ngắn hơn 5 ký tự!")
            return
        }

        if (!isValidEmail(email)){
            showToast('Email không hợp lệ')
            return
        }

        axiosClient.post('/tour-post/create-tour', {
            title,
            content,
            place,
            city,
            email,
            phone,
            startDate,
            endDate,
            range,
            price,
            tags,
            schedule,
        })
            .then(res => {
                setPosts([res.data], ...posts)
                navigation.navigate("HomeScreen")
            })
            .catch(err => {
                console.log(err)
            })
    }



    // const handleOnChangeText = (value, field) => {
    //     setUserInfo({ ...tour, [field]: value })
    // }

    // const isValidForm = () => {
    //     // chỉ thực hiện khi fields có giá trị
    //     if (!isValidObjectField(tour))
    //         return updateError('Điền vào ô trống', setError)

    //     if (title.length < 5)
    //         return updateError('Tiêu đề không hợp lệ', setError)
    //     if (content.length < 50)
    //         return updateError('Tiêu đề không hợp lệ', setError)
    //     if (place.length < 2)
    //         return updateError('Tiêu đề không hợp lệ', setError)

    //     // Email phải hợp lệ
    //     if (!isValidEmail(email))
    //         return updateError('Email không hợp lệ', setError)

    //     // Phone phải lớn hơn hoặc bằng 8 ký tự
    //     if (phone.length < 8)
    //         return updateError('Số điện thoại không hợp lệ', setError)

    //     if (!startDate.trim() || startDate.length > 2)
    //         return updateError('Quá ngắn', setError)
    //     if (!endDate.trim() || endDate.length > 2)
    //         return updateError('Quá ngắn', setError)
    //     if (!range.trim() || range.length <= 2)
    //         return updateError('Quá ngắn', setError)
    //     if (!price.trim() || price.length > 4)
    //         return updateError('Quá ngắn', setError)

    //     return true
    // }

    // const onPostPress = () => {
    //     if (isValidForm()) {
    //         console.log(tour)
    //     }
    // }

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

                    <>
                        <CustomInput
                            placeholder="Tiêu đề bài viết"
                            iconName='label'
                            value={title}
                            onChangeText={text => setTitle(text)}
                        />
                        <CustomInput
                            placeholder="Email"
                            iconName='email'
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <CustomInput
                            placeholder="Phone"
                            iconName='phone'
                            value={phone}
                            keyboardType="number-pad"
                            onChangeText={text => setPhone(text)}
                        />
                        <CustomInput
                            placeholder="Chọn ngày đi"
                            iconName='today'
                            value={startDate}
                            onChangeText={text => setStartDate(text)}
                        />
                        <CustomInput
                            placeholder="Chọn ngày về"
                            iconName='today'
                            value={endDate}
                            onChangeText={text => setEndDate(text)}
                        />
                        <CustomInput
                            placeholder="Độ dài chuyến đi"
                            iconName='date-range'
                            value={range}
                            onChangeText={text => setRange(text)}
                        />
                        <CustomInput
                            placeholder="Địa điểm khởi hành"
                            iconName='place'
                            value={place}
                            onChangeText={text => setPlace(text)}
                        />
                        <CustomInput
                            placeholder="Thành phố"
                            iconName='place'
                            value={city}
                            onChangeText={text => setCity(text)}
                        />

                        <CustomInput
                            placeholder="Tour thiên nhiên, Tour biển, Tour gia đình, Tour tham quan,"
                            iconName='view-list'
                            value={tags}
                            onChangeText={text => setTags(text.split(', '))}
                        />

                        <CustomInput
                            placeholder="Giá tour"
                            iconName='euro'
                            value={price}
                            onChangeText={text => setPrice(text)}
                        />

                        <View style={styles.action}>
                            <Icon name="source" color={COLORS.primary} size={20} />
                            <Box alignItems="flex-start" w="100%" ml={3}>
                                <TextArea h={40} placeholder="Thông tin địa điểm" w="500" maxW="300" value={content} onChangeText={text => setContent(text)}
                                />
                            </Box>

                        </View>

                        <CustomInput
                            placeholder="Lịch trình tour"
                            iconName='flag'
                            onChangeText={text => setSchedule(text)}
                            value={schedule}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <CustomButton
                                text='Đăng bài'
                                type='Primary'
                                widthBtn='80%'
                                onPress={() => submitPost()} />

                        </View>
                    </>


                </SafeAreaView>
            </ScrollView>
        </NativeBaseProvider >
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
