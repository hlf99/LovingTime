// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItem: [
      {
        name: "热门",
        id: 1,
        isActive: true
      },
      {
        name: "资讯",
        id: 2,
        isActive: false
      },
      {
        name: "音乐",
        id: 3,
        isActive: false
      }, {
        name: "热门",
        id: 4,
        isActive: false
      }
    ]
  },

  // 标题选中激活
  handleItemNavChange(e) {
    // 1 获取标题索引
    const index = e.currentTarget.dataset.index;
    // 2 修改源数组
    let navItem = this.data.navItem;
    navItem.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    // 3 将修改后的tabs数组重新放回data中
    this.setData({navItem});
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