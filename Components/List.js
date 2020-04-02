import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

export default class List extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    return (
      <View>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <View style={{backgroundColor:'white',flexDirection:'row'}}>
          <TextInput placeholder="请输入商品名称"
            style={{ height:40,borderColor:'gray',borderWidth:1,fontSize:18,width:450}}></TextInput>
          <Image style={{width:30,height:30}} source={require('../images/search.png')}></Image>
        </View>
        <View style={styles.piece}>
          <Text style={styles.title1}>综合</Text>
          <Text style={styles.title}>销量</Text>
          <Text style={styles.title}>新品</Text>
          <Text style={styles.title}>价格</Text>
          <Text style={styles.title}>信用</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/shj.jpg')}></Image>
            <Text style={styles.current}>上好佳薯片s</Text>
            <Text style={styles.price}>36</Text>
          </View>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/ycq.jpg')}></Image>
            <Text style={styles.current}>上好佳洋葱圈</Text>
            <Text style={styles.price}>36</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/shj.jpg')}></Image>
            <Text style={styles.current}>上好佳薯片s</Text>
            <Text style={styles.price}>36</Text>
          </View>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/ycq.jpg')}></Image>
            <Text style={styles.current}>上好佳洋葱圈</Text>
            <Text style={styles.price}>36</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/shj.jpg')}></Image>
            <Text style={styles.current}>上好佳薯片s</Text>
            <Text style={styles.price}>36</Text>
          </View>
          <View style={styles.card}>
            <Image style={{width:200,height:200}} source={require('../images/ycq.jpg')}></Image>
            <Text style={styles.current}>上好佳洋葱圈</Text>
            <Text style={styles.price}>36</Text>
          </View>
        </View>
      </SafeAreaView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  piece:{
    backgroundColor:'white',
    width:480,
    height:100,
    flexDirection:'row',
  },
  title1:{
    color:'red',
    fontSize:20, 
    margin: 27,
    padding:0
  },
  title:{
    padding:0,
    fontSize:20, 
    margin:27
  },
  box:{
    padding:5,
    flexDirection:'row'
  },
  card:{
    backgroundColor:'white',
    margin:10,
    padding:5,
  },
  current:{
    fontSize:18,
    padding:5
  },
  price:{
    fontSize:17,
    color:'red',
    padding:5
  }
});

