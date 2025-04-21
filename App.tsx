import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from "expo-router/build/fork/native-stack/createNativeStackNavigator";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";
import Onboarding from "./app/onboarding";
import CreateHabitScreen from "./app/create-habit";
import Home from "./app/activity";
import Colors from "./components/colors";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="CreateHabit" component={CreateHabitScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
});
