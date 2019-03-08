import React from "react";
import { Text, View, StyleSheet } from "react-native";

class ImmunizationScreen extends React.Component {
    static navigationOptions = {
      title: 'Immunization'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Immunization Screen</Text>
        </View>
      );
    }
}
export default ImmunizationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});