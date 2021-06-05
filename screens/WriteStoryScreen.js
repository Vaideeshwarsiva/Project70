import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import AppHeader from '../assets/AppHeader';

export default class WriteStoryScreen extends React.Component {
    render() {
      return (
       <View>
           <AppHeader />

           <TextInput placeholder="Title of Story"></TextInput>
           <TextInput placeholder="Author of Story"></TextInput>
           <TextInput placeholder="Write your Story" multiline
        numberOfLines={4}></TextInput>
        <TouchableOpacity style={{borderColor: 'black', borderWidth: 2, width:50}}><Text>Submit</Text></TouchableOpacity>
       </View>
      );
    }
  }