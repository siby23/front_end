import axios from '../api/Api_Base_Url'

export const API_ADMIN_LOGIN =(info)=>axios.post('/admin/login',info)