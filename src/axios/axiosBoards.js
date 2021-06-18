import axios from 'axios'
const axiosBoards=axios.create({
    baseURL:`https://orello-0-default-rtdb.asia-southeast1.firebasedatabase.app/boards.json`,
})

export default axiosBoards