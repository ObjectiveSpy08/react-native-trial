import React from "react";
import { Text, View, StyleSheet } from "react-native";

class OISScreen extends React.Component {
    static navigationOptions = {
      title: 'OIS'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>OIS Screen</Text>
        </View>
      );
    }
}
export default OISScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});