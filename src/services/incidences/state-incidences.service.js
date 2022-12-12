export default ({ incidencesData }) => {
    return async () => {
        try {
            const result = await incidencesData.getStatesIncidences()

            return result
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
