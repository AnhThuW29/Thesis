import React from "react"
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, ImageBackground, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import COLORS from '../../consts/colors'
import Avt from '../../assets/avatar.jpg'

const imgWidth = Dimensions.get('screen').width * 0.33333

const AccountScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bg}>
                </View>

                <View style={styles.profileContainer}>

                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={Avt}
                            resizeMode='contain' />
                    </View>


                    <View style={styles.nameAndBioView}>
                        <Text style={styles.userFullName}>{'Anh Thư'}</Text>
                        <Text style={styles.userBio}>{'I\'m doing the thesis'}</Text>
                    </View>

                    <View style={styles.countsView}>
                        <View style={styles.countView}>
                            <Text style={{fontSize: 16}}>13</Text>
                            <Text style={{color: '#ccc'}}>Bài viết</Text>
                        </View>
                        <View style={styles.countView}>
                            <Text style={{fontSize: 16}}>1246</Text>
                            <Text style={{color: '#ccc'}}>Followers</Text>
                        </View>
                        <View style={styles.countView}>
                            <Text style={{fontSize: 16}}>348</Text>
                            <Text style={{color: '#ccc'}}>Following</Text>
                        </View>
                    </View>

                    <View style={styles.interactButtonsView}>
                        <TouchableOpacity style={styles.interactButton}>
                            <Text style={styles.interactButtonText}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                ...styles.interactButton,
                                backgroundColor: 'white',
                                borderWidth: 2,
                                borderColor: COLORS.primary,
                            }}
                        >
                            <Text
                                style={{ ...styles.interactButtonText, color: '#333' }}
                            >
                                Chat
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <View style={styles.profileContentButtonsView}>
                            <TouchableWithoutFeedback>
                                <View style={styles.showContentButton}>
                                    <Text style={styles.showContentButtonText}>Bài viết</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.showContentButton}>
                                    <Text style={styles.showContentButtonText}>Trạng thái</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.showContentButton}>
                                    <Text style={styles.showContentButtonText}>Lịch sử</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    bg: {
        height: 300,
        width: '100%',
        backgroundColor: '#d2e4ed',
    },
    profileContainer: {
        backgroundColor: '#fff',
        marginTop: -100,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: -60
    },
    image: {
        width: imgWidth,
        height: imgWidth,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff'
    },
    nameAndBioView: {
        alignItems: 'center',
        marginTop: 10,
    },
    userFullName: {
        fontSize: 26,
    },
    userBio: {
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#333',
        marginTop: 4,
    },
    countsView: {
        flexDirection: 'row',
        marginTop: 20
    },
    countView: {
        flex: 1,
        alignItems: 'center'
    },
    interactButtonsView: {
        flexDirection: 'row',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    interactButton: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        margin: 5,
        borderRadius: 4,
    },
    interactButtonText: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 6,
    },
    profileContentButtonsView: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: '#f1f3f6',
    },
    showContentButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderColor: '#f1f3f6',
        borderBottomWidth: 2,

    },
    showContentButtonText: {
        fontSize: 14,
    },
})