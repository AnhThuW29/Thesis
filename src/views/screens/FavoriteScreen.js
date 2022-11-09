import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, StyleSheet, FlatList, ImageBackground, Dimensions, ActivityIndicator, TouchableOpacity, Button, ScrollView } from "react-native"
import COLORS from "../../consts/colors"
import Icon from "react-native-vector-icons/MaterialIcons"
import places from '../../consts/places'
import axios from "axios"

import image from '../../assets/avatar.jpg'

const { width } = Dimensions.get('screen')


const FavoriteScreen = ({ navigation }) => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        const getPost = async () => {
            await axios.get('http://10.10.35.106:8000/api/post/latest-posts')
                .then(post => {
                    setPost(post.data);
                })
                .catch((err) => {
                    console.log("LOI: ", err);
                })
        }
        getPost()
    }, [])

    const RenderItem = () => {
        return (
            <View>
                {posts.map((post, index) => (
                    <View key={index}>
                        <TouchableOpacity>
                            <ImageBackground
                                style={styles.cardImage}
                                source={image}>

                                <Text style={{
                                    color: COLORS.white,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                }}>
                                    {post.title}
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
                                            {post.content}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' size={20} color={COLORS.white} />
                                        <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                            5.0
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                ))}
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                <Text>Xin chào, Anh Thư </Text>
                <Icon name='notifications-none' size={24} color={COLORS.white} />
            </View>

            <View style={{ marginTop: 20 }}>
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={posts}
                    renderItem={({ item }) => {
                        return (
                            <RenderItem post = {item} key={item._id}/>
                        )
                    }}
                    keyExtractor={post => { post._id }}
                />
            </View>

            {/* <RenderItem /> */}

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
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    details: {
        width: width - 200,
        marginTop: 10,
    },
    textDetails: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})