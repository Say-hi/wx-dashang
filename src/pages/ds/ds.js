// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cur_nav: 1,
    ds_cur: 0,
    dy: {
      bg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      text: '感谢您的支持',
      star: 2341,
      lv: 2
    },
    dzLists: [
      {
        text: '点赞内容1',
        number: 12,
        zan: 1
      },
      {
        text: '点赞内容2',
        number: 1232,
        zan: 1
      },
      {
        text: '点赞内容3',
        number: 123123
      },
      {
        text: '点赞内容4',
        number: 1
      }
    ],
    moneyList: [1, 5, 10]
  },
  // 用户点赞
  dz (e) {
    let index = e.currentTarget.dataset.index
    let list = this.data.dzLists
    if (list[index]['zan'] * 1 === 1) {
      return wx.showToast({
        title: '您已经点赞过啦'
      })
    }
    list[index]['zan'] = 1
    // list[index]['number'] = ++list[index]['nubmer']
    list[index]['number'] += 1
    this.setData({
      dzLists: list
    })
  },
  // 打赏选择
  dsChoose (e) {
    this.setData({
      ds_cur: e.currentTarget.dataset.index
    })
  },
  // 轮播图更换
  changeCur (e) {
    this.setData({
      cur_nav: e.detail.current
    })
  },
  // 导航选择
  chooseNav (e) {
    this.setData({
      cur_nav: e.currentTarget.dataset.index
    })
  },
  // 去评价
  goC () {
    wx.navigatorTo({
      url: `../comment/comment?id=${this.data.id}`
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
