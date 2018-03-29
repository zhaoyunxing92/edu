//index.js
//获取应用实例
const app = getApp()
Page({
  
  data: {
    iconType:'',
    topData: [ 
      {
        "id": 10001,
        "cover": "http://v.dingtax.cn/snapshot/8d1d9d205ae348438e6279cb9de7368700005.jpg",
        "playUrl": "http://v.dingtax.cn/8d1d9d205ae348438e6279cb9de73687/fb71c58083bb482b9f92888d8c3d32f0-S00000001-200000.mp4"
      },
      {
        "id": 10002,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "playUrl": "http://v.dingtax.cn/6832c9c8323940bfb172b8ddc81a55f0/57971d6f1af8471487ce449d42710396-S00000001-200000.mp4"
      },
      {
        "id": 10003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "playUrl": "http://v.dingtax.cn/6a5d121b4b464ca3a9e427ff0d2efee3/7e83bbc5fd454579bedb91e9a0b56f70-S00000001-200000.mp4"
      },
      {
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idJVBp7XSuJonvyTnsN6UWAC.png",
        "playUrl": "http://v.dingtax.cn/6a5d121b4b464ca3a9e427ff0d2efee3/7e83bbc5fd454579bedb91e9a0b56f70-S00000001-200000.mp4",
        "id": 10005
      }, {
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "playUrl": "http://v.dingtax.cn/30be08f2f5b74ff58042399c96557979/c2d5487bc48348d0b5404cc7ffe4c7a0-S00000001-200000.mp4",
        "id": 10004
      }
    ],
    nominateList:[],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.i = this.selectComponent("#icons");
    this.dialog = this.selectComponent("#dialog");
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
      nominateList: app.globalData.nominateList
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
  }

})
