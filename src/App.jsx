import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";

export const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-hatch bg-fixed">
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </div>
        </BrowserRouter>
    );
};
