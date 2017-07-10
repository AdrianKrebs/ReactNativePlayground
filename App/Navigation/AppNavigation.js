import {StackNavigator, TabNavigator} from 'react-navigation'
import TextablesScreen from '../Containers/TextablesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import Colors from "../Themes/Colors";
import PizzaLocationListScreen from "../Containers/PizzaLocationListScreen";

// Manifest of possible screens
const PrimaryNav = TabNavigator
({
  TextablesScreen: { screen: TextablesScreen },
  LaunchScreen: { screen: LaunchScreen },
  Map: {screen: PizzaLocationListScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TextablesScreen',
  tabBarOptions: {
    activeTintColor: Colors.background,
  }
})

export default PrimaryNav
