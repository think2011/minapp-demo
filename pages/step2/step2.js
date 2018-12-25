Page({
  data: {
    keywords: [
      {
        key: 'led',
        checked: false,
      },
      {
        key: 'led222',
        checked: false,
      },
      {
        key: 'led333',
        checked: false,
      },
      {
        key: 'led444',
        checked: false,
      },
    ],
    activeNext: false,
  },
  onLoad: function() {},
  handleSelect(event) {
    const { item, index } = event.currentTarget.dataset
    const { keywords } = this.data

    item.checked = !item.checked
    keywords[index] = item

    this.setData({
      keywords,
      activeNext: keywords.some(item => item.checked),
    })
  },
  toNext() {
    wx.navigateTo({ url: '/pages/step3/step3' })
  },
})
