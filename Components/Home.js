import React, { Component } from 'react'
import {Actions} from 'react-native-router-flux';
import { Grid, Icon ,Carousel} from '@ant-design/react-native';
import {
    View,
    Text,
    Button,
    SafeAreaView,
    TextInput,
    Image,
    StyleSheet
} from 'react-native';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{flexDirection:'row',backgroundColor:'red'}}>
                    <Image style={{width:25,height:25,marginTop:5}} source={require('../images/search.png')}/>
                    <TextInput placeholder="请输入商品名称"
                        style={{ height:40,fontSize:18,width:410}}/>
                    <Icon name="shop" style={{color:'black'}}/>
                </View>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    <View style={[styles.containerHorizontal]}>
                        <Image source={require('../images/4.jpg')} style={{width:480,height:250}}/>
                    </View>
                    <View style={[styles.containerHorizontal]} >
                    <Image source={require('../images/banner.png')} style={{width:480,height:250}}/>
                    </View>
                    <View style={[ styles.containerHorizontal,]} >
                    <Image source={require('../images/3.jpg')} style={{width:480,height:250}}/>
                    </View>
                </Carousel>
                <View flexDirection="row" style={styles.box}>
                    <Image source={(require('../images/1-1.png'))} style={styles.pic}/>
                    <Text style={styles.word}>居家维修保养</Text>
                    <Text style={{fontSize:34, color:"grey", lineHeight:60,marginLeft:200}}>></Text> 
                </View>
                <View flexDirection="row" style={styles.box}>
                    <Image source={(require('../images/1-2.png'))} style={styles.pic}/>
                    <Text style={styles.word}>住宿优惠</Text>
                    <Text style={{fontSize:34, color:"grey", lineHeight:60,marginLeft:237}}>></Text>
                </View><View flexDirection="row" style={styles.box}>
                    <Image source={(require('../images/1-3.png'))} style={styles.pic}/>
                    <Text style={styles.word}>出行接送</Text>
                    <Text style={{fontSize:34, color:"grey", lineHeight:60,marginLeft:229}}> > </Text>
                </View><View flexDirection="row" style={styles.box}>
                    <Image source={(require('../images/1-4.png'))} style={styles.pic}/>
                    <Text style={styles.word}>E族活动</Text>
                    <Text style={{fontSize:34, color:"grey", lineHeight:60,marginLeft:237}}> > </Text>
                </View>
                <View style={{marginTop:30,width:430,marginLeft:25}}>
                    <Button title="发布需求" color="red"/>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#fff',
      height:240
    },
    containerHorizontal: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
    },
    containerVertical: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
    },
    box:{
        backgroundColor:"white",
        marginTop:7,
        padding:10
    },
    pic:{
        width:60,
        height:60,
        marginLeft:10
    },
    word:{
        fontSize:20,
        lineHeight:60,
        marginLeft:25,
        color:"grey"
    }
  });