export const getTaskRequest = async ()=>
    await axios.get('http://localhost:4000/sse/v1/datos')
