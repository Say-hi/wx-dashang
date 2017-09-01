// 获取全局应用程序实例对象
// const app = getApp()
const common = require('../../utils/common')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'comment',
    lists: ['服务', '价格', '环境', '态度'],
    start: [4, 3, 2, 4],
    photos: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  // 用户评星
  giveStar (e) {
    this.data.start[e.currentTarget.dataset.oi] = e.currentTarget.dataset.si
    this.setData({
      start: this.data.start
    })
  },
  // 用户上传图片
  upPhoto () {
    let that = this
    common.upPhoto(that, 'photos', 5)
  },
  // 图片预览
  showImg (e) {
    let that = this
    common.showImg(that, e, 'photos')
  },
  // 删除图片
  delImg (e) {
    let that = this
    common.delphoto(that, e, 'photos', function (that, photos) {
      that.setData({
        photos: photos
      })
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
