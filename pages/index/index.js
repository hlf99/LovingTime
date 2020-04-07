// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标题栏数据
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
        name: "排行榜",
        id: 4,
        isActive: false
      }
    ],
    // 轮播图数据
    swiperItemList: [
      {
        src: 'https://ae01.alicdn.com/kf/H82f112b92b19451db8f72c680c3c7e8cx.jpg',
        id: 0
      },
      {
        src: 'https://ae01.alicdn.com/kf/Hf1162026e93a4dbe935e0df603be23e53.jpg',
        id: 1
      },
      {
        src: 'https://ae01.alicdn.com/kf/H9b32c07cfbfb420592eada516e8003feX.jpg',
        id: 2
      },
      {
        src: 'https://ae01.alicdn.com/kf/Hfce0ea426817453e8c3c77c290c478ed8.jpg',
        id: 3
      },
      {
        src: 'https://ae01.alicdn.com/kf/H8c0fc55a321f45ca85fec7a434162ba8Y.jpg',
        id: 4
      }
    ],
    // 消息区数据
    msgItemList: [
      {
        user_img: 'https://ae01.alicdn.com/kf/Hebfb918e9aed4f17a4c27afbb7b96c36i.png',
        user_name: 'Miracle',
        date: '2020年2月2日 20:20',
        address: '湖南省衡阳市蒸湘区',
        msg_text: '毕业了！',
        msg_img: 'https://ae01.alicdn.com/kf/Hf87aadb3d9e94a0fa23574d9ef646338j.png',
        viewCount: 234
      },
      {
        user_img: 'https://ae01.alicdn.com/kf/H82356a4cffe64aea96fd03acd359b1d0w.png',
        user_name: 'Rachel',
        date: '2020年2月20日 08:23',
        address: '无',
        msg_text: '^_^',
        msg_img: 'https://ae01.alicdn.com/kf/H74898f1ca5a24d568957c5fa1f479c03S.jpg',
        viewCount: 23
      }
    ],
    // 资讯列表数据
    informationList: [
      {
        info_id: 10,
        info_title: '旧电脑平板别丢了！将你的屏幕都利用起来',
        info_img: 'https://ae01.alicdn.com/kf/H878404cc1e6f4993b245a6ee7dbb36b69.jpg',
        read_count: 9820
      },
      {
        info_id: 11,
        info_title: '大学宿舍什么样的人容易招室友毒手？这几种室友叫人有去...',
        info_img: 'https://ae01.alicdn.com/kf/H251ae2591af74f8da8d560556832d70aC.jpg',
        read_count: 10000
      },
      {
        info_id: 12,
        info_title: '城管执法将西瓜砸个稀烂，摊主小伙爆发',
        info_img: 'https://ae01.alicdn.com/kf/H056db138ebfa4c2d95a205d1ea373da7y.jpg',
        read_count: 5823
      },
      {
        info_id: 13,
        info_title: '某男子突然跳到水里自杀，为什么？',
        info_img: 'https://ae01.alicdn.com/kf/Hb820d02712dd444dad69dc47f203d7ccM.png',
        read_count: 13000
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

  // 点击‘+’号， 跳转到消息发布界面
  handleOpenPulish() {
    wx.navigateTo({
      url: '/pages/publish_msg/publish_msg'
    })
  },

  // 点击资讯 跳转到资讯详情页面
  handleToInfoDetail() {
    wx.navigateTo({
      url: '/pages/info_detail/info_detail'
    });
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