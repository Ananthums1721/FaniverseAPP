import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    BackHandler,
} from 'react-native';
import { connect } from 'react-redux';
import { setApiData } from '../../redux/action';
import CommonButton from '../../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../Components/Header';
import HorizontalList from '../../Components/HorizontalList';
import images from '../../assets/Images';
import SwiperComponent from '../../Components/SwiperComponent';
import ListItem from '../../Components/ListItem';
import Footer from '../../Components/Footer';
import LinearGradient from 'react-native-linear-gradient';
import { getHeight, getWidth } from '../../Theme/Constants';
import ShowMoreText from '../../Components/ShowMoreText';

const axios = require('axios').default;



const ContestDetailsWeek1 = props => {
    const navigation = useNavigation();
    const [ProfileData, setProfileData] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selecteditem, setSelecteditem] = useState(0);
    const longText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';


    const data = [
        { id: '1', title: 'Virat Kohli', imageUrl: images.Cricket },
        { id: '2', title: 'Virat Kohli', imageUrl: images.Welcome_2 },
        { id: '3', title: 'Item ', imageUrl: images.Welcome_3 },
        { id: '4', title: 'Item ', imageUrl: images.Welcome_1 },
        { id: '5', title: 'Item ', imageUrl: images.Welcome_2 },
        { id: '6', title: 'Item ', imageUrl: images.Welcome_3 },
        { id: '7', title: 'Item ', imageUrl: images.Welcome_3 },

    ];
    const swiperdata = [
        { id: '1', title: 'Item 1', imageUrl: images.ViratBanner },


    ];
    const itemData = [
        { id: 1, name: 'Alex Linderson', followers: 'Mariya Jacob', image: images.ViratBanner },
        { id: 2, name: 'Jacob Jones', followers: 'Mariya tacob', image: images.Welcome_1 },
        { id: 3, name: 'Item Name ', followers: ' Mariya Jacob', image: images.Welcome_2 },
        { id: 4, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_1 },
        { id: 5, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_2 },
        { id: 6, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_2 },
        { id: 7, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_1 },
        { id: 8, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_2 },
        { id: 9, name: 'Item Name ', followers: 'Mariya Jacob', image: images.Welcome_2 },
    ];
    const handleTabPress = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    const handleItemPress = (tabIndex) => {
        setSelecteditem(tabIndex);
    };

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };
    const renderItemleader = ({ item }) => (
        <TouchableOpacity style={styles.item2Container}>
            <View style={styles.leaderview}>
                <Text style={{ marginRight: 15, marginLeft: 6 }}>{item.id}</Text>
                <Image source={item.image} style={styles.itemImage} />
            </View>
            <View style={{ width: getWidth(2.5), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: '500', fontFamily: 'Jost', fontSize: 14, color: 'black' }}> {item.followers}</Text>
            </View>
            <View style={{ width: getWidth(5), justifyContent: 'center', alignItems: 'center' }}>
                <Text>1888 Points</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.imageUrl} style={styles.image} />

        </View>
    );

    const renderImageItem = ({ item }) => (
        <ImageBackground source={item.imageUrl} resizeMode="stretch" imageStyle={styles.imageStyle} style={{ width: getWidth(2.2), height: 250, marginBottom: 15, justifyContent: 'space-between' }}>

            <View style={{ width: '100%', height: 40, borderRadius: 7, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text style={{ color: 'white', }}>127 k</Text>
                <Image source={images.ThumbsUp} style={styles.image} />
            </View>
            <View style={{ backgroundColor: 'white', width: '100%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 15, marginTop: 10 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, marginTop: 5, width: getWidth(7), marginLeft: 5 }}>
                        {swiperdata.map((item) => (
                            renderItem({ item })
                        ))}
                    </ScrollView>
                    <View style={{ width: getWidth(3), }}>
                        <Text style={{ color: 'black', fontSize: 12, marginBottom: 2, fontFamily: 'Jost-Bold' }}>Wade Warren
                        </Text>
                        <Text style={{ fontSize: 10, color: 'black', fontFamily: 'Jost-Regular' }}>10K Followers</Text>
                    </View>

                </View>

            </View>

        </ImageBackground>
    );

    useEffect(() => {
        // getDetails();
    }, []);
    onPressStatusUpload = () => {
        alert('upload')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Kohli Chronicles - Week 1" />
            <ScrollView >
                <ImageBackground source={images.Cricket} resizeMode="stretch" style={{ width: getWidth(1), padding: 10, height: 260, marginBottom: 15, justifyContent: 'space-between' }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')} style={{ width: 256, height: 40, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 7, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'white', marginRight: 5, fontFamily: 'Jost-SemiBold', }}>Week 1 Challenge video tutorial</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', marginBottom: -35 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('LeaderBoard')} style={{ width: getWidth(2.5), height: 50, backgroundColor: '#C84E89', borderRadius: 17, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={images.PlusCircle} style={styles.image} />
                            <Text style={styles.uploadtxt}>Upload Your Reel</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
                <View style={{ width: getWidth(1.1), alignSelf: 'center', marginBottom: 10, marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Jost-Regular', }}>Week 1
                    </Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800', fontFamily: 'Jost-SemiBold', }}>
                        The Beginings
                    </Text>
                    <ShowMoreText text={longText} maxLength={100} />

                </View>
                <View style={styles.tabs}>
                    <TouchableOpacity onPress={() => handleTabPress(0)} style={[styles.tab, selectedTab === 0 && styles.activeTab]}>

                        <LinearGradient
                            colors={selectedTab === 0 ? ['#8360C3', '#2EBF91'] : ['transparent', 'transparent']}
                            style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, flexDirection: 'row' }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Image style={{ width: 20, height: 20, marginRight: 5 }} source={selectedTab === 0 ? images.WhiteReel : images.GrayReel} />
                            <Text style={selectedTab === 0 ? styles.activeTabText : styles.tabText}>Contest reels</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress(1)} style={[styles.tab, selectedTab === 1 && styles.activeTab]}>

                        <LinearGradient
                            colors={selectedTab === 1 ? ['#8360C3', '#2EBF91'] : ['transparent', 'transparent']}
                            style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                        >
                            <Image style={{ width: 15, height: 15, marginRight: 5 }} source={selectedTab === 1 ? images.White_trophy : images.Black_trophy} />
                            <Text style={selectedTab === 1 ? styles.activeTabText : styles.tabText}>Leaderboard</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>



                {selectedTab === 0 ? (
                    <ScrollView contentContainerStyle={styles.flatListContent}>
                        {chunkArray(data, 2).map((row, index) => (
                            <View style={styles.rowContainer} key={index}>
                                {row.map((item) => (
                                    renderImageItem({ item })
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                ) : (

                    <ScrollView contentContainerStyle={styles.flatListContent}>
                        {/* <FlatList
data={itemData}
renderItem={renderItemleader}
keyExtractor={(item) => item?.id?.toString()}
contentContainerStyle={styles.flatListContent}
/> */}
                        {chunkArray(itemData, 1).map((row, index) => (
                            <View style={styles.rowContainer} key={index}>
                                {row.map((item) => (
                                    renderItemleader({ item })
                                ))}
                            </View>
                        ))}

                    </ScrollView>
                    // </View>
                )}
            </ScrollView>
            <Footer title={'trophy'} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center'

    },
    searchBar: {
        flexDirection: 'row',
        width: getWidth(1.1),
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
    },
    input: {
        padding: 10,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: 'white',
        width: getWidth(1.1),
        borderRadius: 15,
        height: 40,
        marginTop: 20,
        marginBottom: 15,
        borderColor: 'gray',
        borderWidth: .5
    },
    tab: {
        flex: 1,
        alignItems: 'center',

        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: 'transparent',
    },
    tabText: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'Jost-SemiBold',
        fontWeight: '400'
    },
    activeTabText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Jost-SemiBold',
        fontWeight: '400'
    },
    activeItemText: {
        color: '#6F76B7',
        fontSize: 18,
        fontFamily: 'Jost-SemiBold',
        fontWeight: '400',
        marginBottom: 10
    },
    flatListContent: {
        flexGrow: 1,
    },
    itemContainer: {
        width: 26,
        height: 26,
        borderRadius: 50,
        marginLeft: -12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: '#6F76B7'
    },
    item2Container: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 5,
        width: getWidth(1.1),
        flexDirection: 'row'
    },
    image: {
        width: 22,
        height: 22,
        borderRadius: 50,
        // margin: -8
    },
    itemImage: {
        width: 30,
        height: 30,
        borderRadius: 35,
    },
    itemName: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    followButton: {
        backgroundColor: 'blue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    followButtonText: {
        color: '#fff',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    statusUploadBackground: {
        height: 80,
        width: 80,

        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    fanBackground: {
        height: 60,
        width: 60,

        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },

    flatListContent: {
        flexGrow: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 10,
        width: '20%',
        height: '100%',
        borderRadius: 15
    },
    bottumtab: {
        flex: 1,
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1
    },

    clickableItems: {
        height: 50,
        width: getWidth(1.1),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    bottumitem: {
        flex: 1,
        alignItems: 'center',

    },
    flatListContent: {
        flexGrow: 1,

    },
    imageStyle: {
        borderRadius: 20,
    },
    uploadtxt: { color: 'white', marginLeft: 5, fontFamily: 'Jost-SemiBold', },
    leaderview: { width: getWidth(8), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
});
export default ContestDetailsWeek1;
