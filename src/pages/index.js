import React from "react";
import {Home, About, Work, Contact, Footer} from "@components";

const IndexPage = () => {
    return <div className="text-dark dark:bg-darkTheme dark:text-white
            transition-colors transition-background duration-300 ease-out">
        <Home/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
    </div>;
}

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
