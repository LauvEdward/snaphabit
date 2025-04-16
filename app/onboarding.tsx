import {StyleSheet, Text, TouchableOpacity, View, ImageBackground} from "react-native";
const backgroundImage = require('../assets/daily-activity.png')
// @ts-ignore
export default function Onboarding({navigation}) {
  return (
    <ImageBackground source={backgroundImage} style={styles.image}>
      <View>
        <Text style={styles.textHeader}>SnapHabit</Text>
        <Text style={styles.textDescription}>Build Habit Easily</Text>
      </View>
      <TouchableOpacity onPress={()=> {navigation.replace('Home')}}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(252, 251, 249, 1)',
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10
  },
  button: {
    backgroundColor: "#4682b4",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#708090",
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },
  textDescription: {
    fontSize: 30,
    fontWeight: "normal",
    color: "#708090",
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  }
});