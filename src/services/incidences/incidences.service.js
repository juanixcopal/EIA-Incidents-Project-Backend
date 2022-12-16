export default ({ incidencesData }) => {
    return async () => {
        try {
            const result = await incidencesData.getIncidences()

            return result
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
