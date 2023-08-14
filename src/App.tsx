import Blogs from "./components/Blogs"
import Companies from "./components/Companies"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Messaging from "./components/Messaging"
import Navbar from "./components/Navbar"

export default function App() {
    return (
        <>
            <Navbar />
            <MainContent />
            <Messaging />
            <Blogs />
            <Companies />
            <Footer />
        </>
    )
}