import React , {Component}from 'react';
import {StyleSheet} from 'react-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';

export default class Picker extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const placeholder = {
        label: 'Seleccione...',
        value: 0,
        color: '#9EA0A4',
      };
    return (
        <RNPickerSelect
        placeholder={placeholder}
        items={this.props.items}
        onValueChange={this.props.onValueChange}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
        Icon={() => {
          return <Chevron size={1.5} color="gray" style={{marginRight: 20,marginVertical: 25}} />;
        }}
      />
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontFamily:'Lato-Regular',
      fontSize: 15,
      paddingHorizontal:10,
      paddingVertical:12,
      borderWidth: 2,  
        borderColor: '#18C4B4',
        borderRadius: 20,
      color: 'black',
    },
    inputAndroid: {
      fontFamily:'Lato-Regular',
      fontSize: 15,
      paddingHorizontal:10,
      paddingVertical:12,
      borderWidth: 2,  
      borderColor: '#18C4B4',
      borderRadius: 20,
      color: 'black', 
    },
  });