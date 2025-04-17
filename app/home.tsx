import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Key, useState} from "react";
import Octicons from "@expo/vector-icons/Octicons";
import Colors from "../components/colors"


// @ts-ignore
export default function Home({navigation}) {
  const [activity, setActivity] = useState([
    {icon: "💧", name: "Tập thể dục", day: ["T2", "T3"]},
    {icon: "💧", name: "Đọc sách", day: ["T2", "T3"]},
    {icon: "💧", name: "Uống đủ nước", day: ["T2", "T3"]},
  ])
  // @ts-ignore
  const renderItem = ({item}) => (
    <View style={styles.list}>
      <View style={{flexDirection: 'row'}}>
        <Text>{item.icon}</Text>
        <Text style={{fontSize: 17, fontWeight: "500"}}>{item.name}</Text>
      </View>
      {item.day.map((dayItem: String, index: Key) => (
        <Text key={index}
              style={{backgroundColor: "red"}}
        >{dayItem}</Text>
      ))}
    </View>
  );
  return (
    <View style={styles.container}>
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
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 10
  },
  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
  }
});