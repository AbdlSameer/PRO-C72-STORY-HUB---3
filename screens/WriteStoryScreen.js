import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Header, keyboardAvoidingView, ToastAndroid  } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import db from '../config';
import firebase from 'firebase'


export default class WriteStoryScreen extends React.Component{
    render(){

        return(
            <keyboardAvoidingView style= {style.container} behavior= "padding" enabled>
            <View style = {styles.inputView}>
             <TextInput style = {styles.inputBox} placeholder = "Story Title"/>
             <TextInput style = {styles.inputBox} placeholder = "Author"/>
             <TextInput style = {styles.inputBox} placeholder = "Write your story"/>
             
                <TouchableOpacity style={styles.submitButton}> 
                    <Text>Submit</Text>
                    </TouchableOpacity>
                    
            </View>
            </keyboardAvoidingView>          
         ToastAndroid.show(WriteStoryScreen, ToastAndroid.SHORT)
        )
    }
}

 const styles = StyleSheet.create({
      container:    { flex: 1, 
                    justifyContent: 'center',
                    alignItems: 'center'
                      }, 
       inputView:{ flexDirection: 'row', margin: 20 }, 
       inputBox:{ width: 200, height: 200, borderWidth: 1.5, borderRightWidth: 0, fontSize: 20 },
      submitButton:{ backgroundColor: '#66BB6A', width: 50, borderWidth: 1.5, borderLeftWidth: 0 }
         });

