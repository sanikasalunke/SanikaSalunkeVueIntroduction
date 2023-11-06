
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/AboutMe', component: () => import('pages/AboutMe.vue')},
      { path: '/EducationDetails', component: () => import('pages/EducationDetails.vue')},
      { path: '/MyTechnicalSkillSet', component: () => import('pages/MyTechnicalSkillSet.vue')},
      { path: '/MyHobbies', component: () => import('pages/MyHobbies.vue')}


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
