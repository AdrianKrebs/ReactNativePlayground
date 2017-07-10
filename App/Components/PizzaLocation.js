import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PizzaLocationStyle'

export default class PizzaLocation extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>PizzaLocation Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// PizzaLocation.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// PizzaLocation.defaultProps = {
//   someSetting: false
// }
