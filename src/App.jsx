import { PiwProvider } from './contexts/context.jsx'
import RouterApp from './router.jsx'

export default function App() {
    return (
        <PiwProvider>
            <RouterApp />
        </PiwProvider>
    )
}
