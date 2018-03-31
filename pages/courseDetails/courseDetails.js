// pages/courseDetails/courseDetails.js
const util = require('../../utils/util.js')
const app = getApp()
Page({

  data: {
    course:{},
    selected: true,
    selected1: false,
    courseOpinions:[],//课程发言
    avtiveItem:0,//当前点击的菜单
  },
  // 切换item
  clickItem: function (env){
    let index = env.currentTarget.dataset.index;
    this.setData({
      avtiveItem: index
    })  
  },

  onLoad: function (options) {
    let item;
    if (undefined !== options.item){
      item = JSON.parse(options.item);
      this.setData({
        course: item
      })    
    } 
    wx.setNavigationBarTitle({
      title: util.getValue(item, 'name', '播放课程')
    })

    //  设置发言数据
    this.setData({
      courseOpinions: app.globalData.courseOpinions
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.videoCtx = wx.createVideoContext('myVideo');
    this.vuiVideo = this.selectComponent("#video");
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
