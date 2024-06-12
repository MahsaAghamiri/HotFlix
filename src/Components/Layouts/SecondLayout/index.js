import { Fragment } from "react";
import SearchHeader from "../../Header/WithOutSearchBox";
import Footer from "../../Footer";


export default function SecondLayout({children}){
    return(
        <Fragment>
            <SearchHeader />
                {children}
            <Footer />
        </Fragment>
    )
}