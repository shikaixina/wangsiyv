import {defineStore} from 'pinia'

export const useMainStore = defineStore({
  id:'main',
  state:()=>({
    name:'likaixin',
    age:26
  }),
  getters:{
    ages:(state)=>state.age*2
  },
  actions:{
    setAge() {
      this.age++
    }
  }
})