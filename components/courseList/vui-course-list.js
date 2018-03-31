// components/courseList/vui-course-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 课程
    courses: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {

       }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOk:false,
    styles:{},
  },
  attached: function () {
    console.log(this.getData)
    // this.setData({
    //   nominateList: app.globalData.nominateList,
    //   hotList: app.globalData.nominateList,
    //   topData: app.globalData.swiperList,
    // })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // setStyle(){
    //   isOk: false
    // },
    //跳转
    _navigateTo(env){
      let path = env.currentTarget.dataset.path;
      let item = env.currentTarget.dataset.item;
      wx.navigateTo({
        url: path + '?item=' + JSON.stringify(item)
      })
    }
  }
})
