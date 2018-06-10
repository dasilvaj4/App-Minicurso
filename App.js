import { StackNavigator } from 'react-navigation';

import CadastroPage from './src/pages/CadastroPage';
import LoginPage from './src/pages/LoginPage';
import ListUserPage from './src/pages/ListUserPage';
import DetailUserPage from './src/pages/DetailUserPage';

export default StackNavigator({
  'LoginPage':{
    screen: LoginPage,
  },
  'ListUserPage':{
    screen: ListUserPage,
  },
  'CadastroPage':{
    screen: CadastroPage,
  },
  'DetailUserPage':{
    screen: DetailUserPage,
  }
},{
    navigationOptions:{
      title: "GoNative!",
      headerStyle:{
        backgroundColor:"#6ca2f7",
        borderBottomWidth:1,
        borderBottomColor:"#c5c5c5ff",  

      },
      headerTitleStyle:{
        color:"white",
        fontSize:30,
        alignSelf:'center'
      }
    }  
});
 


//export default CadastroPage;