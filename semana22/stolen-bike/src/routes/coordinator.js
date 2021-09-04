export const goToHomePage = (history) => {
    history.push("/")
}

export const goToTheftDetails = (history, id) => {
    history.push(`/details/${id}`)
}

