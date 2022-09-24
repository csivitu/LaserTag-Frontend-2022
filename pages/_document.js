import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Computer Society of India x Gravitas 2022" />
                    <meta
                        name="description"
                        content="CSI’s at Gravitas, where are you?"
                    />

                    <meta charSet='UTF-8' />
                    <meta property="og:site_name" content="Gravitas" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://gravitas.csivit.com/" />
                    <meta property="og:title" content="Computer Society of India x Gravitas 2022" />
                    <meta
                        property="og:description"
                        content="CSI’s at Gravitas, where are you?"
                    />
                    <meta property="og:image" itemProp="image" content="gravitasxcsi.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://gravitas.csivit.com/" />
                    <meta property="twitter:title" content="Computer Society of India x Gravitas 2022" />
                    <meta
                        property="twitter:description"
                        content="Computer Society of India-VIT brings together some of the best designers, developers, and tech enthusiasts who collaborate and organize various events, workshops and hackathons every year with the motivation of pushing technology forward and fostering a community of tech enthusiasts."
                    />
                    <meta property="twitter:image" content="gravitasxcsi.png" />

                    <meta name="keywords" content="csixgravitas,gravitas,csi,tech,csictf,csi,csi-vit,devspace,vit,laser tag,under the hood,clickbait,,send codez,computer society of india,csivit,csivitu,lasertag,sendcodez,wrapped,vellore,chapter,uth,techex,ctf,ffcs,ffcs.ooo,ctf.csivit" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet" />

                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#131313 " />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;