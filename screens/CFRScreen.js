import React from "react";
import { Text, View, StyleSheet } from "react-native";

class CFRScreen extends React.Component {
    static navigationOptions = {
      title: 'CFR'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>CFR Screen</Text>
        </View>
      );
    }
}
export default CFRScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});