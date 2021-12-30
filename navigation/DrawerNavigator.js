import React from "react";
import 
{ createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Scan from "../screens/Scan";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Scan" component={Scan} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;