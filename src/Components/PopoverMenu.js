import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import LiveSVG from "../assets/svg/LiveSVG";
import FilimSVG from "../assets/svg/FilimSVG";
import ImageSVG from "../assets/svg/ImageSVG";
import StorySVG from "../assets/svg/StorySVG";
import SubtractSVG from "../assets/svg/SubtractSVG";
import { getHeight, getWidth } from "../Theme/Constants";
import FaniverseIconSVG from "../assets/svg/FaniverseIconSVG";
import CloseIconSVG from "../assets/svg/CloseIconSVG";

const PopoverMenu = ({
  pop,
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  popIn,
  popOut,
}) => {
  const [modalTrue, setModalTrue] = useState(false);

  const bttomModal = () => {
    setModalTrue(!modalTrue);
  };

  return (
    <>
      {/* {pop === true ? (
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={['#8360C3', '#2EBF91']}
        >
          <Animated.View style={[styles.circle, { bottom: icon_1, left: icon_1 }]}>
            <TouchableOpacity>
              <LiveSVG />
              <Text>Live</Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      ) : null}

      {pop === true ? (
        <Animated.View style={[styles.circle, { bottom: icon_2, right: icon_2 }]}>
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
      ) : null} */}

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
        {modalTrue === true ? <CloseIconSVG /> : <FaniverseIconSVG />}
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  clickableGradient: {
    position: "absolute",
    bottom: 10,
    left: (getWidth(1) - getWidth(6.5)) / 2,
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
export default PopoverMenu;
