import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, TextInput, Text, ScrollView, FlatList, Button, Platform } from "react-native"
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomTheme from '../../consts/CustomTheme'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { NativeBaseProvider, Select, Center, Box, CheckIcon, HStack, Stack } from 'native-base'

import CustomButton from '../../consts/CustomButton'

const HotelScreen = ({ navigation }) => {

    const [service, setService] = React.useState("")

    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [text, setText] = useState('')

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();

        let tempDate = new Date(date)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        setText(fDate)

    };

    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1, }}>
                <StatusBar translucent={false} backgroundColor={COLORS.white} />
                <View style={styles.header}>
                    <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                    <Text>Xin chào, Anh Thư</Text>
                    <Icon name='notifications-none' size={24} color={COLORS.white} />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.bookRoom}>
                        <Text style={styles.sectionTitle}>Vị trí hiện tại của bạn: Ninh Kiều</Text>

                        <View style={styles.search}>
                            <Icon name='search' size={24} />
                            <TextInput
                                placeholder="Gần chỗ tôi"
                                style={{ color: COLORS.grey, paddingLeft: 5 }} />
                        </View>


                        <View style={styles.dateContainer}>
                            <View>
                                <CustomButton value='nhan' text="Ngày nhận phòng" type='Primary' widthBtn='100%' onPress={showDatePicker} />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    datePickerModeAndroid='spinner'
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                            <View>
                                <CustomButton name='tra' text="Ngày trả phòng" type='Primary' widthBtn='100%' onPress={showDatePicker} />
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </View>

                        <View style={styles.dateContainer}>
                            <Text value='nhan'>{text}</Text>
                            <Text value='tra'>{text}</Text>
                        </View>

                        <View>
                            <Center>
                                <Box maxW="400" >
                                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Chọn loại phòng" placeholder="Chọn loại phòng" _selectedItem={{
                                        bg: "amber.500",
                                        endIcon: <CheckIcon size="4" />
                                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                        <Select.Item label="Phòng giường đơn" value="ux" />
                                        <Select.Item label="Phòng giường đôi" value="web" />
                                        <Select.Item label="Phòng có giường em bé" value="ui" />
                                        <Select.Item label="Village" value="cross" />
                                        <Select.Item label="Homestay" value="backend" />
                                    </Select>
                                </Box>
                            </Center>
                        </View>

                        <View>
                            <HStack direction="row" justifyContent='space-between' m='1.5'>
                                <Stack>
                                        <Select selectedValue={service} minWidth="105" accessibilityLabel="Số lượng khách" placeholder="Số lượng khách" _selectedItem={{
                                            bg: "amber.500",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                            <Select.Item label="1" value="1" />
                                            <Select.Item label="2" value="2" />
                                            <Select.Item label="3" value="3" />
                                            <Select.Item label="4" value="4" />
                                            <Select.Item label="5" value="5" />
                                            <Select.Item label="Khác" value="Khác" />
                                        </Select>
                                </Stack>
                                <Stack>
                                        <Select selectedValue={service} minWidth="105" accessibilityLabel="Số lượng phòng" placeholder="Số lượng phòng" _selectedItem={{
                                            bg: "amber.500",
                                            endIcon: <CheckIcon size="4" />
                                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                            <Select.Item label="1" value="1" />
                                            <Select.Item label="2" value="2" />
                                            <Select.Item label="3" value="3" />
                                            <Select.Item label="4" value="4" />
                                            <Select.Item label="5" value="5" />
                                            <Select.Item label="Khác" value="Khác" />
                                        </Select>
                                </Stack>
                            </HStack>
                        </View>



                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <CustomButton
                                text='Tìm kiếm'
                                type='Primary'
                                widthBtn='50%'
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >

        </NativeBaseProvider >
    )
}

export default HotelScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23,
    },
    bookRoom: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'stretch',
    },
    sectionTitle: {
        paddingVertical: 15,
    },
    search: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    dateContainer: {
        // height: 50,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
})