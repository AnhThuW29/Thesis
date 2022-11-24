import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    ToastAndroid,
} from "react-native";
import {
    NativeBaseProvider,
    Box,
    TextArea,
    useToast,
    Center,
    Select,
    CheckIcon,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
// import CustomTheme from '../../../consts/CustomTheme'
import COLORS from "../../../consts/colors";
import CustomInput from "../../../consts/CustomInput";
import CustomButton from "../../../consts/CustomButton";
import axiosClient from "../../../api/client";

import { isValidEmail } from "../../../utils/methods";

const EditTour = ({ navigation, route }) => {
    const post = route.params;

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [place, setPlace] = useState(post.place);
    const [city, setCity] = useState(post.city);
    const [email, setEmail] = useState(post.email);
    const [phone, setPhone] = useState(post.phone);
    const [startDate, setStartDate] = useState(post.startDate);
    const [endDate, setEndDate] = useState(post.endDate);
    const [range, setRange] = useState(post.range);
    const [price, setPrice] = useState(post.price);
    const [tags, setTags] = useState(post.tags);
    const [schedule, setSchedule] = useState(post.schedule);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     console.log("POST: ", post._id);
    // });

    const showToast = (msg) => {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    };

    const UpdatePost = async () => {
        // if (title.length < 5) {
        //     showToast("Tiêu đề không được ngắn hơn 5 ký tự!")
        //     return
        // }

        // if (content.length < 5) {
        //     showToast("Nội dung không được ngắn hơn 5 ký tự!")
        //     return
        // }

        if (!isValidEmail(email)) {
            showToast("Email không hợp lệ");
            return;
        }

        const getUpdate = async (id) => {
            await axiosClient
                .put(`/tour-post/update/${id}`, {
                    title,
                    content,
                    place,
                    city,
                    price,
                    tags,
                    email,
                    phone,
                    startDate,
                    endDate,
                    range,
                    schedule,
                })
                .then((res) => {
                    setPosts([res.data], ...posts);
                    navigation.navigate("FavoriteScreen");
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUpdate(post._id);
    };

    return (
        <NativeBaseProvider>
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={COLORS.white}
                    />
                    <View style={styles.header}>
                        <Icon
                            name="arrow-back-ios"
                            size={24}
                            color={COLORS.white}
                            onPress={navigation.goBack}
                        />
                        <Text>Xin chào, Anh Thư</Text>
                        <Icon
                            name="notifications-none"
                            size={24}
                            color={COLORS.white}
                        />
                    </View>

                    <>
                        <CustomInput
                            placeholder="Tiêu đề bài viết"
                            iconName="label"
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                        <CustomInput
                            placeholder="Email"
                            iconName="email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <CustomInput
                            placeholder="Số điện thoại"
                            iconName="phone"
                            value={JSON.stringify(phone)}
                            keyboardType="number-pad"
                            onChangeText={(text) => setPhone(text)}
                        />
                        <CustomInput
                            placeholder="Chọn ngày đi"
                            iconName="today"
                            value={startDate}
                            onChangeText={(text) => setStartDate(text)}
                        />
                        <CustomInput
                            placeholder="Chọn ngày về"
                            iconName="today"
                            value={endDate}
                            onChangeText={(text) => setEndDate(text)}
                        />
                        <CustomInput
                            placeholder="Độ dài chuyến đi"
                            iconName="date-range"
                            value={JSON.stringify(range)}
                            onChangeText={(text) => setRange(text)}
                        />
                        <CustomInput
                            placeholder="Địa điểm khởi hành"
                            iconName="place"
                            value={place}
                            onChangeText={(text) => setPlace(text)}
                        />
                        <CustomInput
                            placeholder="Thành phố"
                            iconName="place"
                            value={city}
                            onChangeText={(text) => setCity(text)}
                        />

                        <CustomInput
                            placeholder="Tour thiên nhiên, Tour biển, Tour gia đình, Tour tham quan,"
                            iconName="view-list"
                            value={String(tags)}
                            onChangeText={(text) => setTags(text.split(", "))}
                        />

                        <CustomInput
                            placeholder="Giá tour"
                            iconName="euro"
                            value={price}
                            onChangeText={(text) => setPrice(text)}
                        />

                        <View style={styles.action}>
                            <Icon
                                name="source"
                                color={COLORS.primary}
                                size={20}
                            />
                            <Box alignItems="flex-start" w="100%" ml={3}>
                                <TextArea
                                    h={40}
                                    placeholder="Thông tin địa điểm"
                                    w="500"
                                    maxW="300"
                                    value={content}
                                    onChangeText={(text) => setContent(text)}
                                />
                            </Box>
                        </View>

                        <CustomInput
                            placeholder="Lịch trình tour"
                            iconName="flag"
                            onChangeText={(text) => setSchedule(text)}
                            value={schedule}
                        />
                        <View style={{ alignItems: "center" }}>
                            <CustomButton
                                text="Cập nhật"
                                type="Primary"
                                widthBtn="80%"
                                onPress={() => UpdatePost()}
                            />
                        </View>
                    </>
                </SafeAreaView>
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default EditTour;

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.primary,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: COLORS.orange,
        alignItems: "center",
        marginTop: 10,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        backgroundColor: COLORS.white,
    },
    actionError: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -5,
        paddingLeft: 10,
        color: "#05375a",
        fontSize: 16,
    },
});
