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
    'page_name': 'menu-layout',
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
    'icon': 'inbox',
    'layout': 'side-menu',
    'page_name': 'inbox',
    'title': 'Inbox'
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
    'page_name': 'crud',
    'title': 'Crud',
    'children': [
      {
        'icon': '',
        'layout': 'side-menu',
        'page_name': 'crud-data-list',
        'title': 'Data List'
      },
      {
        'icon': '',
        'layout': 'side-menu',
        'page_name': 'crud-form',
        'title': 'Form'
      }
    ]
  },
]
export default navData
