import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';

export default class Start extends Component {
    start= ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    }
    render() {
        return (
            <Swiper showsButtons={false}  >
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../images/5-1.jpg')} />
                </View>
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../images/5-2.jpg')} />
                </View>
                <View style={styles.style1} >
                    <Image style={styles.img} source={require('../images/5-3.jpg')} />
                    <TouchableOpacity style={styles.style2} onPress={this.start} >
                        <Text style={{color:'#fff'}} >开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    style1:{
        flex:1,
        height:'100%',
        alignItems:'center'
    },
    style2:{
        position:'absolute',
        bottom:150,
        width:120,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:20
    }
})

