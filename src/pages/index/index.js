// 获取全局应用程序实例对象
// const app = getApp()
const QQMapWX = require('../../utils/qmapsdk')
const qqmapsdkkey = 'LLABZ-2XJ66-QBUSP-MSZCA-VQK22-NBBS2'
let qqmapsdk
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city: '定位中',
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
    hotText: '热门搜索',
    lists: [
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id: 1,
        introduce: '嘿 那家凉皮'
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id: 2,
        introduce: '嘿 那家凉皮'
      },
      {
        img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        id: 3,
        introduce: '嘿 那家凉皮'
      }
    ]
  },
  // 确认搜索
  inputConfirm () {
    // todo search
  },
  // 搜索框输入值
  inputValue (e) {
    this.setData({
      search: e.detail.value
    })
  },
  // 逆地址解析
  reverseGeocoder () {
    let that = this
    let obj = {
      success (res) {
        let city = res.result.ad_info.city
        city = city.replace('市', '')
        that.setData({
          city: city,
          lat: res.result.location.lat,
          lng: res.result.location.lng
        })
      },
      fail (res) {
        console.log(res)
        wx.showToast({
          title: '请允许获取您的位置信息'
        })
        setTimeout(function () {
          let settingObj = {
            success (res) {
              // 授权失败
              if (!res.authSetting['scope.userLocation']) {
                wx.showToast({
                  title: '请允许获取您的地理位置信息',
                  mask: true
                })
                setTimeout(function () {
                  return that.reverseGeocoder()
                }, 1000)
              } else {
                // 授权成功
                return that.reverseGeocoder()
              }
            },
            fail (res) {
              console.log(res)
            }
          }
          wx.openSetting(settingObj)
        }, 1000)
      }
    }
    qqmapsdk.reverseGeocoder(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    qqmapsdk = new QQMapWX({
      key: qqmapsdkkey
    })
    this.reverseGeocoder()
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
