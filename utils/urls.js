const globalUrls={
  movieList:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvsList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  showsList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  movieDetail:"https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/show/",
  movieTags:function(id){
    return "https://m.douban.com/rexxar/api/v2/movie/"+id+"/tags?count=8"
  },
  tvTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  showTags: function (id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  movieComment:function(id,start,count){
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/interests?count="+count+"&start="+start;
  },
  tvComment: function (id, start, count) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start;
  },
  showComment: function (id, start, count) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start;
  },
  searchUrl:function(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q="+q
  }
}
export {globalUrls}