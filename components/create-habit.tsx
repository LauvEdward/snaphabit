import {Button, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
export default function CreateHabitScreen() {
  const [icon, setIcon] = useState("")
  const [isDaily, setIsDaily] = useState(true)
  const [reminderEnable, setReminderEnable] = useState(false)
  const [reminderTimes, setReminderTimes] = useState<Date[]>([])
  const addDate = () => {
    setReminderTimes([...reminderTimes, new Date()])
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tạo thói quen mới</Text>
        <Text style={styles.description}>📌 Tên thói quen</Text>
        <TextInput
          style={styles.inputText}
          placeholder={"Ví dụ: đọc sách"}
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
                (<TouchableOpacity key={day}>
                  <Text style={styles.dateBox}>{day}</Text>
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
            {reminderTimes.map((time, index) => (
              <TouchableOpacity
                key={index}
                // onPress={() => setShowPickerIndex(index)}
                style={{
                  padding: 10,
                  backgroundColor: '#eee',
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              >
                <Text>{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</Text>
              </TouchableOpacity>
            ))}
            <Button title="➕ Thêm giờ nhắc" onPress={addDate}/>
          </>
        )}
        <View style={styles.buttonSave}>
          <TouchableOpacity>
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
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5
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
    padding: 10
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