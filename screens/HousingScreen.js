import React from "react";
import { Text, View, StyleSheet } from "react-native";

class HousingScreen extends React.Component {
    static navigationOptions = {
      title: 'Housing'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Housing Screen</Text>
        </View>
      );
    }
}
export default HousingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});