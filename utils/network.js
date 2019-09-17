import {
  globalUrls
} from "urls.js"
const network = {
  getMovieList: function(params) {

    params.type = "movies";
    this.getItemList(params)
  },
  getTVSList: function(params) {
    params.type = "tvs";
    this.getItemList(params)
  },
  getShowsList: function(params) {
    params.type = "shows";
    this.getItemList(params)
  },
  getItemList: function(params) {
    var url = "";
    if (params.type == "movies") {
      url = globalUrls.movieList;
    } else if (params.type == "tvs") {
      url = globalUrls.tvsList;
    } else if (params.type == "shows") {
      url = globalUrls.showsList;
    }
    var count = params.count ? params.count : 7;
    wx.request({
      url: url,
      data: {
        count: count
      },
      success: function(res) {
        var items = res.data.subject_collection_items;
        var itemsCount = items.length;
        var left = itemsCount % 3;
        if (left == 2) {
          items.push(null)
        }
        if (params && params.success) {
          params.success(items)
        }
      }
    })
  },
  getItemDetail: function(params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieDetail + id;
    } else if (type === "tv") {
      url = globalUrls.tvDetail + id;
    } else if (type === "show") {
      url = globalUrls.showDetail + id;
    }
    wx.request({
      url: url,
      success(res) {
        // console.log(res)
        var item = res.data;
        if (params.success) {
          params.success(item);
        }
      }
    })
  },
  getItemTags: function(params) {
    var type = params.type;
    var id = params.id;
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieTags(id);
    } else if (type == "tv") {
      url = globalUrls.tvTags(id);
    } else if (type == "show") {
      url = globalUrls.showTags(id);
    }
    wx.request({
      url: url,
      success(res) {
        // console.log(res)
        var tags = res.data.tags;
        if (params.success) {
          params.success(tags);
        }
      }
    })
  },
  getItemComments: function(params) {
    var type = params.type;
    var id = params.id;
    var start = params.start ? params.start : 0;
    var count = params.count ? params.count : 3
    var url = "";
    if (type === "movie") {
      url = globalUrls.movieComment(id, start, count);
    } else if (type === "tv") {
      url = globalUrls.tvComment(id, start, count);
    } else if (type === "show") {
      url = globalUrls.showComment(id, start, count);
    }
    wx.request({
      url: url,
      success(res) {
        // console.log(res)
        var data = res.data;
        if (params.success) {
          params.success(data)
        }
      }
    })
  },
  // 搜索item
  getSearch: function(params) {
    var q = params.q;
    var url = globalUrls.searchUrl(q);
    wx.request({
      url: url,
      success: function(res) {
        var subjects=res.data.subjects;
        if(params.success){
            params.success(subjects);
        }
      }
    })
  }
}

export {
  network
}