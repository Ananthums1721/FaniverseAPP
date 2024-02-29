import React, { useState, useEffect } from "react";
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
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { setApiData } from "../../redux/action";
import CommonButton from "../../Components/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeHeader from "../../Components/HomeHeader";
import HorizontalList from "../../Components/HorizontalList";
import images from "../../assets/Images";
import SwiperComponent from "../../Components/SwiperComponent";
import ListItem from "../../Components/ListItem";
import Footer from "../../Components/Footer";
import FaniverseIconSVG from "../../assets/svg/FaniverseIconSVG";
import { getHeight, getWidth } from "../../Theme/Constants";
import HomeScreenModal from "../../Components/HomeScreenModal";
import Icon from "react-native-vector-icons/FontAwesome";
import StorySVG from "../../assets/svg/StorySVG";
import LiveSVG from "../../assets/svg/LiveSVG";
import FilimSVG from "../../assets/svg/FilimSVG";
import ImageSVG from "../../assets/svg/ImageSVG";
import SubtractSVG from "../../assets/svg/SubtractSVG";

import LinearGradient from "react-native-linear-gradient";

const axios = require("axios").default;
const height = Dimensions.get("window").height;

const Home = (props) => {
  const navigation = useNavigation();
  const [ProfileData, setProfileData] = useState([]);

  const [modalFalse, setModalFalse] = useState(true);

  const data = [
    { id: "1", title: "Virat Kohli", imageUrl: images.ViratProfile },
    { id: "2", title: "Virat Kohli", imageUrl: images.Welcome_2 },
    { id: "3", title: "Item 3", imageUrl: images.Welcome_3 },
    { id: "4", title: "Item 2", imageUrl: images.Welcome_1 },
    { id: "5", title: "Item 3", imageUrl: images.Welcome_2 },
    { id: "6", title: "Item 2", imageUrl: images.Welcome_3 },
    { id: "7", title: "Item 3", imageUrl: images.Welcome_3 },
    // Add more items as needs
  ];
  const swiperdata = [
    { id: "1", title: "Item 1", imageUrl: images.ViratBanner },
    { id: "2", title: "Item 2", imageUrl: images.ViratBanner },
    { id: "3", title: "Item 3", imageUrl: images.ViratBanner },
    { id: "4", title: "Item 2", imageUrl: images.Welcome_1 },

    // Add more items as needed
  ];
  const verticalListData = [
    {
      id: "1",
      name: "Virat Kohli",
      type: "image",
      media:
        "https://i0.wp.com/www.rvcj.com/wp-content/uploads/2023/01/VIRAT-KOHLI-2.jpg?resize=600%2C451&ssl=1",
      designation: "Bangalore",
      description:
        "Stumptown brunch raw umami flannel dollar pour-over ipsum. Booth glossier squid craft kale.😍❤️❤️",
      image: images.ViratProfile,
    },
    {
      id: "2",
      name: "Jane Smith",
      type: "image",
      media:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg",
      designation: "Product Manager",
      description: "Software fcrtdcvg ",
      image: images.Welcome_1,
    },
    {
      id: "3",
      name: "Alice Johnson",
      type: "video",
      media:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      designation: "UI/UX Designer",
      description: "Software vhgftrdfcgv bn dr",
      image: images.Welcome_1,
    },

    {
      id: "4",
      name: "Virat Kohli",
      type: "image",
      media:
        "https://i0.wp.com/www.rvcj.com/wp-content/uploads/2023/01/VIRAT-KOHLI-2.jpg?resize=600%2C451&ssl=1",
      designation: "Bangalore",
      description:
        "Stumptown brunch raw umami flannel dollar pour-over ipsum. Booth glossier squid craft kale.😍❤️❤️",
      image: images.ViratProfile,
    },
    {
      id: "5",
      name: "Jane Smith",
      type: "image",
      media:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/09/instagram-image-size.jpg",
      designation: "Product Manager",
      description: "Software fcrtdcvg ",
      image: images.Welcome_1,
    },
    // Add more items as needed
  ];

  useEffect(() => {
    // getDetails();
  }, []);
  onPressStatusUpload = () => {
    alert("upload");
  };

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));
  const [icon_4] = useState(new Animated.Value(40));

  const [pop, setPop] = useState(false);

  console.log(pop, "----------");

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

  const buttonColors = ["#8360C3", "#2EBF91"];

  const [modalTrue, setModalTrue] = useState(false);

  const bttomModal = () => {
    setModalTrue(!modalTrue);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader title="Home" />
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 15 }}>
          <HorizontalList
            data={data}
            onPressStatusUpload={() => onPressStatusUpload()}
          />
        </View>
        <View style={{ height: 200, marginTop: 10 }}>
          <SwiperComponent data={swiperdata} />
        </View>
        {verticalListData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ScrollView>

      {pop === true ? (
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={["#8360C3", "#2EBF91"]}
        >
          <Animated.View
            style={[styles.circle, { bottom: icon_1, left: icon_1 }]}
          >
            <TouchableOpacity>
              {/* <Icon name="cloud-upload" size={25} color="#FFFF" /> */}
              <LiveSVG />
              <Text>Live</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      ) : null}

      {pop === true ? (
        <Animated.View
          style={[styles.circle, { bottom: icon_2, right: icon_2 }]}
        >
          <TouchableOpacity>
            <FilimSVG />
            <Text>Flare</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : null}

      {pop === true ? (
        <Animated.View style={[styles.circle, { right: icon_3 }]}>
          <TouchableOpacity>
            <ImageSVG />
            <Text>Post</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : null}

      {pop === true ? (
        <Animated.View style={[styles.circle, { left: icon_4 }]}>
          <TouchableOpacity>
            <StorySVG />
            <Text>Story</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : null}
      {/* 
      <TouchableOpacity
        style={styles.clickableGradient}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}
      >
        <FaniverseIconSVG />
      </TouchableOpacity> */}
      {modalTrue === true ? (
        <View style={styles.clickableGradient1}>
          <View>
            <SubtractSVG />
          </View>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 20, left: 25 }}
          >
            <ImageSVG />
            <Text style={{ color: "white" }}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 71, left: 73 }}
          >
            <FilimSVG />

            <Text style={{ color: "white" }}>Flare</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 71, left: 148 }}
          >
            <LiveSVG />
            <Text style={{ color: "white" }}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 20, left: 200 }}
          >
            <StorySVG />
            <Text style={{ color: "white" }}>Story</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.clickableGradient}
        onPress={() => bttomModal()}
      >
        <FaniverseIconSVG />
      </TouchableOpacity>

      {/* <Footer title={"home"} /> */}
      {/* <HomeScreenModal onPress={modalTrue} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clickableGradient: {
    position: "absolute",
    bottom: 10,
    left: 153,
    right: 0,
    height: 50, // Adjust height as needed

    width: getWidth(6.5),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
    // backgroundColor: "white",
  },
  clickableGradient1: {
    position: "absolute",
    bottom: 15,
    left: 53,
    right: 0,
    height: 150, // Adjust height as needed

    width: getWidth(1.4),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    // flexDirection: "row",
    // backgroundColor: "white",
  },
  circle: {
    backgroundColor: "#8360C3",
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 40,
    right: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
  },
});

export default Home;
