// pages/course/course.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    wx.setNavigationBarTitle({
      title: '课程'
    })
    this.setData({
      courseList: app.globalData.courseList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
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
  
  },
  //事件处理函数
  goToPath: function (env) {
    wx.navigateTo({
      url: '/pages/courseDetails/courseDetails?item=' + JSON.stringify(env.currentTarget.dataset.item)
    })
  }

})