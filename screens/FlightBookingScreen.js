import React from "react";
import { Text, View, StyleSheet } from "react-native";

class FlightBookingScreen extends React.Component {
    static navigationOptions = {
      title: 'Flight Booking'
    };
    render() {
      return (
        <View style={styles.container}>
          <Text>Flight Booking Screen</Text>
        </View>
      );
    }
}
export default FlightBookingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});