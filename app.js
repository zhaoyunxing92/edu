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
        "cover": "http://mvimg2.meitudata.com/5abf7d38dd1633882.jpg",
        "playUrl":"http://mvvideo10.meitudata.com/5abdf80eef17c6493_H264_3.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "人鱼的眼泪史莱姆教程",
        "summary":"人鱼的眼泪史莱姆教程，今天配音了，嗓子还是哑手还是胖不要建议😑我还是你们的小阔爱咩，炸评最多送转发@★XuFei~许菲★手作 @菲菲姐夫 @璐璐吖✨ @美拍小助手 #i like 美拍##手工##史莱姆#",
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }, {
        "id": 1002,
        "cover": "http://mvimg1.meitudata.com/5abded5954d057076.jpg",
        "playUrl": "http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "You Are The Reason",
        "summary": "晚安翻唱#我甘愿翻山越岭，穿过海洋，只为陪伴着你。歌曲：You Are The Reason - 原唱：Calum Scott）",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1002,
        "cover": "http://mvimg1.meitudata.com/5abdf8a14048a8887.jpg",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "【🌊辰叔美拍】好久不见🤟🏾 更一个简短的牛头...",
        "summary":"【🌊辰叔美拍】好久不见🤟🏾 更一个简短的牛头...",
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }
    ],
    //课程列表
    courseList: [
      {
        "id": 1001,
        "cover": "http://mvimg11.meitudata.com/5abf6708db7b19559.jpg",
        "playUrl":"http://mvvideo11.meitudata.com/5abf6708db7ea5754.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 0,
        "tyep": 2,
        "name": "起喝优乐美的爱情",
        "summary": "一起喝优乐美的爱情，你要不要？#飞碟神曲#《有奶茶，中国人就不会害怕世界末日》片尾曲，改编自#周杰伦#《我不配》#音乐#",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1002,
        "cover": "http://mvimg1.meitudata.com/5abded5954d057076.jpg",
        "playUrl":"http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "You Are The Reason",
        "summary": "晚安翻唱#我甘愿翻山越岭，穿过海洋，只为陪伴着你。歌曲：You Are The Reason - 原唱：Calum Scott）",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1003,
        "cover": "http://mvimg11.meitudata.com/5a9a9b8121b441409.jpg",
        "playUrl":"http://mvvideo11.meitudata.com/5a9a9b80b7f603108_H264_13.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "无知并身无",
        "summary": "【科特KurtSchneider美拍】#晚安翻唱#我们年轻、无知并身无...",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1004,
        "cover": "http://mvimg10.meitudata.com/5abe26fb65b474150.jpg",
        "playUrl":"http://mvvideo10.meitudata.com/5abe27ac3ad862822.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "MAMAMOO",
        "summary": "【韩流音悦Tai美拍】#韩流新歌速递#마마무(MAMAMOO) ...",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1004,
        "cover": "http://mvimg10.meitudata.com/5abf6a2eecd4b9159.jpg",
        "playUrl":"http://mvvideo11.meitudata.com/5abf409ed68963024_H264_3.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "提了个琴美拍",
        "summary": "【提了个琴美拍】#音乐#HAVANA (Violin Cover by ...",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1004,
        "cover": "http://mvimg11.meitudata.com/5ac0edf1ddc0b9473.jpg",
        "playUrl":"http://mvvideo11.meitudata.com/5ac0ed7746b5b8217_H264_3.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "summary": "Tinashe",
        "name": "Tinashe - Me So Bad (Official Video) ft. Ty Dolla $ign, French Montana ",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }, {
        "id": 1002,
        "cover": "http://mvimg11.meitudata.com/5a589c7fbe9f17604.jpg",
        "playUrl": "http://mvvideo11.meitudata.com/5a589c54780d5578_H264_3.mp4",
        "browse": 3650,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "like": 157,
        "price": 85.7,
        "tyep": 2,
        "name": "You Are The Reason",
        "summary": "晚安翻唱#我甘愿翻山越岭，穿过海洋，只为陪伴着你。歌曲：You Are The Reason - 原唱：Calum Scott）",
        "author": {
          "id": "user_id",
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
        }
      }
    ],
    //首页轮播图数据
    swiperList: [{
      "id": 1002,
      "cover": "http://mvimg1.meitudata.com/5abded5954d057076.jpg",
      "playUrl": "http://mvvideo10.meitudata.com/5abded59446e96967_H264_13.mp4",
      "browse": 3650,
      "collect": 87,
      "op": 7487,
      "share": 9879,
      "like": 157,
      "price": 85.7,
      "tyep": 2,
      "name": "You Are The Reason",
      "summary": "晚安翻唱#我甘愿翻山越岭，穿过海洋，只为陪伴着你。歌曲：You Are The Reason - 原唱：Calum Scott）",
      "author": {
        "id": "user_id",
        "name": "sunny",
        "cover": "https://gitee.com/uploads/56/1167256_sunny9.png"
      }
    },
      {
        "id": 10001,
        "cover": "http://mvimg10.meitudata.com/5abdef97d617e8241.jpg",
        "playUrl": "http://mvvideo10.meitudata.com/5abdef97ca4d91880_H264_13.mp4",
        "name": "Alyson Stoner",
        "summary": "Evolution of K-POP - 翻唱制作：Alyson Stoner ",
        "like": 1580,
        "collect": 587,
        "op": 87,
        "share": 79,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      },
      {
        "id": 10002,
        "cover": "http://mvimg11.meitudata.com/5a8818e47fe779475.jpg",
        "playUrl": "http://mvvideo10.meitudata.com/5a8818309202a409_H264_13.mp4",
        "name": "Medicine",
        "summary": "我知道没有你我也很坚强，你的离开不会让我伤心太久，我已经不在乎了，你不能再左右我的心了。（歌曲：Medicine - 原唱：Kelly Clarkson - 翻唱制作：KHS）",
        "like": 10,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      },
      
      {
        "cover": "http://mvimg10.meitudata.com/5aaa6470d3b959174.jpg",
        "playUrl": "http://mvvideo11.meitudata.com/5aaa6470c82e81959_H264_13.mp4",
        "id": 10005,
        "name": "The Middle",
        "summary": "亲爱的，你为何不愿意做出一点让步，做出一点牺牲，我快要被逼疯了",
        "like": 8810,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }, {
        "cover": "http://mvimg11.meitudata.com/5a4f81c39fa589605.jpg",
        "playUrl": "http://mvvideo10.meitudata.com/5a4f7d70ef4f42024_H264_3.mp4",
        "id": 10004,
        "name": "Madilyn Bailey",
        "summary": "来自英国的两位抒情派歌手，你们喜欢他俩组合吗？（歌曲：ADELE vs SAM SMITH Mashup - 翻唱制作：Madilyn Bailey )",
        "like": 8810,
        "collect": 87,
        "op": 7487,
        "share": 9879,
        "author": {
          "id": 1000,
          "name": "sunny",
          "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        }
      }
    ],
    // 课程发言数据
    courseOpinions: [
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        "content": "视频不错",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "abpj2gdu",
        "cover": "https://gitee.com/uploads/56/1167256_sunny9.png",
        "content": "测试数据",
        "likes": 4,
        "time": "2018-02-06"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "曾经的我有很多兄弟姐妹，他们流入世界各地，为人类造福，可是快乐总是那么的短暂",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "曾经的我有很多兄弟姐妹，他们流入世界各地，为人类造福，可是快乐总是那么的短暂",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "曾经的我有很多兄弟姐妹，他们流入世界各地，为人类造福，可是快乐总是那么的短暂",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "我的兄弟姐妹流着泪默默祈祷，却无济于事。人们把自然水随便的用，大人洗完菜后一大盆还很干净的水就泼在地上，小孩在水里踩，把水放在杯子里，加点肥皂水吹泡泡，吹不了就倒掉重做，一直做好才行，浪费了多少水！",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "我的兄弟姐妹流着泪默默祈祷，却无济于事。人们把自然水随便的用，大人洗完菜后一大盆还很干净的水就泼在地上，小孩在水里踩，把水放在杯子里，加点肥皂水吹泡泡，吹不了就倒掉重做，一直做好才行，浪费了多少水！",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "水，是生命之源；水，是造福人类的；水，为人类无私奉献，你们却眼睁睁地看着水慢慢消失",
        "likes": 8,
        "time": "2018.02.25"
      },
      {
        "id": "1",
        "name": "sunny",
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "content": "水到最后没有了，你们只能哭泣，我是最后一滴水，你们哭泣的泪水，请保护水源，不浪费。否则，连我这最后一滴水，也将消失在那茫茫的宇宙中。",
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