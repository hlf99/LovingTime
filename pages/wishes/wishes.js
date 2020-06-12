// pages/wishes/wishes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wish: '',
    wishesList: [
      '一起去看场电影',
      '一起去海边玩',
      '一起去旅游'
    ]
  },

  // 获取到输入的愿望
  getWish(e) {
    this.setData({
      wish: e.detail.value
    })
  },

  // 将愿望放入显示列表中
  addWish() {
    // 判断文本框内是否有输入
    if (this.data.wish.length != 0) {
      this.setData({
        wishesList: this.data.wishesList.concat(this.data.wish),
        // 保存后清空文本框
        wish: ''
      })
    } else {
      wx.showToast({
        title: '请输入内容再保存！',
        icon: 'none'
      })
    }
  },

  // 长按后移除该项
  removeItem(e) {
    // console.log(e.currentTarget.dataset.index);
    var currentIndex = e.currentTarget.dataset.index;
    var that = this;
    wx.showModal({
      title: '这个愿望你完成了吗？',
      content: '',
      showCancel: true,
      cancelText: '否',
      cancelColor: '#000000',
      confirmText: '是',
      confirmColor: '#ff00fb',
      success: (result) => {
        if(result.confirm){
          that.data.wishesList.splice(currentIndex, 1)
          var newWishesList = that.data.wishesList;
          that.setData({
            wishesList: newWishesList
          })
        }
      }
    });
  }
})