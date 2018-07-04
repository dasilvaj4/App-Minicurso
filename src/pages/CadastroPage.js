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

import {CheckBox} from 'react-native-elements';

import axios from 'axios';

 
export default class CadastroPage extends Component{
  
    constructor(props){
        super(props);

        this.state = {
            image:"",
            nome:"Nome",
            email:"Email",
            senha:"Senha",
            cpf:"CPF",
            rg:"RG",
            ra:"RA",
            idade:"Idade",
            cidade:"Cidade",
            bairro:"Bairro",
            rua:"Rua",
            num:"Num",
            checkedM:true,
            checkedF:false,
            loading:false,
            autoScroll:false
        }
    }

  
    render(){
  
        return( 
       
        <ScrollView style = {{backgroundColor:"#fff"}}>
            
            {this.state.loading
                ?<ActivityIndicator size = "large" color = "#80ff80"/>
                : null
            }

            <View style= {{marginHorizontal:15}}>
                <View >
                    <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({nome : text})}
                        
                        value = {this.state.nome}
                        
                        underlineColorAndroid = "#fff"

                        onBlur = {() => {
                            this.state.nome.length == 0
                            ? this.setState({nome:"Nome"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }
                        
                        onFocus = {() => {
                            value = null
                            this.setState({nome:""})
                            this.setState({autoScroll:true})    
                        }


                    }/>
                </View>

                <View >
                    <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({email : text})}
                        
                        value = {this.state.email}
                        
                        underlineColorAndroid = "#fff"

                        onBlur = {() =>{ 
                            this.state.email.length == 0
                            ? this.setState({email:"Nome"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }
                        
                        onFocus = {() => {
                            value = null
                            this.setState({email:""})
                            this.setState({autoScroll:true})    
                        }
                    }/>
                </View>

                
                <View >
                    <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({senha : text})}
                        
                        value = {this.state.senha}
                        
                        autoCapitalize = 'none'

                        underlineColorAndroid = "#fff"

                        secureTextEntry = {true}

                        onBlur = {() => {
                            this.state.senha.length == 0
                            ? this.setState({senha:"Nome"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }
                        
                        onFocus = {() => {
                            value = null
                            this.setState({senha:""})
                            this.setState({autoScroll:true})    
                        }
                    }/>
                </View>
                
                <View style = {{flexDirection:"row"}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {styles.textInput}
                        
                            maxLength = {11}
                            
                            keyboardType = "numeric"
                            
                            onChangeText = {(text) => this.setState({cpf : text})}
                            
                            onBlur = {() => {
                                this.state.cpf.length == 0
                                ? this.setState({cpf:"CPF"})
                                :null
                                this.setState({autoScroll:false})
                                }
                            }

                            value = {this.state.cpf}
                            
                            underlineColorAndroid = "#fff"

                            onFocus = {() => {
                                value = null
                                this.setState({cpf:""})  
                                this.setState({autoScroll:true})  
                            }
                        }/>
                    </View>
                    
                    <View style = {{flex:1}}>
                        <TextInput style = {styles.textInput}
                            
                            keyboardType = "numeric"
                            
                            maxLength = {10}
                            
                            onChangeText = {(text) => this.setState({rg : text})}
                            
                            onBlur = {() => {
                                this.state.rg.length == 0
                                ? this.setState({rg:"RG"})
                                :null
                                this.setState({autoScroll:false})
                                }
                            }

                            value = {this.state.rg}
                            
                            underlineColorAndroid = "#fff"

                            onFocus = {() => {
                            value = null
                            this.setState({rg:""})    
                            this.setState({autoScroll:true})
                            }
                        }/>
                    </View>
                </View>


                <View style = {{flexDirection:"row"}}>
                    <View style = {{flex: 7}}>                     
                        <TextInput style = {styles.textInput}
                        
                        keyboardType = 'numeric'

                        maxLength = {7}
                        
                        onChangeText = {(text) => this.setState({ra : text})}
                        
                        onBlur = {() => {
                            this.state.ra.length == 0
                            ? this.setState({ra:"RA"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }

                        value = {this.state.ra}

                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({ra:""})    
                            this.setState({autoScroll:true})
                            }
                        }/> 
                    </View>

                    <View style = {{flex:2}}>
                        <TextInput style = {styles.textInput}
                        
                        keyboardType = 'numeric'

                        onChangeText = {(text) => this.setState({idade:text})}
                        
                        onBlur = {() => {
                            this.state.idade.length == 0
                            ? this.setState({idade:"Idade"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }

                        value = {this.state.idade}
                        
                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({idade:""})    
                            this.setState({autoScroll:true})
                            }
                        }/> 
                    </View>
                </View>

                <View style = {{flexDirection:"row"}}>    
                    <View style = {{flex:4}}>
                        <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({cidade : text})}
                        
                        onBlur = {() => {
                            this.state.cidade.length == 0
                            ? this.setState({cidade:"Cidade"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }

                        value = {this.state.cidade}
                        
                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({cidade:""})    
                            this.setState({autoScroll:true})
                            }
                        }/> 
                    </View>

                    <View style = {{flex:2}}>
                        <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({bairro : text})}
                        
                        onBlur = {() => {
                            this.state.bairro.length == 0
                            ? this.setState({bairro:"Bairro"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }

                        value = {this.state.bairro}

                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({bairro:""})    
                            this.setState({autoScroll:true})
                            }
                        }/> 
                    </View>
                </View>

                <View style = {{flexDirection:"row"}}>
                    <View style = {{flex:7}}>
                        <TextInput style = {styles.textInput}
                        
                        onChangeText = {(text) => this.setState({rua : text})}
                        
                        onBlur = {() => {
                            this.state.rua.length == 0
                            ? this.setState({rua:"Rua"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }
                        
                        value = {this.state.rua}
                        
                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({rua:""}) 
                            this.setState({autoScroll:true})   
                            }
                        }/> 
                    </View>

                    <View style = {{flex:2}}>
                        <TextInput style = {styles.textInput}
                        
                        keyboardType = 'numeric'
                        
                        onChangeText = {(text) => this.setState({num : text})}
                        
                        onBlur = {() => {
                            this.state.num.length == 0
                            ? this.setState({num:"Num"})
                            :null
                            this.setState({autoScroll:false})
                            }
                        }

                        value = {this.state.num}
                        
                        underlineColorAndroid = "#fff"

                        onFocus = {() => {
                            value = null
                            this.setState({num:""})    
                            this.setState({autoScroll:true})
                            }
                        }/> 
                    </View>
                </View>
                
                <View style = {styles.sexo}>
                    <Text>Sexo</Text>
                    <CheckBox title = {"M"}
                        checked={this.state.checkedM}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        style = {styles.checkbox}
                        onPress = {()=> {
                            this.setState({checkedM: true})
                            this.setState({checkedF: false})
                        }
                    }/>

                    <CheckBox title = {"F"}
                        checked={this.state.checkedF}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        style = {styles.checkbox}
                        onPress = {()=> {
                            this.setState({checkedF: true})
                            this.setState({checkedM: false})
                        }
                    }/>
                </View>
                
                <View style = {{alignItems: "flex-end"}}>
                    <TouchableOpacity 
                        onPress = {()=> {
                            this.setState({loading:true})
                            setTimeout(
                              ()=> {
                                this.apiPost(this.state)
                                this.setState({loading:false})  
                              }
                              ,1500) }}>
                        <Text style = {{fontWeight:"bold"}}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>
            
            </View>
      
            {
                this.state.autoScroll
                ?<View style={{height:350}}/>
                : null
            }
        </ScrollView>


    )};
    

    async apiPost(state){
       
        state.checkedM ? sexo = "male" : sexo = "female";
        
        await axios.get("https://randomuser.me/api/?gender="+sexo).then( res =>{
            const {large} = res.data.results[0].picture
            this.setState({image:large})
         })

        const objectPost = {
            "image": this.state.image, //request feito depois, acesso direto ao this.state
            "nome": state.nome,
            "email": state.email,
            "cpf": state.cpf,
            "rg": state.rg,
            "ra": state.ra,
            "idade": state.idade,
            "cidade": state.cidade,
            "bairro": state.bairro,
            "rua": state.rua,
            "num":state.num,
            "sexo": sexo,
            "password": state.senha,
        }

        

        await axios
            .post(
                "http://186.194.152.162:3000/auth/register",
                objectPost
            )
            .then((res) =>{
                if(res.status == 200){
                    alert("Cadastrado com sucesso!")
                    return this.props.navigation.navigate("LoginPage");
                }  
            })
            .catch((err) =>{ 
                alert("Usuario existente!")
                console.log(err)    
            })
    }

  }





const styles = StyleSheet.create({
   
    
    
    textInput:{
        marginHorizontal:15,
        marginVertical:20,
        borderBottomWidth : 1    
    },
 
    sexo:{
        marginHorizontal:15,
        flexDirection:"row",
        alignItems:"center"
    }
});