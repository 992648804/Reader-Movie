Page({

  /**
   * 页面的初始数据
   */
  data: {
      // date:"Nov 18 2016",
      // title:"正式吃螃蟹的时候",
  },
  imgPah:"/images/...",
  process:function(){
    var date="Nov 18 2016";
    var date_ele=document.getElementById('id');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("load")S
    var posts_content=[{
      date: "Sep 18 2016",
      title: "正是虾肥蟹裝时",
      post_imag: "/images/post/crab.png",
      author_img: "/images/avatar/1.png",
      img_content: true,
      content: "橘黄协会，品尝只求",
      view_num: "112",
      collect_num: "96",
    },{
        date: "Sep 1p 2016",
        title: "正是虾肥蟹裝时3",
        post_imag: "/images/post/crab.png",
        author_img: "/images/avatar/1.png",

        img_content: true,
        content: "橘3333黄协会，品尝只求",
        view_num: "122",
        collect_num: "106",
      }, {
        date: "Sep 1p 2016",
        title: "正是虾肥蟹裝时11",
        post_imag: "/images/post/crab.png",
        author_img: "/images/avatar/1.png",

        img_content: true,
        content: "橘3333黄协会，品尝只求",
        view_num: "122",
        collect_num: "106",
      }, {
        date: "Sep 1p 2016",
        title: "正是虾肥蟹裝时4",
        post_imag: "/images/post/crab.png",
        author_img: "/images/avatar/1.png",

        img_content: true,
        content: "橘3333黄协会，品尝只求",
        view_num: "122",
        collect_num: "106",
      }]



    var post_content1={
      date:"Sep 18 2016",
      title:"正是虾肥蟹裝时",
      post_imag: "/images/post/crab.png",
      author_img: "/images/avatar/1.png",

      img_content:true,
      content:"橘黄协会，品尝只求",
      view_num:"112",
      collect_num:"96",

    }

    this.setData({
      posts_for1:posts_content
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})