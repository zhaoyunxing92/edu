//app.js
App({
 
  onLaunch: function () {
    // 显示动态数字
    wx.setTabBarBadge({
      index: 2,
      text: '9+'
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    Info: null,
    nominateList: [
      {
        "id": 1001,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "browse": 1050,
        "collect": 5080,
        "like": 87,
        "price": 0,
        "tyep": 2,
        "name": "电子税务局网上操电子税务局网上操作电子税务局网上操作作电子税务局网上",
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "德清地税"
        }
      }, {
        "id": 1002,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "企业所得税汇算清缴培训",
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "新昌地税"
        }
      }, {
        "id": 1003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "网上办税培训",
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }
    ],
    courseList:[
      {
        "id": 1001,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "browse": 1050,
        "collect": 5080,
        "like": 87,
        "price": 0,
        "tyep": 2,
        "name": "电子税务局网上操电子税务局网上操作电子税务局网上操作作电子税务局网上",
       
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "德清地税"
        }
      }, {
        "id": 1002,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "企业所得税汇算清缴培训",
       
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "新昌地税"
        }
      }, {
        "id": 1003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "网上办税培训",
       
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
       
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",    
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 410,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        "org": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }
    ]

  }
})