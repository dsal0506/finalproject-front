import { ref } from 'vue'
import axios from 'axios'

const teams = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getTeams = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/teams', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  teams.value = data
  pages.value = Number(headers['x-total-pages']) || 1
  loading.value = false
}

const getTeam = async (teamId) => {
  const { data } = await api.get(`/api/teams/${teamId}`)
  return data
}

const useAPI = () => {
  return { teams, pages, activePage, loading, pageSize, getTeams }
}

export default useAPI