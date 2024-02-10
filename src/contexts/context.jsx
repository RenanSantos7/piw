import { createContext, useState } from "react"
import users from '../json/users.js'
import posts from '../json/posts.json'

export const PiwContext = createContext();
PiwContext.displayName = "Piw"

export const PiwProvider = ({ children }) => {
    const postsOrdenados = posts.sort((a, b) => {
        const dateA = new Date(a.published)
        const dateB = new Date(b.published)

        if (dateA > dateB) {
            if (a.replyto == b.id) {
                return 1
            }

            return -1
        }
        if (dateA < dateB) {
            return 1
        }
        return 0
    })

    const [usuarios, setUsuarios] = useState(users)
    const [postagens, setPostagens] = useState(postsOrdenados)

    return (
        <PiwContext.Provider value={{
            usuarios, setUsuarios,
            postagens, setPostagens
        }}>
            {children}
        </PiwContext.Provider>
    )
}