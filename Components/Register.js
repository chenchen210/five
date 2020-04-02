import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity, AsyncStorage,StyleSheet,ToastAndroid} from 'react-native';
import { Actions } from 'react-native-router-flux'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Grid, Icon } from '@ant-design/react-native';
import {Fetch} from './utils'

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            finish:false
        }
    }
    userinput=(text)=>{
        this.setState({username:text})
    }
    pwdinput=(text)=>{
        this.setState({pwd:text})
    }
    finish=()=>{
        if(this.state.username != '' && this.state.pwd != ''){
            this.setState({finish:true})
            Fetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd}
            )
            .then(res=>{
                if(res.data.num == '1'){
                    ToastAndroid.show('账户已存在!', ToastAndroid.TOP);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({finish:false})
                        Actions.login();
                    })
                }   
            })
        }else{
            ToastAndroid.show('输入不能为空!', ToastAndroid.TOP);
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{ alignItems: 'center' }}>
                    <View
                        style={styles.style1}>
                        <Icon name="user" color="red" />
                        <TextInput placeholder="用户名"
                            onChangeText={this.userinput}
                        />
                    </View>
                    <View
                        style={styles.style1}>
                        <Icon name="user" color="red" />
                        <TextInput
                            onChangeText={this.pwdinput}
                            placeholder="密码"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.style2}
                        onPress={this.finish}>
                        <Text>点击注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.style2}
                        onPress={() => Actions.pop()}>
                        <Text>已有账号？返回登陆</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.finish
                    ?<View style={{paddingTop:50,paddingLeft:208}}><Text>注册成功</Text></View>
                    :null
                }
            </View>
        )
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
        width: '80%',
        height: 40,
        backgroundColor: '#ccc',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
