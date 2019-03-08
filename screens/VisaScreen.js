import React from "react";
import { Text, View, StyleSheet } from "react-native";

class VisaScreen extends React.Component {
    static navigationOptions = {
      title: 'Visa'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Visa Screen</Text>
        </View>
      );
    }
}
export default VisaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});