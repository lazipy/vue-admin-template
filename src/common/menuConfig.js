export default [
  {
    path: '/news-management',
    icon: 'el-icon-chat-line-square',
    title: 'News Management',
    children: [
      {
        path: '/news-management/upload-image',
        title: 'Upload Image'
      },
      {
        path: '/news-management/edit-copywriting',
        title: 'Edit Copywriting'
      }
    ]
  },
  {
    path: '/blog-management',
    icon: 'el-icon-collection',
    title: 'Blog Management',
    children: [
      {
        path: '/blog-management/upload-image',
        title: 'Upload Image'
      },
      {
        path: '/blog-management/edit-copywriting',
        title: 'Edit Copywriting'
      }
    ]
  },
  {
    path: '/content-management',
    icon: 'el-icon-s-order',
    title: 'Content Management',
    children: [
      {
        path: '/content-management/video',
        icon: 'el-icon-video-camera',
        title: 'Video',
        children: [
          {
            path: '/content-management/video/link-management',
            title: 'Link Management'
          },
          {
            path: '/content-management/video/edit-copywriting',
            title: 'Edit Copywriting'
          }
        ]
      },
      {
        path: '/content-management/image',
        icon: 'el-icon-picture-outline-round',
        title: 'Image',
        children: [
          {
            path: '/content-management/image/picture-list',
            title: 'Picture List'
          }
        ]
      }
    ]
  }
]
