import requests from '@/untils/request'
export function register () {
  return requests({
    url: '/register',
    methods: 'post'
  })
}
export function login () {
  return requests({
    url: '/login',
    methods: 'post'
  })
}
