import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator
  } from 'react-native';

import axios from 'axios';

 
 
export default class LoginPage extends Component{
   constructor(props){
    super(props);
    
    this.state = {
      token : 0,
      email: "",
      password:"",
      loading: false,
      autoScroll:false
 
    }
   }
 

  render(){
    
    return(
      
     
  <ScrollView style= {{backgroundColor:"#FFF"}}>    
    
    <Image 
      style={styles.image}
      source={{uri:"https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png"}
    }/> 

    <View>
      <View style = {styles.subContainerLogin}>      
        <View style = {{marginRight:10}}>
          <Text >Email:</Text>
        </View>
        <View style = {{ flex:2}}>
          <TextInput 
            onChangeText={(text)=> this.setState({"email":text})}
            autoCapitalize = 'none'
            onFocus = {()=> this.setState({autoScroll:true})}
            onBlur = {() => this.setState({autoScroll:false})}
            underlineColorAndroid = "#FFF"
            borderBottomWidth = {1}
          /> 
        </View>
      </View>

      <View style = {styles.subContainerLogin}>
        
        <View style = {{marginRight:10}}>   
          <Text>Senha:</Text>
        </View>
        
        <View style = {{flex:2}}>
          <TextInput onChangeText={(text)=> this.setState({"password":text})}
            onFocus = {()=> this.setState({autoScroll:true})}
            onBlur = {() => this.setState({autoScroll:false})}
            underlineColorAndroid = "#FFF"
            borderBottomWidth = {1}
            secureTextEntry = {true}
          /> 
        </View>
      
      </View>

    </View>

    <View style = {styles.buttonContainer} >
  
      <View style = {styles.button}>
        <TouchableOpacity onPress = {() =>this.props.navigation.navigate("CadastroPage")} >
          <Text style={{fontWeight:"bold"}} >Cadastrar</Text>
        </TouchableOpacity>
      </View>
  
      <View style = {{marginHorizontal:20}}>
        <TouchableOpacity onPress = { ()=> {
          this.setState({loading:true})
          setTimeout(
            ()=> {
              this.API(this.state.email,this.state.password)
              this.setState({loading:false})  
            }
            ,1500) }
          }>
          <Text style={{fontWeight:"bold"}}>Entrar</Text>
        </TouchableOpacity>
      </View>
  
    </View>
  
    { this.state.loading
      ? <ActivityIndicator animating size="large" color = "#80ff80" style = {{marginTop:20}}/>
      : null
      } 

    {
        this.state.autoScroll
        ?<View style={{height:350}}/>
        : null
      }

  </ScrollView>
      
    )};
    


    async API (email, password){

      

      const bodyParameters = {   
        "email": email,
        "password": password
     }
   
    if (email && password){
      await axios.post(
        "http://186.194.152.162/:3000/auth/authenticate",
        bodyParameters
      ).then((res) => {
        this.setState({"token":res.data.token})
      }).catch((err)=> 
         {
           err == "Error: Request failed with status code 400"
           ? alert("Usuário ou senha invalido!")
           : alert("Erro na conexão com o servidor")});
   
    }
    else{
      !email? alert("Ops! Digite seu email!"):null;
      !password? alert("Ops! Digite sua senha!"):null;
    }
    
      if(this.state.token)
        this.props.navigation.navigate("ListUserPage",this.state.token); 
      
      };

  }

const styles = StyleSheet.create({
 
  subContainerLogin:{
    flexDirection:"row",
    marginHorizontal:80,
    alignItems:"center"
  },

  buttonContainer:{
    marginTop:25,
    flexDirection:'row',
    justifyContent:"center",
  },
  
  image:{
    
    aspectRatio: 1,
    width:300,
    alignSelf:"center"

  },
  

});