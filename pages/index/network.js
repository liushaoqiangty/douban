import { globalUrls} from "../../utils/urls.js"
const network={
  getMovieList:function(params){
    wx.request({
      url: globalUrls.movieList,
      data: {
        count: 7
      },
      success: function (res) {
        var movies = res.data.subject_collection_items;
        // that.setData({
        //   movies: movies
        // });
        // console.log(movies)
        if(params&&params.success){
          params.success(movies)
        }
      }
    })
  },
  getTVSList:function(params){
    wx.request({
      url: globalUrls.tvsList,
      data:{
        count:7
      },
      success: function (res) {
        var tvs = res.data.subject_collection_items;
        if (params && params.success) {
          params.success(tvs)
        }
      }
    })
  },
  getShowsList:function(params){
    wx.request({
      url: globalUrls.showsList,
      data: {
        count: 7
      },
      success: function (res) {
        var shows = res.data.subject_collection_items;
        if (params && params.success) {
          params.success(shows)
        }
      }
    })
  }
}
export { network}