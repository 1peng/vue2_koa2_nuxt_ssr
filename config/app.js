module.exports = {
  uploadApi: 'http://alpha-admin.gdfcx.net/upload-app/resource/upload/image?encode=utf-8',
  apiPath: {
    cmsAdv: {
      host: 'http://alpha-admin.gdfcx.net/cms-app',
      getAdvList: {
        method: 'get',
        url: '/api/v1/content/list'
      },
      getAdvType: {
        method: 'get',
        url: '/api/v1/espots/etype'
      },
      getAdvById: {
        method: 'get',
        url: '/api/v1/content/{id}'
      },
      getPropertiesByType: {
        method: 'get',
        url: '/api/v1/type/{type}'
      },
      saveEdit: {
        method: 'put',
        url: '/api/v1/content'
      },
      save: {
        method: 'post',
        url: '/api/v1/content'
      }
    },
    ums: {
      host: 'http://www-dev.shejijia.com',
      login: {
        method: 'post',
        url: '/ums/v1.0/user/login/credential'
      },
      checkSession: {
        method: 'get',
        url: '/ums/v1.0/checkSession'
      }
    }
  },
  navBars: [
    {
      title: '欢迎页',
      link: '/home/index',
      icon: 'fa-dashboard',
      children: []
    },
    {
      title: '设计平台',
      link: '',
      icon: 'fa-pencil',
      children: [
        {
          title: '设计需求管理',
          link: '',
          children: [
            {
              title: '精选',
              link: ''
            },
            {
              title: '竞选',
              link: ''
            }
          ]
        },
        {
          title: '套餐统计管理',
          link: '',
          children: []
        },
        {
          title: '案例审核',
          link: '',
          children: [
            {
              title: '2D案例审核',
              link: ''
            },
            {
              title: '2D案例排序',
              link: ''
            },
            {
              title: '3D案例入库',
              link: ''
            },
            {
              title: '3D案例排序',
              link: ''
            }
          ]
        },
        {
          title: '案例评论',
          link: '',
          children: []
        },
        {
          title: '设计师预约管理',
          link: '',
          children: [
            {
              title: '大师',
              link: ''
            },
            {
              title: '工作室',
              link: ''
            },
            {
              title: '套餐',
              link: ''
            }
          ]
        },
        {
          title: '设计师认证管理',
          link: '',
          children: [
            {
              title: '实名认证',
              link: '/design/authentication/realname'
            },
            {
              title: '高阶认证',
              link: '/design/authentication/higherorder'
            }
          ]
        },
        {
          title: '设计师列表',
          link: '',
          children: []
        },
        {
          title: '设计师提现审核',
          link: '',
          children: []
        }
      ]
    },
    {
      title: '内容管理',
      link: '',
      icon: 'fa-table',
      children: [
        {
          title: '推荐管理',
          link: '',
          children: []
        },
        {
          title: '广告管理',
          link: '/cms/advs/index',
          children: []
        },
        {
          title: '上线广告',
          link: '',
          children: []
        }
      ]
    },
    {
      title: '商城管理',
      link: '',
      icon: 'fa-shopping-cart',
      children: [
        {
          title: '交易管理',
          link: '',
          children: [
            {
              title: '订单管理',
              link: '',
              children: []
            },
            {
              title: '退换货管理',
              link: '',
              children: []
            }
          ]
        },
        {
          title: '商品管理',
          link: '',
          children: [
            {
              title: '商品列表',
              link: '',
              children: []
            },
            {
              title: '价格管理',
              link: '',
              children: []
            }
          ]
        },
        {
          title: '属性管理',
          link: '',
          children: []
        },
        {
          title: '品牌管理',
          link: '',
          children: []
        },
        {
          title: '厂商管理',
          link: '',
          children: []
        },
        {
          title: '经销商管理',
          link: '',
          children: []
        }
      ]
    },
    {
      title: '权限管理',
      link: '',
      icon: 'fa-user',
      children: [
        {
          title: '权限控制',
          link: '',
          children: []
        }
      ]
    },
    {
      title: '施工平台',
      link: '',
      icon: 'fa-gavel',
      children: [
        {
          title: '角色分配',
          link: '',
          children: []
        },
        {
          title: '项目管理',
          link: '',
          children: []
        }
      ]
    }
  ]
}
