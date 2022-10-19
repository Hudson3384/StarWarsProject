export const getPeople = async () => {
    try {
        let arr = []
        for (let i = 1; i < 10; i++) {
            let url = `https://swapi.dev/api/people/?page=${i}`
             const response = await fetch(url)
             const data =  await response.json()
             arr = [...arr, ...data.results]
            }
            return arr

        
    } catch (error) {
        console.log('error:', error)
    }
}