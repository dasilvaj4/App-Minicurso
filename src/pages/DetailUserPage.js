import React ,{Component} from 'react';
import {
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity, 
    StyleSheet,
    Image
    } from 'react-native';

    
    import Line from "../components/Line"


    import axios from 'axios';

export default class DetailUserPage extends Component{


    constructor(props){
        super(props);

        this.state = {
            image:"http://"
        }
    }

    componentDidMount(){
       
        const {params} = this.props.navigation.state; 
        const { nome, email, cpf, image, rua, bairro, num, cidade, rg, ra} = params;
        
        this.setState({nome});
        this.setState({email});
        this.setState({cpf});
        this.setState({image});
        this.setState({rua});
        this.setState({bairro});
        this.setState({num});
        this.setState({cidade});
        this.setState({rg});
        this.setState({ra})       
        
    }
        
    render(){
        
        
        
        return(
            <ScrollView >
               <View style={styles.card}>
                <View style={styles.containerImage}>
                    <Image style = {styles.image}
                     source = {{uri:this.state.image}}/>            
                </View>


                <View style={styles.containerFicha}>
                    <View style={styles.containerDados}>
                        <Line label = 'Nome' content = {this.state.nome}/>
                        <Line label = 'RA' content = {this.state.ra}/>
                        <Line label = 'CPF' content = {this.state.cpf}/>
                        <Line label = 'RG' content = {this.state.rg}/>
                        <Line label = 'Cidade' content = {this.state.cidade}/>
                        <Line label = 'Bairro' content = {this.state.bairro}/>
                        <Line label = 'Rua' content = {this.state.rua}/>
                        <Line label = 'Numero' content = {this.state.num}/>
                    </View>
                </View>
            </View>
            </ScrollView>
            
        );
    }

}
styles = StyleSheet.create({
    card:{
        backgroundColor:"#7ba2e0",
        flex:1,
        marginHorizontal:25,
        marginVertical:25,
        borderRadius:15
    },
    containerFicha:{
        flex:1,
        borderWidth:1,
        borderColor:"#c8daf7",
        marginHorizontal:10,
        marginVertical:20,
        borderRadius:10
        
    },
    image:{
        aspectRatio:1,
        width:250,
        borderRadius:360
        
    },
    containerImage:{
        marginHorizontal:10,
        marginVertical:15,
        alignSelf:"center",
    },
    containerDados:{
        marginHorizontal:10,
        marginVertical:8
    }
});