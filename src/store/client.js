import { defineStore } from "pinia";
import axios from 'axios'

export const useClientStore = defineStore("client", {
  state: () => {
    return {
      clients: [],
    };
  },
  getters:{
    getClients(state){
      return state.clients 
    }
  },
  actions:{
    async setClient(){
        try {
            const {data, status } = await axios.get('http://127.0.0.1:8000/apunte/client/') 
            if(status == 200){
                this.clients = data
            }
        } catch (e) {
            console.error(e)
        }
    }
  }

});
