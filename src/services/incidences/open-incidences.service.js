export default ({ incidencesData }) => {
    return async () => {
        try {
            const result = await incidencesData.getOpenIncidences()

            return result
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
