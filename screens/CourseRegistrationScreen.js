import React from "react";
import { Text, View, StyleSheet } from "react-native";

class CourseRegistrationScreen extends React.Component {
    static navigationOptions = {
      title: 'Course Registration'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Course Registration Screen</Text>
        </View>
      );
    }
}
export default CourseRegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});