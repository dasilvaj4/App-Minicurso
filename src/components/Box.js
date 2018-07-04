import React from 'react';
import {Component, StyleSheet, Text, View} from 'react-native';


const Box = (props) =>(
			<View style= {style.box}>
				<Text> { props.text } </Text>
			</View>
);



const style = StyleSheet.create({
	box:{
		alignItems:'center',
		justifyContent:'center',
		height:65,
		borderRadius:5,
		marginHorizontal:5,
		marginVertical:6,
		backgroundColor:'#009999',
	},

});


export default Box;