import React from 'react';

import {Text, View, StyleSheet} from 'react-native';


const Line = ({label, content}) => (

    <View style = {styles.container}> 
        <Text style = {styles.label}> {label} </Text>
        <Text style = {styles.content}> {content} </Text>
    </View>

)


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:5
    },
    label:{
        fontWeight:"bold",
        flex:2
    },
    content:{
        flex:5,
    }
});


export default Line;