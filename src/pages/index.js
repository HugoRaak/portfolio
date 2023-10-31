import React from "react";
import {Home} from "../components/home/Home";
import {About} from "../components/about/About";

const IndexPage = () => {
    return <div className="text-dark dark:bg-darkTheme dark:text-white
            transition-colors transition-background duration-300 ease-out">
        <Home/>
        <About/>
    </div>;
}

export default IndexPage;

export const Head = () => <title>Hugo Rathle</title>;
