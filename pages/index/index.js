Page({
  data: {
    keywords: ['led', 'led222', 'led333'],
  },
  onLoad: function() {},
  next() {
    wx.navigateTo({ url: '/pages/step2/step2' })
  },
})
