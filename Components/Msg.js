import React, { Component } from 'react'
import {
    View, 
    Text, 
    AsyncStorage,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button
} from 'react-native';
import { Grid, Icon} from '@ant-design/react-native';
export default class LocalPage extends Component {
    constructor(){
        super();
        this.state = {
            tits: [],
            page:1,
            a:[],
            b:[]
        }
    }
    storeData = async ()=>{
        await AsyncStorage.setItem('userName','helloworld',
            ()=>{console.log('store success')}
        )
    }
    getData = ()=>{
        AsyncStorage.getItem('userName')
        .then((res)=>console.log(res));
    }
    getTitle = ()=>{
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
            })
    }
    lesspage=()=>{
        var p = this.state.page;
        if(p>1){
            p--;
            this.setState({
                page:p
            })
        }else{
            ToastAndroid.show('已超出正常范围',ToastAndroid.TOP);
        }
    }
    addpage=()=>{
        var p = this.state.page;
        p++;
        this.setState({
            page:p
        })
    }

    render() {
        return (
            <View>
                {/* <View style={styles.top}>
                    <View style={styles.topCenter}>
                        <Text style={styles.topCenterText}>我的发布</Text>
                    </View>
                </View>
                <Button title="请求title" onPress={this.getTitle}/>
                <ScrollView style={{height:600}}> */}
                    <View>
                        {
                            this.state.tits.map((item)=>(
                            <View  style={styles.pices}>
                                <View style={{ width: '60%',marginBottom:10}}>
                                    <Text style={{fontSize:17}}>
                                        {(item.title).length > 15 ? (item.title).substring(0, 15) + "..." : (item.title)}
                                    </Text>
                                </View>
                                <View style={{ width:'20%',marginLeft:30}}>
                                    <Text style={{ fontSize: 15 }}>{(item.create_at).substring(0, 10)}</Text>
                                </View>
                                <View style={{ width: '20%',marginLeft:10}}>
                                    <Text style={{ fontSize: 15}}>已回复</Text>
                                    {/* <Text style={{ fontSize: 15,color:"red"}}>待回复</Text> */}
                                </View>
                            </View>
                            ))
                        }   
                    </View>
                {/* </ScrollView> */}
                    <View style={{flexDirection:"row",paddingLeft:70,marginTop:10}}>
                        <View>
                            <Button title="上一页" style={{width:'10%'}} onPress={()=>{this.lesspage()}}></Button>
                        </View>
                        <Text style={{fontSize:18,marginLeft:80}}>第{this.state.page}页</Text>
                        <View style={{marginLeft:90}}>
                            <Button title="下一页" style={{width:'10%'}} onPress={()=>{this.addpage()}}></Button>
                        </View>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    pices:{
        flexDirection:'row'
    }
})