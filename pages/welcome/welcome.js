Page({
  

  onTap:function(event){
    console.log("onTap");
    wx.navigateTo({
      url: '../posts/post',
    });
    //带返回按钮  .切隐藏

    // wx.redirectTo({
    //   url: '../posts/post',
    //   success: function(res) {

    //   },
    //   fail: function() {

    //   },
    //  complete: function() {

    //   }
    //   })
    //不带返回按钮  直接卸载
    // wx.navigateTo({
    //   url: '',
    //   success:function(res){

    //   },
    //   fail:function(){

    //   },
    //   complete:function(){

    //   }

    // })
  },


  onTextTap:function(){
    console.log("onTextTap")
  },

  onContainerTap:function(event){
    console.log("onContainerTap")

  },
  onSubTap: function (event) {
    console.log("onSubTap")
  },
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("welocme page is onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("welocme page is onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("welocme page is unload")
  },  

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})