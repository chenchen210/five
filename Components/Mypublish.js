import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux';
import { TabBar } from '@ant-design/react-native';
import {View, 
        Text,
        StyleSheet,
        ScrollView
    } from 'react-native';

export default class Mypublish extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(preProps,PreState){
        if(this.state.page != PreState.page){
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    lastpage=()=>{
        var p = this.state.page;
        if(p>1){
            p--;
            this.setState({
                page:p
            })
        }else{
            ToastAndroid.show('超出范围',ToastAndroid.TOP);
        }
    }
    nextpage=()=>{
        var p = this.state.page;
        p++;
        this.setState({
            page:p
        })
    }
    less=()=>{
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
    add=()=>{
            var p = this.state.page;
            p++;
            this.setState({
                page:p
            })
    }

    render() {
        return (
            <View>
                {/* <Text>123456</Text> */}
                <View>
                    {
                        this.state.tits.map((item) => (
                            <View style={styles.listEach}>
                                <View style={{ width: '55%', paddingLeft: 8 }}>
                                    <Text style={{ fontSize: 15 }}>
                                        {(item.title).length > 15 ? (item.title).substring(0, 15) + "..." : (item.title)}
                                    </Text>
                                </View>
                                <View style={{ width: '30%', paddingLeft: 8 }}>
                                    <Text style={{ fontSize: 15 }}>{(item.create_at).substring(0, 10)}</Text>
                                </View>
                                <View>
                                    this.a = <Text style={{ color: '#000', fontSize: 15 }}>已回复</Text>;
                                    this.b = <Text style={{ color: 'red', fontSize: 15 }}>待回复</Text>;
                                    this.answer = parseInt(Math.random() * 10) % 2 === 0 ? this.a : this.b;
                                </View>
                                <View>
                                <Button style={styles.btnl} onPress={() => { this.less() }}>上一页</Button>
                                <Button style={styles.btnr} onPress={() => { this.add() }}>下一页</Button>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}