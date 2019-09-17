// components/searchbar/searchbar.js
import {network} from "../../utils/network.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator: {
      type: Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputEvent:function(event){
    
      var that=this
      var value=event.detail.value;
      var detail={value:value};
      // console.log(detail)
      var options={};
       this.triggerEvent("searchinput",detail, options);
    
    }
  }
})