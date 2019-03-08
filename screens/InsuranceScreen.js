import React from "react";
import { Text, View, StyleSheet } from "react-native";

class InsuranceScreen extends React.Component {
    static navigationOptions = {
      title: 'Insurance'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Insurance Screen</Text>
        </View>
      );
    }
}
export default InsuranceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});