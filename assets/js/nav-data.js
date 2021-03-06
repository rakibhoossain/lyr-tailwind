const navData =
  [
  {
    'icon': 'home',
    'layout': 'side-menu',
    'page_name': 'dashboard',
    'title': 'Dashboard'
  },
  {
    'icon': 'box',
    'page_name': '#',
    'title': 'Menu Layout',
    'children': [
      {
        'icon': '',
        'layout': 'side-menu',
        'page_name': 'dashboard',
        'title': 'Side Menu'
      },
      {
        'icon': '',
        'layout': 'simple-menu',
        'page_name': 'dashboard',
        'title': 'Simple Menu'
      },
      {
        'icon': '',
        'layout': 'top-menu',
        'page_name': 'dashboard',
        'title': 'Top Menu'
      }
    ]
  },
  {
    'icon': 'shopping-bag',
    'layout': 'side-menu',
    'page_name': '/dashboard/products',
    'title': 'Products'
  },
  {
    'icon': 'hard-drive',
    'layout': 'side-menu',
    'page_name': 'file-manager',
    'title': 'File Manager'
  },
  {
    'icon': 'credit-card',
    'layout': 'side-menu',
    'page_name': 'point-of-sale',
    'title': 'Point of Sale'
  },
  {
    'icon': 'message-square',
    'layout': 'side-menu',
    'page_name': 'chat',
    'title': 'Chat'
  },
  {
    'icon': 'file-text',
    'layout': 'side-menu',
    'page_name': 'post',
    'title': 'Post'
  },
  {
    'icon': 'edit',
    'page_name': '#',
    'title': 'Crud',
    'children': [
      {
        'icon': 'activity',
        'layout': 'side-menu',
        'page_name': '#',
        'title': 'Data List',
        'children': [
          {
            'icon': 'activity',
            'layout': 'side-menu',
            'page_name': 'crud-data-list',
            'title': 'Data List'
          },
          {
            'icon': 'activity',
            'layout': 'side-menu',
            'page_name': 'crud-form',
            'title': 'Form'
          }
        ],
      },
      {
        'icon': 'activity',
        'layout': 'side-menu',
        'page_name': 'crud-form',
        'title': 'Form'
      }
    ]
  },
]
export default navData
