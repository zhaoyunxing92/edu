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
    },
    //点击用户头像是否跳转
    noSkip:{
      type:Boolean,
      value: false
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
      let skip = env.currentTarget.dataset.skip;
      if (skip){
        wx.navigateTo({
          url: path + '?item=' + JSON.stringify(item)
        })
      }
     
    }
  }
})
