import { create } from "zustand"
import { persist } from "zustand/middleware"
import axios from "axios"

const API_URL = "https://ai-resumebuilder-4vr2.onrender.com/api"

export const useAuthStore = create(
  persist(
    (set,get) => ({
      API_URL :"https://ai-resumebuilder-4vr2.onrender.com/api",
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