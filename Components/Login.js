import React, {Component} from 'react';
import {View, Text, TextInput, AsyncStorage, TouchableOpacity,StyleSheet,BackHandler,ToastAndroid} from 'react-native';
import {Icon} from '@ant-design/react-native';
import { Actions} from 'react-native-router-flux';
import {Fetch} from './utils'

export default class Login extends Component {
        constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
            now:0
            }
        }

    
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username != '' && this.state.pwd != ''){
          this.setState({isloading:true})
          Fetch.post('/login',{
              username:this.state.username,
              pwd:this.state.pwd}
          ).then(res=>{
            if(res.data.num == '1'){
              this.setState({isloading:false})
              ToastAndroid.show('账户已经存在!', ToastAndroid.TOP);
            }else{
              AsyncStorage.setItem('user',JSON.stringify(res.data))
                  .then(()=>{
                      this.setState({isloading:false})
                      Actions.home();  
                  })
            }
              
          })
      }else{
        ToastAndroid.show('输入不能为空!', ToastAndroid.TOP);
      }
    } 


  render() {
    BackHandler.addEventListener('back',()=>{
      if(new Date().getTime()-this.state.now <2000){
        BackHandler.exitApp()
      }else{
        ToastAndroid.show('确定退出吗',100);
        this.state.now =new Date().getTime();
        return true;
      }
    });
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={styles.style1}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={styles.style1}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={styles.style2}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.style2}
                onPress={()=>Actions.register()}>
                <Text>还没有账号？去注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View style={{paddingTop:50,paddingLeft:208}}><Text>正在登录。。。</Text></View>
            :null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style1:{
      width: '80%',
      marginRight: 10,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
  },

  style2:{
      width: '80%',
      height: 40,
      backgroundColor: '#ccc',
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center'
  }
})