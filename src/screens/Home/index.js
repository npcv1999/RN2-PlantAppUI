import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
} from 'react-native';
import renderFriendsComponent from '../../components/Home/RenderListFriend';
import { COLORS, datas, FONTS, icons, images, SIZES } from '../../utils';
import { styles } from './styles';

const Home = ({ navigation }) => {
    const [data, setData] = useState(datas.plants);
    const [listFriend, setListFriend] = useState(datas.friends);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.viewItem}>
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.23,
                        height: '82%',
                        borderRadius: 15,
                    }}></Image>
                {/* Name */}

                <View style={styles.viewLabel}>
                    <Text style={styles.txtLabel}>{item.name}</Text>
                </View>
                {/* Heart */}

                <TouchableOpacity
                    style={styles.viewHeart}
                    onPress={() => navigation.navigate('Detail')}>
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                        resizeMode="contain"
                        style={{ width: 15, height: 15 }}></Image>
                </TouchableOpacity>
            </View>
        );
    };

    console.log('dadada', data);
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* New item */}
                <View style={styles.viewNew}>
                    <View style={styles.viewNewInside}>
                        {/* Contents */}

                        <View style={styles.viewHeader}>
                            {/* Header */}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={styles.txtHeader}>New Plants</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                    <Image
                                        source={icons.focus}
                                        resizeMode="contain"
                                        style={{ width: 20, height: 20 }}></Image>
                                </TouchableOpacity>
                            </View>

                            {/* FlatList */}

                            <View style={{ marginTop: SIZES.base }}>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={data}
                                    renderItem={renderItem}></FlatList>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Today */}

                <View style={styles.viewToday}>
                    <View style={styles.todayArea}>
                        <View style={styles.todayMain}>
                            {/* HEADER */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>
                                    Today's Share
                                </Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>
                                        See all
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Body */}
                            <View style={styles.viewBodyToday}>
                                <View style={styles.leftViewToday}>
                                    <TouchableOpacity
                                        style={{
                                            flex: 1,
                                        }}
                                        onPress={() => navigation.navigate('Detail')}>
                                        <Image
                                            source={images.plant5}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 20,
                                            }}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ flex: 1, marginTop: SIZES.font }}
                                        onPress={() => navigation.navigate('Detail')}>
                                        <Image
                                            source={images.plant6}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 20,
                                            }}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rightViewToday}>
                                    <TouchableOpacity
                                        style={{ flex: 1, marginLeft: SIZES.font }}
                                        onPress={() => navigation.navigate('Detail')}>
                                        <Image
                                            source={images.plant7}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 20,
                                            }}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Friends */}
                <View style={styles.viewFriend}>
                    <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>
                        Added Friends
                    </Text>
                    <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>
                        {listFriend.length} total
                    </Text>

                    {/* View Friend */}
                    <View style={styles.friend}>
                        {/* Avt Friend */}
                        <View style={styles.viewAvt}>
                            {renderFriendsComponent(listFriend)}
                        </View>

                        {/* More friend */}
                        <View style={styles.addNew}>
                            <Text>Add New</Text>
                            <TouchableOpacity
                                style={{
                                    marginLeft: SIZES.base,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.gray,
                                }}>
                                <Image
                                    source={icons.plus}
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
