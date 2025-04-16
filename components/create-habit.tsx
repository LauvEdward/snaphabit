import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export default function CreateHabitScreen({}) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('🏃‍♂️');
  const [isDaily, setIsDaily] = useState(true);
  const [timesPerWeek, setTimesPerWeek] = useState(3);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderTimes, setReminderTimes] = useState<Date[]>([]);
  const [showPickerIndex, setShowPickerIndex] = useState<number | null>(null);

  const toggleDay = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const handleTimeChange = (event: any, selectedDate?: Date) => {
    if (selectedDate && showPickerIndex !== null) {
      const updated = [...reminderTimes];
      updated[showPickerIndex] = selectedDate;
      setReminderTimes(updated);
    }
    setShowPickerIndex(null);
  };

  const addReminderTime = () => {
    setReminderTimes([...reminderTimes, new Date()]);
  };

  const saveHabit = () => {
    if (!name.trim()) {
      Alert.alert('Lỗi', 'Tên thói quen không được để trống.');
      return;
    }
    if (!isDaily && selectedDays.length === 0) {
      Alert.alert('Lỗi', 'Vui lòng chọn ít nhất 1 ngày trong tuần.');
      return;
    }
    if (reminderEnabled && reminderTimes.length === 0) {
      Alert.alert('Lỗi', 'Vui lòng chọn ít nhất 1 giờ nhắc nhở.');
      return;
    }

    // Gửi dữ liệu lên API hoặc lưu local
    console.log({
      name,
      icon,
      isDaily,
      timesPerWeek,
      selectedDays,
      reminderEnabled,
      reminderTimes,
    });

    Alert.alert('Thành công', 'Đã lưu thói quen mới!');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Tạo thói quen mới</Text>

      <Text style={{ fontWeight: '600' }}>📌 Tên thói quen</Text>
      <TextInput
        placeholder="Ví dụ: Đọc sách"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginVertical: 8,
        }}
      />

      <Text style={{ fontWeight: '600' }}>🎨 Chọn icon</Text>
      <View style={{ flexDirection: 'row', marginVertical: 8 }}>
        {['📚', '💧', '🏃‍♂️', '🛌', '🧘‍♀️'].map(i => (
          <TouchableOpacity
            key={i}
            onPress={() => setIcon(i)}
            style={{
              padding: 10,
              marginRight: 10,
              backgroundColor: icon === i ? '#ddd' : '#fff',
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 24 }}>{i}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ fontWeight: '600' }}>📅 Tần suất</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <TouchableOpacity onPress={() => setIsDaily(true)} style={{ marginRight: 16 }}>
          <Text style={{ color: isDaily ? '#007BFF' : '#000' }}>🔘 Hàng ngày</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsDaily(false)}>
          <Text style={{ color: !isDaily ? '#007BFF' : '#000' }}>⚪ Số lần / tuần</Text>
        </TouchableOpacity>
      </View>

      {!isDaily && (
        <>
          <Text style={{ marginBottom: 4 }}>Số lần / tuần: {timesPerWeek}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
            {weekdays.map(day => (
              <TouchableOpacity
                key={day}
                onPress={() => toggleDay(day)}
                style={{
                  padding: 8,
                  margin: 4,
                  backgroundColor: selectedDays.includes(day) ? '#007BFF' : '#eee',
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: selectedDays.includes(day) ? '#fff' : '#000' }}>{day}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <Text style={{ flex: 1, fontWeight: '600' }}>⏰ Nhắc nhở</Text>
        <Switch value={reminderEnabled} onValueChange={setReminderEnabled} />
      </View>

      {reminderEnabled && (
        <View style={{ marginBottom: 16 }}>
          {reminderTimes.map((time, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setShowPickerIndex(index)}
              style={{
                padding: 10,
                backgroundColor: '#eee',
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              <Text>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </TouchableOpacity>
          ))}
          <Button title="➕ Thêm giờ nhắc" onPress={addReminderTime} />
        </View>
      )}

      {showPickerIndex !== null && (
        <DateTimePicker
          mode="time"
          value={reminderTimes[showPickerIndex] || new Date()}
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TouchableOpacity
        onPress={saveHabit}
        style={{
          backgroundColor: '#28a745',
          padding: 16,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16 }}>✅ Lưu thói quen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
