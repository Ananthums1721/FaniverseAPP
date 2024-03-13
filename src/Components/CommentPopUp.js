import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet,FlatList,TouchableOpacity,Image ,TextInput} from 'react-native';
import { getHeight, getWidth } from "../Theme/Constants";
import images from "../assets/Images";

const CommentPopUp = ({ isVisible, toggleModal }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const itemData = [
        {
          id: 1,
          name: "Alex Linderson",
          followers:
            "Virat Kohli commented on your flare : Thank you man❤️, Thanks for the support",
          image: images.ViratBanner,
        },
        {
          id: 2,
          name: "Jacob Jones",
          followers: "How are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_1,
        },
        {
          id: 3,
          name: "Item Name 3",
          followers: " How are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_2,
        },
        {
          id: 4,
          name: "Item Name 2",
          followers:
            "Are you There? How are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_1,
        },
        {
          id: 5,
          name: "Item Name 3",
          followers:
            "jj haiHow are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_2,
        },
        {
          id: 6,
          name: "Item Name 3",
          followers:
            "test gg How are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_2,
        },
        {
          id: 7,
          name: "Item Name 2",
          followers:
            "Are you There? How are you today? Thank you man❤️, Thanks for the support",
          image: images.Welcome_1,
        },
        {
          id: 8,
          name: "Item Name 3",
          followers: "jj hai",
          image: images.Welcome_2,
        },
        {
          id: 9,
          name: "Item Name 3",
          followers: "test gg",
          image: images.Welcome_2,
        },
      ];

      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
          <View style={{ width: getWidth(8) }}>
            <Image source={item.image} style={styles.itemImage} />
          </View>
          <View style={{ width: getWidth(2) }}>
            <Text style={{ color: "black", fontFamily: "Jost-SemiBold" }}>
              {" "}
              {item.followers}
            </Text>
            <Text>2 hr ago</Text>
          </View>
          <View
            style={{
              width: getWidth(6),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={images.GrayThumbsUp} style={styles.notImage} />
           
          </View>
        </TouchableOpacity>
      );


  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
          <TouchableOpacity onPress={toggleModal}>
          <Image source={images.Cross} style={{ height: 30, width: 30, marginLeft: 10 }} />
          </TouchableOpacity>
            <Text style={styles.modalTitle}>Comments</Text>
          </View>
          <View style={styles.modalBody}>
          <FlatList
          data={itemData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
            {/* Add your modal body content here */}
          </View>
          
          <View style={styles.modalFooter}>
          <Image
          source={images.Profile}
          style={{ width: 44, height: 44, marginRight: 15 }}
        />
           <View style={styles.searchBar}>
         
          <TextInput
            style={styles.input}
            placeholder="Write your comment"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        
      
        </View>
        <View style={{marginBottom:30}}>
        <Image
          source={images.Greeenrytarrow}
          style={{ marginLeft:10,width: 30, height: 30, }}
        />
        </View>
      
            {/* <Button title="Close" onPress={toggleModal} /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
//    height:getHeight(1.5),
   flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end', // Align modal to the bottom
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height:getHeight(1.5)
  },
  modalHeader: {
    flexDirection:'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10
  },
  modalBody: {
    backgroundColor:'white',
    height:getHeight(2)
    // Add styles for the body section here
  },
  modalFooter: {
    marginTop:10,
    flexDirection:'row'
    // Add styles for the footer section here
  },
  flatListContent: {
    flexGrow: .5,
    marginTop: 20,
    paddingBottom: 60,
  },
  itemContainer: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 5,

    width: getWidth(1.1),
    flexDirection: "row",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  notImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  itemName: {
    fontWeight: "600",
    marginTop: 5,
    fontFamily: "Jost",
    fontSize: 20,
    color: "black",
  },
  searchBar: {
    flexDirection: 'row',
    width: getWidth(1.7),
    borderRadius: 10,
    backgroundColor: '#F3F6F6',
   
    alignItems: 'center',
    marginBottom:30
  },
  input: {
    padding: 10,
    width:getWidth(1.8)
  },
});

export default CommentPopUp;
