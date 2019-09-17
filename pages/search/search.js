// pages/search/search.js
import {network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onSearchInputEvent:function(event){
    // console.log(event)
    var that = this
    var value = event.detail.value;
    network.getSearch({
      q: value,
      success: function (subjects) {
        that.setData({
          subjects: subjects
        })
        console.log(subjects)
      }
    })
  },
  // onItemTapEvent:function(event){
  //   console.log(event)
  //   var id=event.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: '/pages/detail/detail?type=movie&id='+id,
  //   })
  // }
})