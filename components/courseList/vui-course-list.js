// components/courseList/vui-course-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 课程
    courses: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
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
