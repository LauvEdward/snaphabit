import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {useState} from "react";
import Octicons from "@expo/vector-icons/Octicons";
import DialogContainer from "react-native-dialog/lib/Container";
import DialogTitle from "react-native-dialog/lib/Title";
import DialogDescription from "react-native-dialog/lib/Description";
import DialogButton from "react-native-dialog/lib/Button";
import DialogInput from "react-native-dialog/lib/Input";


// @ts-ignore
export default function Home({navigation}) {
  const [activity, setActivity] = useState([
    {name: "Tập thể dục", image: ""},
    {name: "Đọc sách", image: ""},
    {name: "Uống đủ nước", image: ""},
  ])
  const [visible, setVisible] = useState(false);
  // const addItem = (item: { name: string; image: string; }) => {
  //   setActivity([...activity, item]);
  // }
  // @ts-ignore
  const renderItem = ({ item }) => (
    <View style={styles.list}>
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <DialogContainer visible={visible}>
        <DialogTitle>Thêm thói quen</DialogTitle>
        <DialogDescription>Tạo thói quen mới</DialogDescription>
        <DialogButton label={"OK"} onPress={() => setVisible(false)}></DialogButton>
      </DialogContainer>
      <Text style={styles.textHeader}>Activity</Text>
      <FlatList data={activity} renderItem={renderItem}/>
      <TouchableOpacity onPress={() => {navigation.navigate("CreateHabit")}}>
        <View style={styles.floatingButton}>
          <Octicons name="diff-added" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
  dialog: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    backgroundColor: "green", // Replace with your primary color
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(251, 242, 231, 1)",
    padding: 20
  },
  list: {
    padding: 10,
  },
  item: {
    backgroundColor: "pink", // Replace with your secondary color
    padding: 10,
    marginVertical: 0,
    borderRadius: 8,
    width: "100%",
  },
  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
  }
});