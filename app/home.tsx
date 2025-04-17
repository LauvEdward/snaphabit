import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {Key, useState} from "react";
import Octicons from "@expo/vector-icons/Octicons";
import Colors from "../components/colors"
import Icon from 'react-native-vector-icons/EvilIcons';

// @ts-ignore
export default function Home({navigation}) {
  const [activity, setActivity] = useState([
    {icon: "💧", name: "Tập thể dục", day: ['T2', 'T3', 'T4', 'T5']},
    {icon: "💧", name: "Đọc sách", day: ['T5', 'T6', 'T7', 'CN']},
    {icon: "💧", name: "Uống đủ nước", day: ['T6', 'T7', 'CN']}
  ])
  // @ts-ignore
  const renderItem = ({item}) => (
    <TouchableOpacity>
      <View style={styles.list}>
        <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
          <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Text style={{fontSize: 25, padding: 5}}>{item.icon}</Text>
            <View>
              <Text style={{fontSize: 17}}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: "center", padding: 5}}>
                {item.day.map((dayItem: String, index: Key) => (
                  <Text key={index}
                        style={{backgroundColor: "#d3d3d3", padding: 5, marginEnd: 5, borderRadius: 5, fontSize: 8}}
                  >{dayItem}</Text>
                ))}
              </View>
            </View>
          </View>
          <Icon name="clock" size={30}/>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Activity</Text>
      <View style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"}}>
        {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((item, index) => (
          <>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#fff",
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 10,
                  borderColor: "#d3d3d3",
                  borderWidth: 1
                }}
                key={index}>
                <Text style={{color: "#000", marginBottom: 10}}>{item}</Text>
                <Text style={{color: "#000"}}>{index}</Text>
              </View>
            </TouchableOpacity>
          </>
        ))}
      </View>
      <Text style={styles.textHeader}>Habits</Text>
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
    bottom: 0,
    right: 0,
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
    marginBottom: 5,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  }
});