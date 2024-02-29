import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { getWidth, getHeight } from "../Theme/Constants";

function HomeScreenModal({ visible, onclose }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    // <View style={styles.container}>
    //   <View style={styles.mainContainer}></View>
    // </View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onclose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={toggleModal}>
            {/* <Text>Close</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  mainContainer: {
    width: getWidth(1.6),
    height: getHeight(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  modalContainer: {
    width: getWidth(1),
    height: getHeight(1.2),
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundColor: "pink",
  },
  modalContent: {
    backgroundColor: "pink",
    width: getWidth(1.4),
    height: getHeight(6),
    alignItems: "center",
    borderTopLeftRadius: 115,
    borderTopRightRadius: 115,
  },
});
export default HomeScreenModal;
