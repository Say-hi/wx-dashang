// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatorColor: '#ffffff',
    indicatorActiveColor: '#12c9fc',
    autoplay: false,
    circular: true,
    interval: 5000,
    duration: 1000,
    src: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    name: '嘿 那家凉皮',
    address: '天河区户的商业大巷1号楼506',
    tel: 18855953422,
    lists: [
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 4,
        star: 123,
        count: 4,
        dj: 1
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 3,
        star: 1232,
        count: 2,
        dj: 1
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 2,
        star: 1232,
        dj: 0
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 4,
        star: 123,
        count: 4,
        dj: 1
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 3,
        star: 1232,
        count: 2,
        dj: 1
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '乐乐蛋糕',
        introduce: '超级无敌美味好吃的蛋糕啊，快来尝一尝撒。',
        level: 2,
        star: 1232,
        dj: 0
      }
    ],
    nearShop: [
      {
        name: '嘿 那家凉皮',
        distance: 123,
        id: 123,
        address: '车陂东浦南路汇德商业打南路汇德商业打南路汇德商业打南路汇德商业打南路汇德商业打赏1号楼506'
      },
      {
        name: '嘿 那家凉皮',
        distance: 123,
        address: '车陂东浦南路汇德商业打赏1号楼506'
      }
    ]
  },
  // 查看附近店面
  nearShow () {
    this.setData({
      current: 1
    })
  },
  // 用户点赞
  dianzan (e) {
    if (this.data.lists[e.currentTarget.dataset.index].dj === 1) {
      return wx.showToast({
        title: '您已点赞啦'
      })
    }
    this.data.lists[e.currentTarget.dataset.index].dj = 1
    this.data.lists[e.currentTarget.dataset.index].star = ++this.data.lists[e.currentTarget.dataset.index].star
    this.setData({
      lists: this.data.lists
    })
  },
  // 拨打电话
  callPhone () {
    let that = this
    wx.makePhoneCall({
      phoneNumber: that.data.tel.toString()
    })
  },
  // 设置导航栏文字
  setNb (text) {
    wx.setNavigationBarTitle({
      title: text,
      success () {
        wx.hideNavigationBarLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.showNavigationBarLoading()
    // TODO: onLoad
    this.setNb('嘿 那家凉皮')
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
