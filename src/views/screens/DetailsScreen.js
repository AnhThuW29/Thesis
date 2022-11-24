import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    ImageBackground,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/HomeScreen";
import EditTour from "./Tour/EditTour";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import Places from "../../consts/places";
import axiosClient from "../../api/client";

const DetailsScreen = ({ navigation, route }) => {
    const post = route.params;
    const [product, setProduct] = useState(post);
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener("focus", () => {
    //         getDataFromDB();
    //     });

    //     return unsubscribe;
    // }, [navigation]);

    //get product data by productID
    // const getDataFromDB = async () => {
    //     for (let index = 0; index < Places.length; index++) {
    //         if (Places[index].id == product.id) {
    //             await setProduct(Places[index]);
    //             return;
    //         }
    //     }
    // };

    //add to cart

    // const addToCart = async (id) => {
    //     let itemArray = await AsyncStorage.getItem("cartItems");
    //     itemArray = JSON.parse(itemArray);
    //     if (itemArray) {
    //         let array = itemArray;
    //         array.push(id);

    //         try {
    //             await AsyncStorage.setItem("cartItems", JSON.stringify(array));
    //             ToastAndroid.show(
    //                 "Item Added Successfully to cart",
    //                 ToastAndroid.SHORT
    //             );
    //             navigation.navigate("HomeScreen");
    //         } catch (error) {
    //             return error;
    //         }
    //     } else {
    //         let array = [];
    //         array.push(id);
    //         try {
    //             await AsyncStorage.setItem("cartItems", JSON.stringify(array));
    //             ToastAndroid.show(
    //                 "Item Added Successfully to cart",
    //                 ToastAndroid.SHORT
    //             );
    //             navigation.navigate("HomeScreen");
    //         } catch (error) {
    //             return error;
    //         }
    //     }
    // };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "COLORS.white" }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    style={{ width: "100%", height: 400 }}
                    source={{ uri: product.post.thumbnail.url }}
                >
                    <View style={styles.header}>
                        <Icon
                            name="arrow-back-ios"
                            size={28}
                            color={COLORS.white}
                            onPress={navigation.goBack}
                        />
                        <Icon name="more-vert" size={28} color={COLORS.white} />
                    </View>

                    <View style={styles.imageDetails}>
                        <Text
                            style={{
                                width: "70%",
                                fontSize: 30,
                                fontWeight: "bold",
                                color: COLORS.white,
                                marginBottom: 20,
                            }}
                        >
                            {product.post.title}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="star" size={30} color={COLORS.orange} />
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: "bold",
                                    fontSize: 20,
                                }}
                            >
                                5.0
                            </Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.detailsContainer}>
                    <View style={{ flex: 0.4, bottom: 25 }}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="favorite"
                                size={30}
                                color={COLORS.gray}
                            />
                        </View>
                        <View style={{ flexDirection: "row", top: 10 }}>
                            <Icon
                                name="place"
                                size={28}
                                color={COLORS.primary}
                            />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: COLORS.primary,
                                }}
                            >
                                {product.post.city}
                            </Text>
                        </View>
                        {/* <Text style={{ marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>
                            Giới thiệu
                        </Text> */}
                    </View>
                    <ScrollView style={{ flex: 0.6, top: 10 }}>
                        <View style={styles.info}>
                            <View style={styles.infoDate}>
                                <Icon
                                    name="today"
                                    color={COLORS.primary}
                                    size={20}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    Ngày đi: {product.post.startDate}
                                </Text>
                            </View>
                            <View style={styles.infoDate}>
                                <Icon
                                    name="today"
                                    color={COLORS.primary}
                                    size={20}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    Ngày về: {product.post.endDate}{" "}
                                </Text>
                            </View>
                            <View style={styles.infoDate}>
                                <Icon
                                    name="date-range"
                                    color={COLORS.primary}
                                    size={20}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    Độ dài: {product.post.range}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <Text
                                style={{
                                    marginVertical: 20,
                                    fontWeight: "bold",
                                    fontSize: 20,
                                }}
                            >
                                Giới thiệu
                            </Text>
                            <Text style={{ lineHeight: 22 }}>
                                {product.post.content}
                            </Text>
                        </View>

                        <View style={styles.info}>
                            <Text
                                style={{
                                    marginVertical: 20,
                                    fontWeight: "bold",
                                    fontSize: 20,
                                }}
                            >
                                Lịch trình tour
                            </Text>
                            <Text style={{ lineHeight: 22 }}>
                                {product.post.schedule}
                            </Text>
                        </View>

                        <View style={styles.info}>
                            <Text
                                style={{
                                    marginVertical: 20,
                                    fontWeight: "bold",
                                    fontSize: 20,
                                }}
                            >
                                Thông tin liên lạc
                            </Text>
                            <View style={styles.infoDate}>
                                <Icon
                                    name="email"
                                    color={COLORS.primary}
                                    size={20}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    Email: {product.post.email}
                                </Text>
                            </View>
                            <View style={styles.infoDate}>
                                <Icon
                                    name="phone"
                                    color={COLORS.primary}
                                    size={20}
                                />
                                <Text style={{ marginLeft: 5 }}>
                                    Số điện thoại: {product.post.phone}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

            {/* <View style={styles.footer}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            color: COLORS.white,
                        }}
                    >
                        {product.post.price} / Tour
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.btnBookNow}
                    onPress={() => addToCart(product.id)}
                >
                    <Text
                        style={{
                            color: COLORS.primary,
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        Thêm vào giỏ hàng
                    </Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
    // return <></>;
};
export default DetailsScreen;

const styles = StyleSheet.create({
    btnBookNow: {
        height: 40,
        width: 160,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        height: 60,
        width: 60,
        position: "absolute",
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    imageDetails: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        bottom: 30,
    },
    footer: {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    info: {
        marginVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#f2f2f2",
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    infoDate: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#f2f2f2',
        // paddingBottom: 5,
    },
});
