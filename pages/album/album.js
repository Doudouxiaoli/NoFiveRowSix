const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"hello",
    album: [{
      text: '一胎-lost control',
      img: '/static/album/lost/lost controller.jpg',
      url: "#",
    }, {
        text: '二胎-sheep',
        img: '/static/album/sheep/cover.jpg',
        url: "#",
      },
      {
        text: '冬季礼物',
        img: '/static/album/special/cover.jpg',
        url: "#",
      },
      {
        text: '三胎-namanana',
        img: '/static/album/namanana/namanana.jpg',
        url: "#",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})