export const getTodayDate = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}

export const getDate = (date) => {
    let day = new Date(date * 1000)
    let dd = String(day.getDate()).padStart(2, '0')
    let mm = String(day.getMonth() + 1).padStart(2, '0')
    let yyyy = day.getFullYear()

    return `${yyyy}-${mm}-${dd}`
}