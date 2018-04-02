//app.js
App({

  onLaunch: function () {
    // 显示动态数字
    wx.setTabBarBadge({
      index: 2,
      text: '9+'
    })
    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res.code)
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res.userInfo)
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    // Info: null,
    // 推荐课程
    nominateList: [
      {
        "id": 1001,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "电子税务局网上操电子税务局网上操作电子税务局网上操作作电子税务局网上",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "德清地税"
        }, "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
        }
      }, {
        "id": 1002,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "企业所得税汇算清缴培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "新昌地税"
        },
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
        }
      }, {
        "id": 1003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }, "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
        }
      }
    ],
    //课程列表
    courseList: [
      {
        "id": 1001,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "电子税务局网上操电子税务局网上操作电子税务局网上操作作电子税务局网上",
        "summary": "电子税务局网上操电子税务局网上操作电子税务局网上操作作电子税务局网上",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "德清地税"
        }
      }, {
        "id": 1002,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "企业所得税汇算清缴培训",
        "summary": "企业所得税汇算清缴培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "新昌地税"
        }
      }, {
        "id": 1003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        "summary": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        "summary": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "网上办税培训",
        "summary": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "summary": "网上办税培训",
        "name": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }, {
        "id": 1004,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idHoVxwnADB5aJXzGCMisHBZ.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "summary": "网上办税培训",
        "name": "网上办税培训",
        "source": {
          "id": "org_id",
          "cover": "https://oss-edu-prod.dingtax.cn/logo/idFPrHLsmt2ZLrre6fKacA8.png",
          "name": "杭州地税"
        }
      }
    ],
    //首页轮播图数据
    swiperList: [
      {
        "id": 10001,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "playUrl": "http://v.dingtax.cn/df93b2fcbc3141ae8b5afb1ded5049f7/4974f2cda0294ab8b86ca5f2c1b5087e-S00000001-100000.m3u8",
        "name": "丁税宝宣传视频",
        "summary": "《浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。",
        "like": 1580,
        "collect": 587,
        "op": 87,
        "share": 79,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        }
      },
      {
        "id": 10002,
        "cover": "https://oss-edu-test.dingtax.cn/cover/id5po55Yk7nCtvYuts2gzsAe.jpg",
        "playUrl": "http://v.dingtax.cn/df93b2fcbc3141ae8b5afb1ded5049f7/4974f2cda0294ab8b86ca5f2c1b5087e-S00000001-100000.m3u8",
        "name": "丁税宝宣传视频",
        "summary": "《浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。",
        "like": 10,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        }
      },
      {
        "id": 10003,
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "playUrl": "http://v.dingtax.cn/df93b2fcbc3141ae8b5afb1ded5049f7/4974f2cda0294ab8b86ca5f2c1b5087e-S00000001-100000.m3u8",
        "name": "丁税宝宣传视频",
        "summary": "《浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。",
        "like": 8810,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        }
      },
      {
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idJVBp7XSuJonvyTnsN6UWAC.png",
        "playUrl": "http://v.dingtax.cn/df93b2fcbc3141ae8b5afb1ded5049f7/4974f2cda0294ab8b86ca5f2c1b5087e-S00000001-100000.m3u8",
        "id": 10005,
        "name": "丁税宝宣传视频",
        "summary": "《浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。。",
        "like": 8810,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        }
      }, {
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "playUrl": "http://v.dingtax.cn/df93b2fcbc3141ae8b5afb1ded5049f7/4974f2cda0294ab8b86ca5f2c1b5087e-S00000001-100000.m3u8",
        "id": 10004,
        "name": "丁税宝宣传视频",
        "summary": "《浙江国地税联合电子税务局》网上办税操作说明：新办企业用户注册、税务登记信息查询、申报缴款注意事项、纳税证明文书打印等。重点讲解网上办税系统的常用功能，解答纳税人相关问题，进一步提升网上办税效率。",
        "like": 8810,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        }
      }
    ],
    // 课程发言数据
    courseOpinions: [
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "abpj2gdu",
        "cover": "http://static.dingtalk.com/media/lADOpdce-M0CMM0C7A_748_560.jpg",
        "content": "除了通过钉钉打开支付宝办税做12万申报，直接通过支付宝怎么打开？ 刚走神了[认真]",
        "likes": 4,
        "time": "2018-02-06"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "尊敬的纳税人，本次直播已经结束，明天即可开始点播。点播流程：打开钉钉-点击“工作”-选择“德清地税掌上办税服务厅”-点击“财税直播间”",
        "likes": 8,
        "time": "2018.02.25"
      }
    ],
    //课程课件
    courseFiles: [
      {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      },
      {
        "name": "RDS类数据库设计规范-征求稿V2.pdf",
        "url": "https://dingtax-edu.oss-cn-hangzhou.aliyuncs.com/test/RDS%E7%B1%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83-%E5%BE%81%E6%B1%82%E7%A8%BFV2.pdf"
      }, {
        "name": "开发手册阿里巴巴Java开发手册阿里巴巴Java开发手册（终极版）.pdf",
        "url": "https://dingtax-edu.oss-cn-hangzhou.aliyuncs.com/test/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4Java%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%EF%BC%88%E7%BB%88%E6%9E%81%E7%89%88%EF%BC%89.pdf"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }, {
        "name": "打开调试模式才能打开该文件.docx",
        "url": "https://oss-edu-test.dingtax.cn/doc/idMkJUQxqCrx6rBtnrzkHUHo.docx"
      }
    ]
  }
})