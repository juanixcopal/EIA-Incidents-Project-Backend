export default ({ typeClassroomsData }) => {
    return async () => {
        try {
            const result = await typeClassroomsData.getTypeClassrooms()

            return result
        } catch (e) {
            console.log(e)
            return null
        }
    }
}
