import React, { useState, useEffect, useCallback } from "react";
import {
    SafeAreaView,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text,
    Dimensions,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Button,
    RefreshControl,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import places from "../../consts/places";
import CustomIcon from "../../consts/CustomIcon";
// import Card from '../../components/card'

import DetailsScreen from "../screens/DetailsScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TourScreen from "./Tour/TourScreen";
import HotelScreen from "./Hotel/HotelScreen";
import FavoriteScreen from "./FavoriteScreen";
import axiosClient from "../../api/client";

const { width } = Dimensions.get("screen");

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
    const [posts, setPost] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        axiosClient
            .get("/tour-post/latest-posts")
            .then((res) => {
                setPost(res.data);
                setFilter(res.data);
            })
            .catch((err) => {
                console.log("LOI: ", err);
            });
    }, []);

    const ListCategories = () => {
        return (
            <View style={styles.categoryContainer}>
                <CustomIcon
                    key="tour"
                    iconName="beach-access"
                    text="Tour"
                    onPress={() => navigation.navigate("TourScreen")}
                />
                <CustomIcon
                    key="hotel"
                    iconName="apartment"
                    text="Khách sạn"
                    onPress={() => navigation.navigate("HotelScreen")}
                />
                <CustomIcon
                    key="favorite"
                    iconName="favorite"
                    text="Yêu thích"
                    onPress={() => navigation.navigate("FavoriteScreen")}
                />
                <CustomIcon
                    key="map"
                    iconName="place"
                    text="Bản đồ"
                    //onPress={() => navigation.navigate('Map')}
                />
            </View>
        );
    };

    // const Card = ({ place }) => {
    //     return (
    //         <TouchableOpacity
    //             activeOpacity={0.8}
    //             onPress={() => navigation.navigate('DetailsScreen', place)}
    //         >
    //             <ImageBackground
    //                 style={style.cardImage}
    //                 source={place.image}>
    //                 <Text style={{
    //                     color: COLORS.white,
    //                     fontSize: 20,
    //                     fontWeight: 'bold',
    //                     marginTop: 10,
    //                 }}>
    //                     {place.name}
    //                 </Text>
    //                 <View style={{
    //                     flex: 1,
    //                     justifyContent: 'space-between',
    //                     flexDirection: 'row',
    //                     alignItems: 'flex-end'
    //                 }}>
    //                     <View style={{ flexDirection: 'row' }}>
    //                         <Icon name='place' size={20} color={COLORS.white} />
    //                         <Text style={{ marginLeft: 5, color: COLORS.white }}>
    //                             {place.location}
    //                         </Text>
    //                     </View>
    //                     <View style={{ flexDirection: 'row' }}>
    //                         <Icon name='star' size={20} color={COLORS.white} />
    //                         <Text style={{ marginLeft: 5, color: COLORS.white }}>
    //                             5.0
    //                         </Text>
    //                     </View>
    //                 </View>
    //             </ImageBackground>
    //         </TouchableOpacity>
    //     )
    // }

    const Card = ({ post, index }) => {
        return (
            <View key={index} style={{ marginVertical: 20 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                        navigation.navigate("DetailsScreen", {
                            post,
                        })
                    }
                >
                    <ImageBackground
                        style={styles.cardImage}
                        source={{ uri: post.thumbnail.url }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                fontSize: 22,
                                fontWeight: "bold",
                                marginTop: 10,
                            }}
                        >
                            {post.place}
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignItems: "flex-end",
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <Icon
                                    name="place"
                                    size={20}
                                    color={COLORS.white}
                                />
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: COLORS.white,
                                    }}
                                >
                                    {post.city}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    width: 80,
                                }}
                            >
                                <Icon
                                    name="star"
                                    size={20}
                                    color={COLORS.white}
                                />
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: COLORS.white,
                                    }}
                                >
                                    5.0
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.details}>
                        <Text
                            style={[styles.textDetails, styles.tourName]}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                        >
                            {post.title}
                        </Text>
                        <Text
                            style={[
                                styles.textDetails,
                                { color: COLORS.orange },
                            ]}
                        >
                            {post.price}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    // const RecommendedCard = ({ place }) => {
    //     return (
    //         <TouchableOpacity
    //             activeOpacity={0.8}
    //             onPress={() => navigation.navigate("DetailsScreen", place)}
    //         >
    //             <ImageBackground
    //                 style={styles.rmCardIamge}
    //                 source={place.image}
    //             >
    //                 <Text
    //                     style={{
    //                         color: COLORS.white,
    //                         fontSize: 22,
    //                         fontWeight: "bold",
    //                         marginTop: 10,
    //                     }}
    //                 >
    //                     {place.name}
    //                 </Text>
    //                 <View
    //                     style={{
    //                         flex: 1,
    //                         justifyContent: "space-between",
    //                         //alignItems: 'flex-end'
    //                     }}
    //                 >
    //                     <View
    //                         style={{
    //                             width: "100%",
    //                             flexDirection: "row",
    //                             marginTop: 10,
    //                         }}
    //                     >
    //                         <View style={{ flexDirection: "row" }}>
    //                             <Icon
    //                                 name="place"
    //                                 size={22}
    //                                 color={COLORS.white}
    //                             />
    //                             <Text style={{ color: COLORS.white }}>
    //                                 {place.location}
    //                             </Text>
    //                         </View>

    //                         <View style={{ flexDirection: "row" }}>
    //                             <Icon
    //                                 name="star"
    //                                 size={22}
    //                                 color={COLORS.white}
    //                             />
    //                             <Text style={{ color: COLORS.white }}>5.0</Text>
    //                         </View>
    //                     </View>

    //                     <Text
    //                         style={{
    //                             height: 30,
    //                             overflow: "hidden",
    //                             color: COLORS.white,
    //                             fontSize: 13,
    //                         }}
    //                     >
    //                         {place.details}
    //                     </Text>
    //                 </View>
    //             </ImageBackground>
    //         </TouchableOpacity>
    //     );
    // };

    // Search
    const searchFilter = (text) => {
        if (text) {
            const newData = posts.filter((item) => {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilter(newData);
            setSearch(text);
        } else {
            setFilter(posts);
            setSearch(text);
        }
    };

    // Refresh
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <Icon name="sort" size={28} color={COLORS.white} />
                <Icon
                    name="notifications-none"
                    size={28}
                    color={COLORS.white}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 120,
                        paddingHorizontal: 20,
                    }}
                >
                    <View>
                        <Text style={styles.headerTitle}>Cùng khám phá</Text>
                        <Text style={styles.headerTitle}>
                            top địa điểm ở Việt Nam
                        </Text>
                        <View style={styles.inputContainer}>
                            <Icon name="search" size={28} />
                            <TextInput
                                placeholder="Tìm kiếm"
                                style={{ color: COLORS.grey }}
                                onChangeText={(text) => searchFilter(text)}
                            />
                        </View>
                    </View>
                </View>

                <ListCategories />

                <Text style={styles.sectionTitle}>Địa điểm yêu thích</Text>

                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={filter}
                        // renderItem={({ item }) => <Card place={item} />}
                        renderItem={({ item }) => {
                            return <Card post={item} />;
                        }}
                        keyExtractor={(post) => {
                            post._id;
                        }}
                    />
                    {/* <Text style={styles.sectionTitle}>Tham khảo</Text>
                    <FlatList
                        snapToAlignment={width - 20}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => (
                            <RecommendedCard place={item} />
                        )}
                    /> */}
                </View>

                {/* <SignUpScreen /> */}
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 23,
    },

    inputContainer: {
        height: 60,
        width: "100%",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: "absolute",
        top: 90,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainer: {
        height: 70,
        width: 70,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textIcon: {
        fontSize: 10,
        paddingTop: 5,
    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: "bold",
        fontSize: 20,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: "hidden",
        borderRadius: 10,
    },
    rmCardIamge: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: "hidden",
        padding: 10,
    },
    details: {
        width: width - 200,
        marginTop: 10,
    },
    textDetails: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
