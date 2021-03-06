// pages/anniversary/anniversary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 纪念日数据
    anniversaryList: [
      {
        title: '在一起99天',
        date: '20/03/03 周二 00:00',
        days: 22
      },
      {
        title: '认识第250天',
        date: '20/03/08 周日 00:00',
        days: 27
      }
    ]
  },

  // 跳转到添加纪念日的页面
  handleToAddAnniversary() {
    wx.navigateTo({
      url: '/pages/add_anniversary/add_anniversary'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})