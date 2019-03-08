import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { DrawerItems } from "react-navigation";
import AcceptingScreen from "../screens/AcceptingScreen";
import CFRScreen from "../screens/CFRScreen";
import CourseRegistrationScreen from "../screens/CourseRegistrationScreen";
import FlightBookingScreen from "../screens/FlightBookingScreen";
import HomeScreen from "../screens/HomeScreen";
import HousingScreen from "../screens/HousingScreen";
import ImmunizationScreen from "../screens/ImmunizationScreen";
import InsuranceScreen from "../screens/InsuranceScreen";
import OISScreen from "../screens/OISScreen";
import SevisScreen from "../screens/SevisScreen";
import TuitionScreen from "../screens/TuitionScreen";
import VisaScreen from "../screens/VisaScreen";

const CustomDrawerComponent = (props) =>
  <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Image source={require("../assets/images/maitri.png")} style= {{ marginLeft:70, height: 120, width: 120}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>

const AppDrawerNavigator = createDrawerNavigator(
    {
      Home: HomeScreen,
      Accepting: AcceptingScreen,
      CFRScreen: CFRScreen,
      SevisScreen: SevisScreen,
      VisaScreen: VisaScreen,
      CourseRegistrationScreen: CourseRegistrationScreen,
      HousingScreen: HousingScreen,
      FlightBookingScreen: FlightBookingScreen,
      ImmunizationScreen: ImmunizationScreen,
      InsuranceScreen: InsuranceScreen,
      OISScreen: OISScreen,
      TuitionScreen: TuitionScreen,
    },
    {
      contentComponent: CustomDrawerComponent,
      initialRouteName: 'Home',
      contentOptions: {
        activeTintColor: "orange"
      }
    }
);

export default AppDrawerNavigator;