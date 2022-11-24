import React, { useState, useEffect, useCallback } from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    TextInput,
    Text,
    ScrollView,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Pressable,
    RefreshControl,
} from "react-native";
import COLORS from "../../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import places from "../../../consts/places";
import axiosClient from "../../../api/client";

const { width } = Dimensions.get("screen");
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const TourScreen = ({ navigation }) => {
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

    const tourCategories = [
        {
            id: 1,
            name: "Tour thiên nhiên",
        },
        {
            id: 2,
            name: "Tour biển",
        },
        {
            id: 3,
            name: "Tour tham quan",
        },
        {
            id: 4,
            name: "Tour gia đình",
        },
    ];

    const [selected, setSelected] = useState(0);

    const handleClick = (id) => {
        setSelected(id);
        // navigation.goBack()
    };

    // Chọn theo tag
    const TourTopicList = ({ item }) => {
        return (
            <View key={item.id} style={styles.categoryContainer}>
                <Pressable
                    activeOpacity={0.8}
                    onPress={() => handleClick(item.id)}
                >
                    <View
                        style={{
                            ...styles.tourList,
                            backgroundColor:
                                selected === item.id
                                    ? COLORS.orange
                                    : COLORS.primary,
                        }}
                    >
                        <Text>{item.name}</Text>
                    </View>
                </Pressable>
            </View>
        );
    };

    // Card info
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
                                {/* <Icon name='star' size={20} color={COLORS.white} />
                                <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                    5.0
                                </Text> */}
                                <Icon
                                    name="edit"
                                    size={28}
                                    color={COLORS.white}
                                    onPress={() =>
                                        navigation.navigate("EditTour", post)
                                    }
                                />
                                <Icon
                                    name="delete"
                                    size={28}
                                    color={COLORS.white}
                                    onPress={() => handleDelete(post._id)}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.details}>
                        <Text style={[styles.textDetails, styles.tourName]}>
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
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />
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
            <View style={styles.inputContainer}>
                <Icon name="search" size={24} />
                <TextInput
                    placeholder="Tìm kiếm"
                    style={{ color: COLORS.grey, paddingLeft: 5 }}
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
                <Text style={styles.sectionTitle}>
                    Vị trí hiện tại của bạn: Ninh Kiều
                </Text>

                <View>
                    <FlatList
                        snapToAlignment={width - 20}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={tourCategories}
                        renderItem={({ item }) => <TourTopicList item={item} />}
                        keyExtractor={(item) => item.key}
                    />
                </View>

                <View style={{ marginTop: 20 }}>
                    {/* <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <Card place={item} />}
                    /> */}
                    <FlatList
                        snapToAlignment={width - 20}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={filter}
                        renderItem={({ item }) => {
                            return <Card post={item} />;
                        }}
                        keyExtractor={(post) => {
                            post._id;
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TourScreen;

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
        height: 50,
        width: "88%",
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: "absolute",
        top: 70,
        flexDirection: "row",
        paddingLeft: 20,
        marginHorizontal: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    sectionTitle: {
        paddingVertical: 15,
        marginHorizontal: 20,
        marginTop: 50,
    },
    categoryContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    tourList: {
        height: 40,
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: "hidden",
        borderRadius: 10,
    },
    details: {
        width: width - 200,
        marginTop: 10,
    },
    tourName: {
        overflow: "hidden",
        height: 20,
        color: "#666666",
    },
    textDetails: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
