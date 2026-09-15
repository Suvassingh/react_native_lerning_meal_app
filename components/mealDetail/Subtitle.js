import { View, Text, StyleSheet } from "react-native";

function SubTitle({children}) {
  return (
    <View style={styles.subtitlecontainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  subtitlecontainer: {
    padding: 6,
    borderBottomColor: "#584f4f",
    borderBottomWidth: 2,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    color: "#edb5b5",
    fontFamily: "open-sans-bold",
fontSize:24,
    textAlign: "center",
  },
});
