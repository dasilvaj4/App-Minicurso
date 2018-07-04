import React from 'react';
import {Image, View, Component, TouchableOpacity, Text, StyleSheet}from 'react-native';


const Button = (props) => (
		<View style= {props.color} >
			<TouchableOpacity >
				<Text style={styles.text}>{props.text}</Text>
			</TouchableOpacity>
		</View>
	);



const styles = StyleSheet.create({

	containerButton:{
		backgroundColor:"#06ad38",
		borderRadius:5,
		
	},
		
});

export default Button;