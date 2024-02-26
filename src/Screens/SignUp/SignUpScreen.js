import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import TextInputBox from "../../Components/TextInputBox";
import CommonButton from "../../Components/CommonButton";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setName, setDarkmode } from "../../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import local from "../../Storage/Local";
import images from "../../assets/Images";
import { getHeight, getWidth } from "../../Theme/Constants";

var windowWidth = Dimensions.get("window").width; //full width
var windowHeight = Dimensions.get("window").height; //full height

const SignUpScreen = (props) => {
  const navigation = useNavigation();
  const [email, changeemail] = useState("");
  const [checkemail, changecheckemail] = useState("");
  const [fullname, changefullname] = useState("");
  const [checkfullname, changecheckfullname] = useState("");
  const [phone, changephone] = useState("");
  const [checkphone, changecheckphone] = useState("");
  const [password, changepassword] = useState("");
  const [isLogin, changeIsLogin] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Fan");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    // You can store the selected value in state or pass it to a function to store it elsewhere
    console.log("Selected Option:", option);
  };
  const getEmail = async () => {
    try {
      const value = await AsyncStorage.getItem("email");
      if (value !== null) {
        changeemail(value);
      }
      const paasword = await AsyncStorage.getItem("password");
      if (paasword !== null) {
        changepassword(paasword);
      }
    } catch (e) {
      return null;
      // error reading value
    }
  };

  const isvalidate = async () => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{6,10}$/;

    if (fullname == "") {
      changecheckfullname("Please enter full name ");
    } else if (email == "") {
      changecheckemail("Please enter Email id");
    } else if (!emailFormat.test(email)) {
      changecheckemail("Please enter a valid email address"); // Set error message for invalid email format
      // alert('Please enter a valid email address'); // Set error message for invalid email format
    } else if (phone == "") {
      changecheckphone("Please enter phone number");
    } else if (!phoneNumberRegex.test(phone)) {
      changecheckphone("Please enter a valid phone number (6-10 digits)"); // Set error message for invalid phone number format
    } else {
      navigation.replace("OtpScreen");
      // local.storeLogin(true);
      // local.storeLogin(true);
    }
  };

  const clearAll = async () => {
    changeemail("");
    changepassword("");
  };
  useEffect(() => {
    AsyncStorage.getItem("isLogin", (value) => {
      if (value != null || value != undefined) {
        navigation.reset("Home");
      } else {
        changeIsLogin(false);
      }
    });
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      changeemail("");
      changepassword("");
      //Put your Data loading function here instead of my loadData()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.Welcome_3}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.headerContainer}>
          <Image style={styles.logoView} source={images.Faniverse_logo} />
          <Text style={styles.TileTxt}>{"New to Faniverse? "}</Text>
          <Text style={styles.TileTxt}>{"Signup Now"}</Text>
        </View>

        <TextInputBox
          value={fullname}
          errorText={checkfullname}
          onChangeText={(text) => {
            changefullname(text);
            changecheckfullname("");
          }}
          placeholder={"fullname"}
          width={getHeight(2.3)}
          title={"Fullname"}
        />
        <TextInputBox
          value={email}
          errorText={checkemail}
          onChangeText={(text) => {
            changeemail(text);
            changecheckemail("");
          }}
          placeholder={"User Name"}
          width={getHeight(2.3)}
          title={"Email ID"}
        />
        <TextInputBox
          value={phone}
          errorText={checkphone}
          onChangeText={(text) => {
            changephone(text);
            changecheckphone("");
          }}
          placeholder={"Phone Number"}
          width={getHeight(2.3)}
          title={"Phone Number"}
          isNumber={true}
        />
        <View style={{ width: getHeight(2.3) }}>
          <Text style={styles.subTxt}>
            {"I am a (select why are you here)"}
          </Text>
          <View style={styles.radioButtonView}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={styles.radioButton}
                onPress={() => handleSelectOption("Fan")}
              >
                <View
                  style={selectedOption === "Fan" && styles.innerRadioButton}
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>Fan</Text>
            </View>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[styles.radioButton]}
                onPress={() => handleSelectOption("Celebrity")}
              >
                <View
                  style={
                    selectedOption === "Celebrity" && styles.innerRadioButton
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>Celebrity</Text>
            </View>
          </View>
        </View>
        <CommonButton
          onPress={() => isvalidate()}
          color={["#8360C3", "#2EBF91"]}
          title={"Signup"}
          width={getHeight(2.3)}
          texttitle={"white"}
        />
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "baseline",
            height: getHeight(6.7),
          }}
        >
          <Text style={styles.subTxt2}>{"Already have an account?"}</Text>
          <CommonButton
            onPress={() => navigation.replace("LoginScreen")}
            color={["#ffffff", "#ffffff"]}
            title={"Login"}
            width={getHeight(2.3)}
            texttitle={"black"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  TileTxt: {
    fontSize: 28,
    color: "white",
    fontFamily: "Jost",
    fontWeight: "700",
    paddingBottom: 2,
  },
  subTxt: {
    fontSize: getHeight(50),
    color: "white",

    width: getHeight(2.6),
    fontFamily: "Jost",
    fontWeight: "300",
    alignSelf: "center",
  },
  subTxt2: {
    fontSize: getHeight(50),
    color: "white",
    textAlign: "center",
    fontFamily: "Jost",
    fontWeight: "300",
    alignSelf: "center",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "blue", // Background color when option is selected
  },
  innerRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "white",
  },
  optionText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  headerContainer: { width: getHeight(2.3), marginTop: 30, marginBottom: 20 },
  logoView: { width: 100, height: 90, marginBottom: 5 },
  radioButtonView: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
  },
});
export default SignUpScreen;
