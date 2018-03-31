//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    iconType:'',
    topData: [],
    courseList:{},
    nominateList:[],/*推荐课程列表*/
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  goToPath: function(env) {
    wx.navigateTo({
      url: '/pages/courseDetails/courseDetails?item=' + JSON.stringify(env.currentTarget.dataset.item)  
    })
  },
  onLoad: function () {
    wx.setTopBarText({
      text: 'hello, world!'
    })
    //首页显示分享
    wx.showShareMenu({
      withShareTicket: false
    })
    // 显示动态数字
    wx.setTabBarBadge({
      index: 2,
      text: '9+'
    })
   
    //推荐列表
    this.setData({
      nominateList: app.globalData.nominateList,
      hotList: app.globalData.nominateList,
      topData: app.globalData.swiperList,
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: "税小课"
    })
  },
  //跳转
  _navigateTo(env) {
    let path ="/pages/nominate/nominate";
    let title = env.currentTarget.dataset.title;
    let type = env.currentTarget.dataset.type;
    wx.navigateTo({
      url: path + '?title=' + title+'&type='+type
    })
  }
})
