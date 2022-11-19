import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ToastAndroid,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import COLORS from '../../consts/colors'
import Items from '../../consts/places'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MyCart = ({ navigation }) => {

    const [product, setProduct] = useState();
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    //get data from local DB by ID
    const getDataFromDB = async () => {
        let items = await AsyncStorage.getItem('cartItems');
        items = JSON.parse(items);
        let productData = [];
        if (items) {
            Items.forEach(data => {
                if (items.includes(data.id)) {
                    productData.push(data);
                    return;
                }
            });
            setProduct(productData);
            getTotal(productData);
        } else {
            setProduct(false);
            getTotal(false);
        }
    };

    //get total price of all items in the cart
    const getTotal = (productData) => {
        let total = 0;
        for (let index = 0; index < productData.length; index++) {
            let productPrice = productData[index].price;
            total = total + productPrice;
        }
        setTotal(total);
    };

    //remove data from Cart
    const removeItemFromCart = async id => {
        let itemArray = await AsyncStorage.getItem('cartItems');
        itemArray = JSON.parse(itemArray);
        if (itemArray) {
            let array = itemArray;
            for (let index = 0; index < array.length; index++) {
                if (array[index] == id) {
                    array.splice(index, 1);
                }

                await AsyncStorage.setItem('cartItems', JSON.stringify(array));
                getDataFromDB();
            }
        }
    };

    //checkout
    const checkOut = async () => {
        try {
            await AsyncStorage.removeItem('cartItems');
        } catch (error) {
            return error;
        }

        ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

        navigation.navigate('HomeScreen');
    };

    const renderProducts = (data, index) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('DetailsScreen', { productID: data.id })}
                style={{
                    width: '100%',
                    height: 100,
                    marginVertical: 6,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        width: '30%',
                        height: 100,
                        padding: 14,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.light,
                        borderRadius: 10,
                        marginRight: 22,
                    }}>
                    <Image
                        source={data.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        height: '100%',
                        justifyContent: 'space-around',
                    }}>
                    <View style={{}}>
                        <Text
                            style={{
                                fontSize: 16,
                                maxWidth: '100%',
                                color: COLORS.black,
                                fontWeight: '600',
                                letterSpacing: 1,
                            }}>
                            {data.tourName}
                        </Text>
                        <View
                            style={{
                                marginTop: 4,
                                flexDirection: 'row',
                                alignItems: 'center',
                                opacity: 0.6,
                            }}>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    maxWidth: '85%',
                                    marginRight: 4,
                                }}>
                                {data.price} VNĐ
                            </Text>

                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    marginRight: 20,
                                    padding: 4,
                                    opacity: 0.5,
                                }}>
                                <Icon
                                    name="remove-circle-outline"
                                    style={{
                                        fontSize: 20,
                                        color: COLORS.orange,
                                    }}
                                />
                            </View>
                            <Text>1</Text>
                            <View
                                style={{
                                    marginLeft: 20,
                                    padding: 4,
                                    opacity: 0.5,
                                }}>
                                <Icon
                                    name="add-circle-outline"
                                    style={{
                                        fontSize: 20,
                                        color: COLORS.orange,
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
                            <Icon
                                name="delete"
                                style={{
                                    fontSize: 20,
                                    color: COLORS.orange,
                                    padding: 8,
                                    borderRadius: 100,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'COLORS.white' }}>
            <View style={styles.header}>
                <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                <Text style={styles.text}>Chi tiết đơn hàng</Text>
                <Icon name='notifications-none' size={24} color={COLORS.white} />
            </View>
            <ScrollView>
                <Text
                    style={{
                        fontSize: 20,
                        color: COLORS.black,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        paddingTop: 20,
                        paddingLeft: 16,
                        marginBottom: 10,
                    }}>
                    Giỏ hàng của tôi
                </Text>

                <View style={{ paddingHorizontal: 16 }}>
                    {product ? product.map(renderProducts) : null}
                </View>


                {/* Mã giảm giá */}

                <View
                    style={{
                        paddingHorizontal: 16,
                        marginVertical: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            color: COLORS.black,
                            fontWeight: 'bold',
                            letterSpacing: 1,
                            marginBottom: 20,
                        }}>
                        Mã giảm giá
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '80%',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    color: COLORS.blue,
                                    backgroundColor: COLORS.light,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 12,
                                    borderRadius: 10,
                                    marginRight: 18,
                                }}>
                                <Icon
                                    name="local-shipping"
                                    style={{
                                        fontSize: 18,
                                        color: COLORS.orange,
                                    }}
                                />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: COLORS.black,
                                        fontWeight: '500',
                                    }}>
                                    Mã giảm 100.000
                                </Text>
                                {/* <Text
                                    style={{
                                        fontSize: 12,
                                        color: COLORS.black,
                                        fontWeight: '400',
                                        lineHeight: 20,
                                        opacity: 0.5,
                                    }}>
                                    0162, Tbilisi
                                </Text> */}
                            </View>
                        </View>
                        <Icon
                            name="chevron-right"
                            style={{ fontSize: 22, color: COLORS.black }}
                        />
                    </View>
                </View>

                {/* Phương thức thanh toán */}
                <View
                    style={{
                        paddingHorizontal: 16,
                        marginVertical: 10,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: 'bold',
                            letterSpacing: 1,
                            marginBottom: 20,
                        }}>
                        Phương thức thanh toán
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '80%',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    color: COLORS.orange,
                                    backgroundColor: COLORS.light,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 12,
                                    borderRadius: 10,
                                    marginRight: 18,
                                }}>
                                <Text
                                    style={{
                                        fontSize: 10,
                                        fontWeight: '900',
                                        color: COLORS.orange,
                                        letterSpacing: 1,
                                    }}>
                                    VISA
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: COLORS.black,
                                        fontWeight: '500',
                                    }}>
                                    Visa Classic
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: COLORS.black,
                                        fontWeight: '400',
                                        lineHeight: 20,
                                        opacity: 0.5,
                                    }}>
                                    ****-9092
                                </Text>
                            </View>
                        </View>
                        <Icon
                            name="chevron-right"
                            style={{ fontSize: 22, color: COLORS.black }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        paddingHorizontal: 16,
                        marginTop: 40,
                        marginBottom: 80,
                    }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: COLORS.black,
                            fontWeight: '500',
                            letterSpacing: 1,
                            marginBottom: 20,
                        }}>
                        Order Info
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 8,
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                maxWidth: '80%',
                                color: COLORS.black,
                                opacity: 0.5,
                            }}>
                            Tạm tính
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                color: COLORS.black,
                                opacity: 0.8,
                            }}>
                            {total}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 22,
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                maxWidth: '80%',
                                // color: COLORS.black,
                                opacity: 0.5,
                            }}>
                            Mã giảm giá
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                // color: COLORS.black,
                                opacity: 0.8,
                            }}>
                            {total - 100.000}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: '400',
                                maxWidth: '80%',
                                color: COLORS.black,
                                opacity: 0.5,
                            }}>
                            Tổng hóa đơn
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                // color: COLORS.black,
                            }}>
                            {total + total - 100.000}
                        </Text>
                    </View>
                </View>




            </ScrollView>
            <View
                style={styles.footer}>
                <TouchableOpacity
                    onPress={() => (total != 0 ? checkOut() : null)}
                    style={styles.btnBookNow} >

                    <Text style={{
                        fontWeight: 'bold',
                        color: COLORS.white,
                        textTransform: 'uppercase',
                        letterSpacing: 1,

                    }}>
                        Thanh toán 
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MyCart

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    text: {
        fontSize: 18,
    },
    footer: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: '8%',
        width: '86%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft:30,
        borderRadius: 20,
    },
    btnBookNow: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        flexDirection: 'row',
    },
})