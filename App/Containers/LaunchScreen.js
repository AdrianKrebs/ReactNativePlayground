import React from 'react'
import {ScrollView, Text, Image, View, Button} from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'


export default class LaunchScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="rocket" size={30} color="#900" />
    ),
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>TEST</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
