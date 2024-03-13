import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import images from "../../assets/Images";
import SwiperComponent from "../../Components/SwiperComponent";
import LinearGradient from "react-native-linear-gradient";
import { getHeight, getWidth } from "../../Theme/Constants";
import PopoverMenu from "../../Components/PopoverMenu";

const axios = require("axios").default;
const height = Dimensions.get("window").height;

const Contests = (props) => {
  const navigation = useNavigation();
  const [ProfileData, setProfileData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selecteditem, setSelecteditem] = useState(0);
  const [pop, setPop] = useState(false);
  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));
  const [icon_4] = useState(new Animated.Value(40));
  const [modalTrue, setModalTrue] = useState(false);
  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 120,
      duration: 900,
      // duration: 500,

      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 120,
      duration: 700,
      // duration: 500,

      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 130,
      duration: 1100,
      // duration: 500,

      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 47,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 50,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const data = [
    { id: "1", title: "Virat Kohli", imageUrl: images.Virat },
    { id: "2", title: "Virat Kohli", imageUrl: images.Welcome_2 },
    { id: "3", title: "Item 3", imageUrl: images.Welcome_3 },
    { id: "4", title: "Item 2", imageUrl: images.Welcome_1 },
    { id: "5", title: "Item 5", imageUrl: images.Welcome_2 },
    { id: "6", title: "Item 8", imageUrl: images.Welcome_3 },
    { id: "7", title: "Item 7", imageUrl: images.Welcome_3 },
  ];
  const swiperdata = [
    { id: "1", title: "Item 1", imageUrl: images.ViratBanner },
    { id: "2", title: "Item 2", imageUrl: images.ViratBanner },
    { id: "3", title: "Item 4", imageUrl: images.ViratBanner },
    { id: "4", title: "Item 6", imageUrl: images.Welcome_1 },
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
  }
  const handleImageBackgroundClick = () => {
    // Navigate to the next screen
    navigation.navigate("ContestDetails");
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.image} />
    </View>
  );

  const renderImageItem = ({ item }) => (
    <TouchableOpacity onPress={handleImageBackgroundClick}>
      <ImageBackground
        source={item.imageUrl}
        resizeMode="stretch"
        imageStyle={styles.imageStyle}
        style={styles.imgbgd}
      >
        <View
          style={{
            width: 80,
            height: 20,
            backgroundColor: "#295265",
            borderRadius: 7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontFamily: "Jost-SemiBold" }}>
            2nd week
          </Text>
        </View>
        <View>
          <Text style={{ color: "white", fontFamily: "Jost-SemiBold" }}>
            Kohli Chronicles: Unleash Your Inner Champion
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 15,
                marginTop: 5,
                width: getWidth(4.5),
              }}
            >
              {swiperdata.map((item) => renderItem({ item }))}
            </ScrollView>
            <Text
              style={{
                fontSize: 10,
                color: "white",
                fontFamily: "Jost-SemiBold",
              }}
            >
              15k+ Participants
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  useEffect(() => {
    // getDetails();
  }, []);
  onPressStatusUpload = () => {
    alert("upload");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Contests" />
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            style={styles.clickableGradient}
            onPress={() => {
              // Handle onPress event
              console.log("Gradient View Clicked");
            }}
          >
            <TouchableOpacity
              onPress={() => handleTabPress(0)}
              style={[
                styles.bottumtab,
                { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
                selectedTab === 0 && styles.activeTab,
              ]}
            >
              <LinearGradient
                colors={
                  selectedTab === 0
                    ? ["#8360C3", "#2EBF91"]
                    : ["transparent", "transparent"]
                }
                style={[
                  styles.contgrad,
                  { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text
                  style={
                    selectedTab === 0 ? styles.activeTabText : styles.tabText
                  }
                >
                  Contests
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTabPress(1)}
              style={[styles.bottumtab, selectedTab === 1 && styles.activeTab]}
            >
              <LinearGradient
                colors={
                  selectedTab === 1
                    ? ["#8360C3", "#2EBF91"]
                    : ["transparent", "transparent"]
                }
                style={styles.contgrad}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text
                  style={
                    selectedTab === 1 ? styles.activeTabText : styles.tabText
                  }
                >
                  Fan Festival
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTabPress(2)}
              style={[
                styles.bottumtab,
                { borderTopRightRadius: 15, borderBottomRightRadius: 15 },
                selectedTab === 1 && styles.activeTab,
              ]}
            >
              <LinearGradient
                colors={
                  selectedTab === 2
                    ? ["#8360C3", "#2EBF91"]
                    : ["transparent", "transparent"]
                }
                style={[
                  styles.contgrad,
                  { borderTopRightRadius: 15, borderBottomRightRadius: 15 },
                ]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text
                  style={
                    selectedTab === 2 ? styles.activeTabText : styles.tabText
                  }
                >
                  Fan Awards
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={{ height: 200, marginTop: 5 }}>
          <SwiperComponent data={swiperdata} />
        </View>
        <TouchableOpacity
          style={styles.clickableItems}
          onPress={() => {
            // Handle onPress event
            console.log("Gradient View Clicked");
          }}
        >
          <TouchableOpacity
            onPress={() => handleItemPress(0)}
            style={[
              styles.bottumitem,
              { borderTopLeftRadius: 15, borderBottomLeftRadius: 15 },
              selecteditem === 0 && styles.activeTab,
            ]}
          >
            <Text
              style={
                selecteditem === 0 ? styles.activeItemText : styles.tabText
              }
            >
              Active
            </Text>
            <LinearGradient
              colors={
                selecteditem === 0
                  ? ["#8360C3", "#2EBF91"]
                  : ["transparent", "transparent"]
              }
              style={{
                width: "100%",
                height: "10%",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              }}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            ></LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleItemPress(1)}
            style={[styles.bottumitem, selecteditem === 1 && styles.activeTab]}
          >
            <Text
              style={
                selecteditem === 1 ? styles.activeItemText : styles.tabText
              }
            >
              Upcoming
            </Text>
            <LinearGradient
              colors={
                selecteditem === 1
                  ? ["#8360C3", "#2EBF91"]
                  : ["transparent", "transparent"]
              }
              style={{
                width: "100%",
                height: "10%",
                justifyContent: "center",
                alignItems: "center",
              }}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            ></LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleItemPress(2)}
            style={[
              styles.bottumitem,
              { borderTopRightRadius: 15, borderBottomRightRadius: 15 },
              selecteditem === 1 && styles.activeTab,
            ]}
          >
            <Text
              style={
                selecteditem === 2 ? styles.activeItemText : styles.tabText
              }
            >
              Completed
            </Text>
            <LinearGradient
              colors={
                selecteditem === 2
                  ? ["#8360C3", "#2EBF91"]
                  : ["transparent", "transparent"]
              }
              style={{
                width: "100%",
                height: "10%",
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              }}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            ></LinearGradient>
          </TouchableOpacity>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.flatListContent}>
          {chunkArray(data, 2).map((row, index) => (
            <View style={styles.rowContainer} key={index}>
              {row.map((item) => renderImageItem({ item }))}
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <PopoverMenu
        pop={pop}
        icon_1={icon_1}
        icon_2={icon_2}
        icon_3={icon_3}
        icon_4={icon_4}
        popIn={popIn}
        popOut={popOut}
        // modalTrue={modalTrue}
        // bttomModal={bttomModal}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgbgd: {
    width: getWidth(2.2),
    padding: 10,
    height: 220,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  searchBar: {
    flexDirection: "row",
    width: getWidth(1.1),
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    padding: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",

    backgroundColor: "white",
    width: getWidth(1.5),
    borderRadius: 15,
    height: 50,

    marginBottom: 15,
    position: "absolute",
    top: 120,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "white",
    width: getWidth(1.3),
    marginBottom: 30,
    height: 50,
    borderRadius: 18,
  },
  activeTab: {
    borderBottomColor: "transparent",
  },
  tabText: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Jost-SemiBold",
    fontWeight: "400",
  },
  activeTabText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Jost-SemiBold",
    fontWeight: "400",
  },
  activeItemText: {
    color: "#6F76B7",
    fontSize: 18,
    fontFamily: "Jost-SemiBold",
    fontWeight: "400",
    marginBottom: 10,
  },
  flatListContent: {
    flexGrow: 1,
  },
  itemContainer: {
    width: 26,
    height: 26,
    borderRadius: 50,
    marginLeft: -12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: "#6F76B7",
  },
  image: {
    width: 22,
    height: 22,
    borderRadius: 50,
    // margin: -8
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 5,
  },
  itemName: {
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Jost-SemiBold",
  },
  followButton: {
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  followButtonText: {
    color: "#fff",
    fontFamily: "Jost-SemiBold",
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  statusUploadBackground: {
    height: 80,
    width: 80,

    borderRadius: 45, // half of height/width for perfect circle
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // Adjust opacity or color as needed
  },
  fanBackground: {
    height: 60,
    width: 60,

    borderRadius: 35, // half of height/width for perfect circle
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)", // Adjust opacity or color as needed
  },
  logo: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 65,
    backgroundColor: "#00D2FF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // right: 15,
  },
  outerview: {
    height: 85,
    width: 85,

    borderRadius: 45, // half of height/width for perfect circle
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7E65C0",
  },
  fanouterview: {
    height: 65,
    width: 65,

    borderRadius: 45, // half of height/width for perfect circle
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7E65C0",
  },
  flatListContent: {
    flexGrow: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  clickableGradient: {
    height: 33, // Adjust height as needed
    width: getWidth(1.1),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 19,
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 1,
    marginBottom: 10,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 10,
    width: "20%",
    height: "100%",
    borderRadius: 15,
  },
  bottumtab: {
    flex: 1,
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
  },

  clickableItems: {
    // position: 'absolute',

    height: 50, // Adjust height as needed

    width: getWidth(1.1),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    flexDirection: "row",
    // backgroundColor: 'white',
    // borderWidth:1,
    // borderColor:'gray',
    marginTop: -10,
    marginBottom: 10,
  },
  bottumitem: {
    flex: 1,
    alignItems: "center",
    // borderColor: 'gray',
    // borderWidth: 1
  },
  flatListContent: {
    flexGrow: 1,
  },
  imageStyle: {
    borderRadius: 20, // Set the same border radius as the background image
  },
  contgrad: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Contests;
