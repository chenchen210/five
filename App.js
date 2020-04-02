import React ,{useState,useEffect} from 'react';
import {StyleSheet,AsyncStorage,View ,Lightbox, Modal} from 'react-native';
import {Router,Overlay,Scene,Tabs} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import List from './Components/List';
import Home from './Components/Home';
import Person from './Components/Person';
import Mypublish from './Components/Mypublish';
import Start from './Components/Start';
import Register from './Components/Register';
import Login from './Components/Login'


const App: () => React$Node = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);

	let init =()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}

	useEffect(()=>{
		init();
	},[])
	
	let afterInstall = ()=>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return  <View style={{flex:1}}>
					<Start afterInstall={afterInstall} />
				</View>
	}
  return (
    <Router>
      <Overlay>
      <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox">
      <Scene key='root'>
        <Tabs key='tabbar' hideNavBar activeTintColor='red'>
        <Scene key='个人中心'
            icon={
              ({focused})=><Icon 
                color={focused?'red':'grey'} 
                name="skype"
              />
            }
        >
          <Scene key='个人中心'hideNavBar component={Person}/>
          <Scene key='mypublish' component={Mypublish} title="我的发布"/>
        </Scene>
          <Scene key='首页' component={Home} hideNavBar
           icon={
            ({focused})=><Icon 
              color={focused?'red':'grey'} 
              name='inbox'
            />
           }
          />
          <Scene key='商品分类'
            icon={
              ({focused})=><Icon 
                color={focused?'red':'grey'} 
                name="shop"
              />
            }
            component={List}
          />
          <Scene key='购物车'
            component={MyTs}
            icon={
              ({focused})=><Icon 
                color={focused?'red':'grey'} 
                name="bank"
              />
            }
          />
        </Tabs>
      </Scene>
      <Scene initial={!isLogin}  key="login" component={Login} />		
			<Scene key="register" component={Register} />   
      </Lightbox>
      </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
