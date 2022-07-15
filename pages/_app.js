import "../styles/globals.scss";
import "augmented-ui/augmented-ui.min.css";
import Footer from "../components/sections/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
