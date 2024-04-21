import React, { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const inputRef = useRef(null); // Create a ref for the input field

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
    inputRef.current.clear(); // Clear the input field
    // inputRef.current.blur(); // Remove focus from the input field
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.textInput}>
          <TextInput
            ref={inputRef} // Assign the ref to the input field
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
          />
        </View>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View key={Math.random().toString()} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 20,
    width: "70%",
    marginRight: 8,
    padding: 8,
    paddingHorizontal: 15,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 7,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "purple",
  },
  goalText: {
    fontSize: 16,
    color: "white",
  },
});
