import React from "react";
import { Text, View, StyleSheet } from "react-native";

class SevisScreen extends React.Component {
    static navigationOptions = {
      title: 'Sevis'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Sevis Screen</Text>
        </View>
      );
    }
}
export default SevisScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});