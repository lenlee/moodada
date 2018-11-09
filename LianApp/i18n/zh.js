export default {
snapQA:'链问',
accountAddr:'账号地址',
amount:'数值',
moac_balance:'moac余额',
coin_balance:'coin余额',
block_Info:'主链高度/子链高度/刷新计时',

ACTION: {
    recharge:'充值',
    withdraw:'提币',
    confirm:'确定',
    cancel:'取消',
    recover:'恢复',
    submit:'提交',
    login:'登陆',
    logout:'退出登陆',
    transfer:'转账',
    exchange:'兑换',
    sign_up:'注册'

},

INFO: {
    footerRefreshingText:'玩命加载中 >.<',
    footerFailureText:'我擦嘞，居然失败了 =.=!',
    footerNoMoreDataText:'-我是有底线的-',
    footerEmptyDataText:'-好像什么东西都没有-',
    blockChain_Info:'区块链信息'
},

ALERT: {
    recharge_confirm: '确定充值吗?',
    withdraw_confirm: '确定提币吗?',
    transfer_confirm:'确定要转账吗?'
},

SUCCESS: {
    userInfo_clip:'已复制到剪切板，请将剪切板中的内容粘贴到您要备份的位置',
    accountAddr_clip:'账号地址已复制到剪切板，请将剪切板中的内容粘贴到您要备份的位置',
    recharge_request_sent:'充值请求已发送,大约几分钟后到账，请注意查看刷新计时',
    withdraw_request_sent:'提币请求已发送,大约几分钟后到账，请注意查看刷新计时',
    transfer_request_sent:'转账请求已发送,大约几分钟后到账，请注意查看',
    cancel_success:'取消成功',
    login_success:'登录成功',
    register_success:'注册成功，请备份好账户地址和keyStore'
},

FAIL: {
    recharge_fail:'充值失败，请重新尝试',
    withdraw_fail:'提币失败，请重新尝试',
    withdraw_fail:'转账失败，请重新尝试',
    not_logged_in:'请先登录',
    login_fail:'登录失败',
    input_amount_exception:'输入的数值有误',
    insufficient_moac_balance:'输入的moac值不能大于拥有的数量',
    insufficient_coin_balance:'输入的coin值不能大于拥有的数量',
    no_available_export_keyStore:'未获取到keyStore值，请切换keyStore登录',
    wrong_keyStore:'keyStore输入有误',
    exception_keyStore:'异常:keyStore输入有误',
    empty_keyStore:'keystore不允许为空值',
    incorrect_password:'密码错误',
    empty_password:'密码不能输入空值',
    length_password:'输入的密码长度不少于12位',
    unmatch_password:'两次输入密码不一致',
    incorrect_UP:'用户名或密码输入有误',
    empty_dist:'转入地址不能为空',
    wrong_account_addr:'账户地址输入有误'
},

REMINDER:{
    reminder:'友情提示',
    reminder_text1:'每个子链应用板块中的coin不能在其他版块中使用，需要使用主链中的MOAC进行兑换',
    reminder_text2:'1:提问后在子链高度变化后刷新显示',
    reminder_text3:'2:问题过期后仅自己可见'
},

PLACEHOLDER: {
    input_moac_exchange:'请输入参与兑换的moac币值',
    input_coin_exchange:'请输入参与兑换的coin币值',
    input_coin_award:'请输入悬赏coin值',
    input_dist_address:'请输入要转入的账户地址',
    input_coin_transfer:'请输入转账的coin币值',
    input_username:'请输入用户名',
    input_password:'请输入密码',
    input_keyStore:'请输入keyStore'
},

MainMenu:{
    press_Exit:'再按一次退出应用',
    section_Unavailable: '当前版块暂不可用，请稍后重试！',
    backup_node_connected: '备用节点服务连接成功',
    backup_remote_sever_connected:'备用远程服务连接成功！',
    Exception_obtainChainInfo:'获取链信息异常！',
    what_is_interested:'请选择您感兴趣的话题'
},

Lmain:{
    question:'提问',
    question_list:'提问录',
    profile:'我的'
},

Profile:{
    about:{
        about:'关于链问',
        version:'版本号:'
    },
    accountHistory:{
        record:'提币充值记录',
        completed:'已完成'
    },
    accountInfo: {
        accountInfo:'账户信息',
        exchange_rage:'兑换比率',
        export_keyStore:'导出keystore',
        export_accountAddr:'导出账号地址'
    },
    changeAccount:{
        switch_account:'账号切换',
        new_account_login:'换个新账号登录'
    },
    mainChain:{
        mainChain_info:'主链信息'
    },
    personalCenter: {
        personal_center:'个人中心'
    },
    transferAccounts:{
        user_transfer:'账户转账',
        dist_address:'目标地址',
        transfer_amount:'转账数值'
    }
},

    LoginView:{
        changeAccountLogin:{
            keyStoreLogin:'切换keyStore登陆'
        },
        keyStoreLoginView:{
                    keyStoreLogin:'keyStore登陆',
                    localLogin:'切换本地登陆'
                },
        localLoginView:{
                    localLogin:'本地登陆'
        }

    }

}