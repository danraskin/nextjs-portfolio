import '@/styles/globals.css';

const metadata = {
    title: "danraskin-portfolio-site"
}

export default function RootLayout ({children}) {
    return (
        <html lang="en">
            <head />
            <body>
                {children}
            </body>
        </html>
    )
}