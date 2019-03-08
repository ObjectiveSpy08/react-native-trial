import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Body, Header, Left, Right, Icon, Button } from "native-base";

class HomeScreen extends React.Component {
    static navigationOptions = {
      drawerIcon: ({tintColor}) => <Icon name="home" style={{fontSize: 24, color: tintColor}}></Icon>
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
            <Body><Text>Home</Text></Body>
            <Right />
          </Header>
          <Text>Home Screen</Text>
        </View>
      );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
