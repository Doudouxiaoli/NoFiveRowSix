const app = getApp();
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    menuitems: [{
        text: '设置',
        url: '#',
        icon: '/pages/user/icon/setUp.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '订单',
        url: '#',
        icon: '/pages/user/icon/order.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '地址',
        url: '#',
        icon: '/pages/user/icon/address.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '点赞',
        url: '#',
        icon: '/pages/user/icon/like.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '收藏',
        url: '#',
        icon: '/pages/user/icon/collection.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '记录',
        url: '#',
        icon: '/pages/user/icon/record.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      },
      {
        text: '关于我们',
        url: '#',
        icon: '/pages/user/icon/about.png',
        tips: '',
        next: ' /pages/user/icon/next.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})