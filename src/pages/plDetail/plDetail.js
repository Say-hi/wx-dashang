// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    time: '2017-12-12 20:30',
    shop: '嘿 那家凉皮',
    comment: '凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错凉皮不错'
  },
  showImg (e) {
    let that = this
    wx.previewImage({
      current: that.data.imgArr[e.currentTarget.dataset.index],
      urls: that.data.imgArr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
