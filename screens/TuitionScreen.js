import React from "react";
import { Text, View, StyleSheet } from "react-native";

class TuitionScreen extends React.Component {
    static navigationOptions = {
      title: 'Tuition'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Tuition Screen</Text>
        </View>
      );
    }
}
export default TuitionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});