//index.js
//获取应用实例
const app = getApp()
import {network} from "../../utils/network.js"

Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function(params) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //电影url:   https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items
  onLoad: function() {
    var that = this;
    //请求电影
    network.getMovieList({
      success:function(movies){
        that.setData({
          movies:movies
        })
      }
    })
    //电视剧
    network.getTVSList({
      success:function(tvs){
        that.setData({
          tvs: tvs
        })
      }
    })
    //综艺
    network.getShowsList({
      success: function (shows) {
        that.setData({
          shows: shows
        })
      }
    })
  },
  getUserInfo: function(e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})