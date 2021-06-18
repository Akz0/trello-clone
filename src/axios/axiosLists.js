import axios from 'axios'
const axiosLists=axios.create({
    baseURL:`https://orello-0-default-rtdb.asia-southeast1.firebasedatabase.app/lists.json`,
})

export default axiosLists