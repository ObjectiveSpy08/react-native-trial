import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Body, Header, Left, Right, Icon, Button } from "native-base";

class AcceptingScreen extends React.Component {
    static navigationOptions = {
      title: 'Accepting'
    }
    onDrawerMenuIconCick = () => this.props.navigation.toggleDrawer()
    render() {
      return (
        <View style={styles.container}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' onPress={this.onDrawerMenuIconCick}/>
              </Button>
            </Left>
            <Body><Text>Accepting</Text></Body>
            <Right />
          </Header>
          <Text>Accepting Screen</Text>
        </View>
      );
    }
}
export default AcceptingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});