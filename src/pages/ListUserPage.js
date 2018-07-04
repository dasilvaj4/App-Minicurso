import React ,{Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import axios from 'axios';

import Box from '../components/Box';

export default class ListUserPage extends Component{


    constructor(props){
        super(props);

        this.state = {
            users: [],
        }
    }

    componentDidMount(){
       
        const {params} = this.props.navigation.state;
        
        if(params){
            var config = {
                headers: {'Authorization': "bearer " + params}
            };
        
        
            axios.get("http://186.194.152.162/:3000/user",
                config
                )
                .then((res)=> this.setState({users: res.data}))
                .catch((err) => console.log(err));
        }
    }
        
    render(){
        
        return(
            <ScrollView>
                {this.state.users.map((user) => <TouchableOpacity onPress ={
                    () => this.props.navigation.navigate("DetailUserPage",user) }
                     key = {user.nome}>
                    <Box text = {user.nome} key = {user.nome}/>
                    </TouchableOpacity>)}
            </ScrollView>
        );
    }

}