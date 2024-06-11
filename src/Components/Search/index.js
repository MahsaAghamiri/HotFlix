import { Fragment, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchStyle from "./style";
import Loading from "../Loading";

export default function Search(){
    const [loading, setLoading] = useState(true);
    const [searchResult, setsearchResult] = useState({
        data: [],
        metadata: {}
       });
       const searchResultsRef = useRef(null);
       const searchInput = useRef(null);
       useEffect(() => {
           document.addEventListener('click', handleClickSearchResult);
           // clean up function -> run when the component unmounts or before the effect runs again.
           return () => {
               document.removeEventListener('click', handleClickSearchResult);
           };
       }, []);
    function handleSearch(e){
        if(e.target.value.trim().length >= 3){
            axios.get(`https://moviesapi.codingfront.dev/api/v1/movies?q=${e.target.value.trim()}`)
            .then((res) => {
               setsearchResult(res.data);
               setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
        } 
    }
    function renderSearchResult(){
        return searchResult.data.map(({id, title}) => {
            return(
                <li key={id}>
                    {loading === true ? (<Loading />) : ( <Link to={`/movie/${id}`} onClick={clearSearchInput}>{title}</Link>)}  
                 </li>
            )
        })
    }
    function handleClickSearchResult(e) {
            setsearchResult({
                data: [],
                metadata: {}
            });
        
    }
   function clearSearchInput(){
    searchInput.current.value = '';
   }
    return(
        <Fragment>
            <SearchStyle>
                <div className="search">
                    <input onChange={handleSearch} className='search-box' placeholder="Search..." ref={searchInput} />   
                </div>
                <div className="serach-result"  ref={searchResultsRef}><ul>{renderSearchResult()}</ul></div>
            </SearchStyle>
        </Fragment>
    )
}