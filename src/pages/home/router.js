import Layout from '@/layouts'

export default [
  {
    path: '',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('./index.vue'),
        meta: {
          title: 'Home'
        }
      }
    ]
  }
]
