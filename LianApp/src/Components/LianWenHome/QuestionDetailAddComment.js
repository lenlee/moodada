

'use strict';

import React, {Component} from 'react';
import {KeyboardAvoidingView ,TouchableOpacity,TextInput,View,StyleSheet,Dimensions} from 'react-native';

import {NavigationPage, Toast, ListRow, Label,Theme,Button} from 'teaset';
var {height, width} = Dimensions.get('window');
import MainLogic from '../../logic/MainLogic';
import LoginLogic from '../../logic/LoginLogic';
import LoadingView from '../CommonComp/LoadingView';

export default class QuestionDetailAddComment extends NavigationPage {

    static defaultProps = {
      ...NavigationPage.defaultProps,
      title: '回答问题',
      showBackButton: true,
    };
  
    constructor(props)
    {
        super(props);
        this.state = {
          height: 30,
          text: '',
          userAddr:this.props.userdata.userAddr,
          topicHash:this.props.userdata.topicHash,
          showLoading:false,
          BoardList:this.props.BoardList
        };
    }



    cauculateHeight (e) {
      const height = e.nativeEvent.contentSize.height > 30
        ? e.nativeEvent.contentSize.height+5
        : this.state.height;
        
      this.setState ({height});
    }

    _downloadLayout(e){
      this.setState({
          downloadY:e.nativeEvent.layout.y,
      });
  }

  _downLoadFocus(){
    let scroller = this.refs.scroller;
    iOS&& setTimeout(()=>{
        let y = this.state.downloadY - 1/3*Dev_height;//Dev_height为屏幕的高度
        scroller&&scroller.scrollTo({x:0, y:y, animated:true});
    },50);
}

_saveComment(e){
  var begin=new Date();
    if(this.state.text==''||this.state.text.trim()==''||this.state.text.length>145||this.state.text.length<=0){
        Toast.fail('输入内容有误');
        return;
    }
    this.setState({showLoading:true});

    LoginLogic.getCurrentUser().then((user)=>{
     // console.log('回答问题user', user);
      let userAddr = user.userAddr;
      if (user != null && typeof (user) != "undefined" && user.online){
        LoginLogic.getUserByUserAddr(userAddr).then((userInfo)=>{
         // console.log('回答问题usserInfo', userInfo);
          MainLogic.createSubTopic(this.state.topicHash,this.state.text,this.state.userAddr,userInfo.userPwd,userInfo.keystore,this.state.BoardList.subChainAddress,this.state.BoardList.rpcIp).then((resData)=>{
            //console.log('回答问题收到应答',resData);
            if(resData.isSuccess==1)
            {
              var end=new Date();
             var time=end-begin;
            // console.log("评论总消耗时间为="+time);
              this.setState({showLoading:false});
                Toast.success("评论成功");
                this.navigator.pop();
            }
            else if(resData.isSuccess==0)
            {
              this.setState({showLoading:false});
                Toast.fail('回答失败');
            }
            else
            {
              this.setState({showLoading:false});
                Toast.fail('回答已过期，不允许回答');
            }
        })
        })
      }
    })


   
}

    renderPage() {

     
     
     
        return (
          <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
            <View style={{height: 20}} />
            <ListRow  detail={<Label text={'已输入'+this.state.text.length+'个文字'}   type='title' />} />
            <ListRow  detail={
            <View style={styles.item}>
            <TouchableOpacity activeOpacity={1} style={styles.inputContainer} onPress={() => this.TextInput.focus()}>
  
                <TextInput
                    placeholder={'请输入回答(最多140字)'}
                    placeholderTextColor={'#bbbbbb'}
                    underlineColorAndroid={'transparent'}
                    multiline
                    ref={textInput => this.TextInput = textInput}
                    onContentSizeChange={e => this.cauculateHeight(e)}
                    style={[styles.input, { height: this.state.height }]}
                    maxLength={140}
                    onChangeText={(text) => this.setState({text})}
                />
            </TouchableOpacity>
        </View>
          }/>
            <View style={{height: 20}} />
           
            <ListRow  detail={<Button title='提交' type='primary' style={{margin:2,width:width-20,backgroundColor:'#00A29A',borderColor:'#00A29A'}} onPress={(e)=>this._saveComment(e)} />} />
  
            <View style={{ height: 60 }} />
            <LoadingView showLoading={ this.state.showLoading } loadingViewClick={()=>{this.setState({showLoading:false})}}/>
            </KeyboardAvoidingView>
        );
      

     
    }

    //充值
    renderRearge(){
          
    }
  
  }

  //样式定义
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  inputContainer: {
    height: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    margin:1
  },
  input: {
    paddingVertical: 0, 
    padding: 3, 
    fontSize: 16,
    maxHeight: 200
  },
  item:{
    paddingBottom: 6,
    marginBottom: 6,
    flex: 1
  },
})