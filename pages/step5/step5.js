Page({
  data: {},
  onLoad: function() {},
  toNext() {
    wx.showLoading({
      title: '正在发送',
    })

    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({ title: '全部发送成功' })

      setTimeout(() => {
        wx.navigateBack({
          delta: 5,
        })
      }, 1000)
    }, 2000)
  },
})
