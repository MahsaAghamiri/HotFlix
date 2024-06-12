import { Fragment } from "react";
import Footer from "../../Footer";
import SearchHeader from "../../Header/SearchHeader";
import SearchHeader from "../../Header/WithOutSearchBox";
 

export default function SearchLayout({children}){
    return(
        <Fragment>
            <SearchHeader />
                {children}
            <Footer />
        </Fragment>
    )
}