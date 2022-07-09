// definimos el store product
import { defineStore } from "pinia";
import axios from 'axios'

export const useProductStore = defineStore('product',{
    //creando el state => almacenara los datos 
    state:()=>{
        return {
            products:[]
        }
    },
    //creamos los getters => instaciará los datos del state
    getters:{
        getProducts(state){
            return state.products
        }
    },
    // creacion del acctions => encargado de lña comunicación con la data
    actions:{
        async setProduct(){
            try {
            const {data, status} = await axios.get('http://127.0.0.1:8000/apunte/product/')
            if(status == 200){
                this.products = data
            }
            } catch (e) {              
            }
        }
    }
})