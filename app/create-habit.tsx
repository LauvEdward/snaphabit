import {Button, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../components/colors"

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
export default function CreateHabitScreen() {
  const [icon, setIcon] = useState("")
  const [nameHabit, setNameHabit] = useState("")
  const [isDaily, setIsDaily] = useState(true)
  const [reminderEnable, setReminderEnable] = useState(false)
  const [reminderTimes, setReminderTimes] = useState<Date[]>([])
  const [selectedDay, setSelectedDay] = useState<String[]>([])
  const addDateTime = () => {
    setReminderTimes([...reminderTimes, new Date()])
  }
  const addDay = (day: String) => {
    const isExist = selectedDay.includes(day);
    if (isExist) {
      setSelectedDay(selectedDay.filter(d => d !== day))
    } else {
      setSelectedDay([...selectedDay, day])
    }
  }
  const saveHabit = () => {
    console.log(
      nameHabit,
      icon,
      isDaily ? weekdays : selectedDay,
      reminderTimes
      )
  }
  // @ts-ignore
  return (
    <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
      <View style={styles.container}>
        <Text style={styles.title}>Tạo thói quen mới</Text>
        <Text style={styles.description}>📌 Tên thói quen</Text>
        <TextInput
          style={styles.inputText}
          placeholder={"Ví dụ: đọc sách"}
          onChangeText={setNameHabit}
        ></TextInput>
        <Text style={styles.description}>🎨 Chọn icon</Text>
        <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          {['📚', '💧', '🏃‍♂️', '🛌', '🧘‍♀️'].map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setIcon(item)}>
              <View style={{
                padding: 10,
                margin: 8,
                borderRadius: 5,
                backgroundColor: icon === item ? "#d3d3d3" : "white",
                marginBottom: 20,
              }}>
                <Text style={{fontSize: 20}}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.description}>📅 Tần suất</Text>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
          <TouchableOpacity
            onPress={() => setIsDaily(!isDaily)}
            style={{padding: 8, backgroundColor: isDaily ? "#d3d3d3" : "white", margin: 8, borderRadius: 10}}>
            <Text>Hằng ngày</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsDaily(!isDaily)}
            style={{padding: 8, backgroundColor: !isDaily ? "#d3d3d3" : "white", margin: 8, borderRadius: 10}}>
            <Text>Số lần/tuần</Text>
          </TouchableOpacity>
        </View>
        {(!isDaily) && (
          <>
            <View style={{flexDirection: "row", justifyContent: "center", marginBottom: 20}}>
              {weekdays.map((day) =>
                (<TouchableOpacity key={day} onPress={() => addDay(day)}>
                  <Text style={{
                    padding: 10,
                    backgroundColor: selectedDay.includes(day) ? "#d3d3d3" : "white",
                    margin: 5,
                    borderRadius: 5
                  }}>{day}</Text>
                </TouchableOpacity>))}
            </View>
          </>
        )}
        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
          <Text style={styles.description}>⏰ Nhắc nhở</Text>
          <Switch value={reminderEnable} onValueChange={setReminderEnable}></Switch>
        </View>
        {reminderEnable && (
          <>
            {reminderTimes.map((item, index) => (
              <View key={index} style={{flex: 1, alignItems: "center", marginBottom: 20}}>
                <RNDateTimePicker
                  mode="time"
                  value={item}
                  display="default"
                  onChange={(event, date) => {
                    const newRemiderTimes = reminderTimes.map((item, i) => {
                      if (i === index) {
                        return date;
                      } else {
                        return item;
                      }
                    });
                    setReminderTimes((newRemiderTimes || []).filter((item): item is Date => item !== undefined));
                  }}
                ></RNDateTimePicker>
              </View>
            ))}
            <Button title="➕ Thêm giờ nhắc" onPress={addDateTime}/>
          </>
        )}
        <View style={styles.buttonSave}>
          <TouchableOpacity onPress={saveHabit}>
            <Text style={{color: "white"}}>✅ Lưu thói quen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonSave: {
    margin: 20,
    padding: 15,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  dateBox: {

  },
  inputText: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    margin: 5,
    marginBottom: 20,
    marginHorizontal: 20
  },
  container: {
    padding: 10,
    backgroundColor: Colors.backgroundColor
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20
  },
  description: {
    fontWeight: "500",
    fontSize: 15,
    padding: 5
  }
})