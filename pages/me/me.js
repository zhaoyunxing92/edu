const app = getApp()
Page({
  // 切换item
  clickItem: function (env) {
    let index = env.currentTarget.dataset.index;
    this.setData({ avtiveItem: index });
  },
  data: {
    avtiveItem: 1,
    user: [],
    collect: [],
    course: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的'
    })
    
    //课程列表
    this.setData({
      user: { id: 1000, name: "sunny", cover: "https://gitee.com/uploads/56/1167256_sunny9.png" },
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