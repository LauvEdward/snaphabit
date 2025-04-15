import {Text, View, StyleSheet} from "react-native";

export default function Home() {
  return (<View style={styles.container}>
    <Text>Hello world</Text>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});