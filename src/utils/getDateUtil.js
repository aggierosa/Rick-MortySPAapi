
const dateNow = () => {
    let now = new Date()
    let day = String(now.getDate()).padStart(2, '0')
    let month = String(now.getMonth() + 1).padStart(2, '0')
    let year = now.getFullYear()

    now = `${day}.${month}.${year}`

    return now
}

export default dateNow

