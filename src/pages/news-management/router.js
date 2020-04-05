import Layout from '@/layouts'

export default [
  {
    path: '/news-management',
    name: 'news-management',
    component: Layout,
    redirect: '/news-management/upload-image',
    children: [
      {
        path: 'upload-image',
        name: 'newsImage',
        component: () => import('./upload-image/index.vue'),
        meta: {
          title: 'News Image'
        }
      }
    ]
  }
]
