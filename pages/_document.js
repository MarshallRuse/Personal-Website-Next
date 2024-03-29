import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='icon' href='/svgs/marshallruse-logo-bluepink.svg' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body className='subtleScrollbar'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
