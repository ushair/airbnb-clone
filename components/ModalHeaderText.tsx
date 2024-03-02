import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={[
            styles.modalHeaderText,
            {
              color: active === 0 ? "#000" : Colors.dark.grey,
              textDecorationLine: active === 0 ? "underline" : "none",
            },
          ]}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={[
            styles.modalHeaderText,
            {
              color: active === 1 ? "#000" : Colors.dark.grey,
              textDecorationLine: active === 1 ? "underline" : "none",
            },
          ]}
        >
          Experience
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 80,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  modalHeaderText: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
  },
});
export default ModalHeaderText;
