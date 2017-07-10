import React from 'react'
import {ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import { connect } from 'react-redux'
import SearchBar from "../Components/SearchBar";
import MapView from 'react-native-maps';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PizzaLocationListScreenStyle'
import StoreLocator from "../Components/StoreLocator";

class PizzaLocationListScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="rocket" size={30} color="#900" />
    ),
  };

  onSearch() {
    console.log("search")
  }

  onCancel() {
    console.log("cancel search")
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        <SearchBar onSearch={this.onSearch} onCancel={this.onCancel} />
        <KeyboardAvoidingView behavior='position'>
        </KeyboardAvoidingView>
        <StoreLocator/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaLocationListScreen)
