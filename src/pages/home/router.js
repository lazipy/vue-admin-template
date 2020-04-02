import Layout from '@/layouts'

export default [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { path: '', name: 'home', component: () => import('./index.vue') }
    ]
  }
]
