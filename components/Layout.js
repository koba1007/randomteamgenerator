import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Random Team Generator App | {props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link
                rel="stylesheet"
                href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);
export default Layout;