import React,{Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Button from './Button';



const Header = (props) => (

				<View style={style.head}>
					<Button/>
					<Text style={style.text}> { props.text } </Text>
				</View>

);


const style = StyleSheet.create({

	head:{
			backgroundColor:'#22BEDF',
			alignItems:'center',
			justifyContent:'center',
			borderBottomColor:'#4836CB',
			borderBottomWidth:4,
			marginTop:25,
	},

	text:{
	
		marginTop:10,
		marginBottom:20,
		fontSize:30,
		fontStyle:'italic',		
	},

	});



export default Header;

