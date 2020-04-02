import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux';
import { Grid, Icon, Button} from '@ant-design/react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Animated,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get('window');
export default class Msg extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:''
        }
    }
    // takephoto = ()=>{
    //     ImageCropPicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //     }).then(image => {
    //         AsyncStorage.setItem('image',image.path);
    //         AsyncStorage.getItem('image').then((res)=>{
    //             this.setState({imageUrl:{uri:res}})
    //         })
    //     })
    // }
    render() {
        return (
            <SafeAreaView>
            <View style={styles.ban}>
                <Image source={require('../images/per-ban.png')} style={styles.pic}/>
                {/* <Button onPress={()=>{this.takephoto()}}>更换头像</Button> */}
            </View>
            <View>
                <Text style={{backgroundColor:"white"}}>
                    <Icon name="percentage" color="grey"/>
                    <Text style={{marginLeft:8,fontSize:18}}>我的个人中心</Text>
                </Text>
            </View>
            <View style={{backgroundColor:"white",marginTop:1,flexDirection:"row"}}>
                <View style={styles.card}>
                    <Icon name="setting" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>账户管理</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="home" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>收货地址</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="file" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的信息</Text>
                </View>
            </View>
            <View style={{backgroundColor:"white",flexDirection:"row"}}>
                <View style={styles.card}>
                    <Icon name="shop" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的订单</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="info" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的二维码</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="shake" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的积分</Text>
                </View>
            </View>
            <View style={{marginTop:8}}>
                <Text style={{backgroundColor:"white"}}>
                    <Icon name="percentage" color="grey"/>
                    <Text style={{marginLeft:8,fontSize:18}}>E族活动</Text>
                </Text>
            </View>
            <View style={{backgroundColor:"white",marginTop:1,flexDirection:"row"}}>
                <View style={styles.card}>
                    <Icon name="solution" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>居家维修</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="car" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>出行接送</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="skype" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的受赠人</Text>
                </View>
            </View>
            <View style={{backgroundColor:"white",flexDirection:"row"}}>
                <View style={styles.card}>
                    <Icon name="read" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的住宿优惠</Text>
                </View>
                <View style={styles.card}>
                    <Icon name="account-book" size="lg" style={styles.pic1}/>
                    <Text style={styles.word}>我的活动</Text>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity onPress={()=>Actions.mypublish()} >
                    <Icon name="redo" size="lg" style={styles.pic1}/>
                    <Text  style={styles.word}>我的发布</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    ban:{
        height:270,
        backgroundColor:"red"
    },
    pic:{
        width:150,
        height:150,
        marginLeft:165,
        marginTop:65
    },
    card:{
        width:160,
        height:90,
        paddingLeft:35
    },
    pic1:{
        marginTop:15,
        marginBottom:10,
        paddingLeft:18,
    },
    word:{
        fontSize:18
    }
})