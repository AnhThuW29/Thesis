import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, ImageBackground, Dimensions, TextInput, TouchableOpacity, Button, ScrollView, StatusBar } from "react-native"
import COLORS from "../../consts/colors"
import Icon from "react-native-vector-icons/MaterialIcons"
import places from '../../consts/places'
import axios from "axios"
import EditTour from './Tour/EditTour'

import image from '../../assets/avatar.jpg'
import axiosClient from "../../api/client"

const { width } = Dimensions.get('screen')


const FavoriteScreen = ({ navigation }) => {


    const [posts, setPost] = useState([])
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState()

    useEffect(() => {
        axiosClient.get('/tour-post/latest-posts')
            .then(res => {
                setPost(res.data)
                setFilter(res.data)
            })
            .catch((err) => {
                console.log("LOI: ", err);
            })
    }, [])

    // const handleUpdate = (postId) => {
    //     axiosClient.delete(`/tour-post/${postId}`)
    //         .then(res => {
    //             console.log('ok')
    //             set
    //         })
    // }

    const handleDelete = (postId) => {
        axiosClient.delete(`/tour-post/${postId}`)
            .then(res => {
                console.log('ok')
                setPost(res.data)
            })
            .catch((err) => {
                console.log("LOI: ", err);
            })

    }


    const RenderItem = ({ post, index }) => {
        return (
            <View key={index} style={{ marginVertical: 20 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                // onPress={() => navigation.navigate('')}
                >
                    <ImageBackground
                        style={styles.cardImage}
                        source={image}>

                        <Text style={{
                            color: COLORS.white,
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginTop: 10,
                        }}>
                            {post.place}
                        </Text>
                        <View style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='place' size={20} color={COLORS.white} />
                                <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                    {post.city}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 80 }}>
                                {/* <Icon name='star' size={20} color={COLORS.white} />
                                <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                    5.0
                                </Text> */}
                                <Icon
                                    name='edit'
                                    size={28}
                                    color={COLORS.white}
                                    onPress={() => navigation.navigate('EditTour')}
                                />
                                <Icon
                                    name='delete'
                                    size={28}
                                    color={COLORS.white}
                                    onPress={() => handleDelete(post._id)}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.details}>
                        <Text style={[styles.textDetails, styles.tourName]}>{post.title}</Text>
                        <Text style={[styles.textDetails, { color: COLORS.orange }]}>{post.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = setPost.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setFilter(newData)
            setSearch(text)
        }
        else {
            setFilter(posts)
            setSearch(text)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />

            <View style={styles.header}>
                <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                <Text>Xin chào, Anh Thư </Text>
                <Icon name='notifications-none' size={24} color={COLORS.white} />
            </View>

            <View style={styles.inputContainer}>
                <Icon name='search' size={24} />
                <TextInput
                    placeholder="Tìm kiếm"
                    style={{ color: COLORS.grey, paddingLeft: 5 }}
                    onChangeText={text => searchFilter(text)}
                />
            </View>

            <View style={styles.dataContainer}>
                <FlatList
                    snapToAlignment={width - 20}
                    contentContainerStyle={{ paddingLeft: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={posts}
                    renderItem={({ item }) => {
                        return (
                            <RenderItem post={item} />
                        )
                    }}
                    keyExtractor={post => { post._id }}
                />
            </View>

        </SafeAreaView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    inputContainer: {
        height: 50,
        width: '88%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 70,
        flexDirection: 'row',
        paddingLeft: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    dataContainer: {
        marginTop: 60,
    },
    cardImage: {
        height: 200,
        width: width - 40,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    details: {
        width: width - 50,
        marginTop: 10,
    },
    tourName: {
        overflow: 'hidden',
        height: 28,
        color: '#666666',
    },
    textDetails: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})