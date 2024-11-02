import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
//import './index.css'
import App from "./App.tsx"
import "@mantine/core/styles.css"
import { MantineProvider, createTheme } from "@mantine/core"
import "./styles/global.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const theme = createTheme({
    /** Put your mantine theme override here */
})
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
})
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <App />
            </MantineProvider>
        </QueryClientProvider>
    </StrictMode>
)
