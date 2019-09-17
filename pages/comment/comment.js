// pages/comment/comment.js
import {
  network
} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    start:1,
    count:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var that = this;
    var type=options.type;
    var id=options.id;
    that.setData(options)
    var title = "";
    wx.showLoading({
      title: '正在加载中...',
    });
    that.getComments(1);
  },
  getComments:function(start){
    var that=this;
    var type=that.data.type;
    var id=that.data.id;
    if(start>that.data.start){
      that.setData({
        nextLoaing:true
      })
    }else{
      preLoading:true
    }
    network.getItemComments({
      type: type,
      id: id,
      start: start,
      count: 20,
      success: function (data) {
        console.log(data)

        that.setData({
          total: data.total,
          comments: data.interests,
          start:start,
          preLoading: false,
          nextLoaing: false
        })
        wx.hideLoading();
      wx.pageScrollTo({
        scrollTop: 0,
      })
      }
    })
  },
  onItemTagsEvent: function(event) {
    wx.navigateBack({
      
    })
  },
  onPrePageTap:function(event){
    var that = this;
    var oldStart = this.data.start;
    if(oldStart-this.data.count>0){
      var start = oldStart - this.data.count;
      that.getComments(start)
    }
  },
  onNextPageTap:function(event){
    var that=this;
    var oldStart=this.data.start;
    var start=oldStart+this.data.count;
    that.getComments(start)
  }


})