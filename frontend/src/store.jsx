import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

export const API_URL =  import.meta.env.VITE_API_URL;
console.log(API_URL)

export const useAuthStore = create(
  persist(
    (set,get) => ({
      
      user: null,
      isAuthenticated: false,

      login: async (data) => {
        const res = await axios.post(`${API_URL}/user/login`, data, {
          withCredentials: true,
        })

        set({
          user: res.data.user,
          isAuthenticated: true,
        })

        return res.data
      },

      createUser: async (data) => {
        const res = await axios.post(`${API_URL}/user/createuser`, data, {
          withCredentials: true,
        })

        set({
          user: res.data.user,
          isAuthenticated: true,
        })

        return res.data
      },

    logout:async () =>{
         const res = await axios.post(`${API_URL}/user/logout`, {}, {
          withCredentials: true,
        })
        set({
          user: null,
          isAuthenticated: false,
        })
        
      },

    }),
    {
      name: "auth-storage",
    }
  )
)