const util = require('../../utils/util.js')
const app = getApp()
Page({

  // 切换item
  clickItem: function (env) {
    let index = env.currentTarget.dataset.index;
    this.setData({ avtiveItem: index });
  },
  data: {
    user: [],//用户主页
    avtiveItem: 1,//当前点击的菜单
    infos:[
      {
        "time": '刚刚',
        "msg":"收藏了课程《java初级开发》",
        "id":1000
      },
      {
        "time": '三天前',
        "msg": "关注了用户abc",
        "id": 1000
      },
      {
        "time": '3天前',
        "msg": "收藏了课程《java初级开发》",
        "id": 1000
      },
      {
        "time": '1个月前',
        "msg": "收藏了课程《java初级开发》",
        "id": 1000
      },
      {
        "time": '1个月前',
        "msg": "收藏了课程《java初级开发》",
        "id": 1000
      },
      {
        "time": '1个月前',
        "msg": "收藏了课程《java初级开发》",
        "id": 1000
      },
      {
        "time": '1个月前',
        "msg": "发布了课程《java初级开发》",
        "id": 1000
      },
      {
        "time": '1个月前',
        "msg": "收藏了课程《java初级开发》",
        "id": 1000
      }
      
    ],//动态
    collect:[],
    course:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  设置发言数据
    let item = JSON.parse(options.item);
    console.log(item)
    this.setData({
      user: item
    })
    wx.setNavigationBarTitle({
      title: util.getValue(item, 'name', '他的主页')
    })

    this.setData({
      collect: app.globalData.nominateList,
      course: app.globalData.courseList,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})