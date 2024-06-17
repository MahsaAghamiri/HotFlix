import { Fragment, useState, useEffect, useRef } from "react";
import API from "../../Helpers/api";
import { Link, useNavigate } from "react-router-dom";
import SearchStyle from "./style";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBox(){
    const setNavigate = useNavigate();
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
        
        const inputValue = e.target.value.trim();
        if(inputValue.length >= 2){
            API.get(`movies?q=${inputValue}`)
            .then((res) => {
               setsearchResult(res.data);
               setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
            });
        } else{
            setsearchResult({
                data: [],
                metadata: {}
            });
        }
    }
    function renderSearchResult(){
        return searchResult.data.map(({id, title, poster, genres}) => {
            return(
                    <Link to={`/movie/${id}`} onClick={clearSearchInput} className="custom-link">
                        <li key={id}>
                            <div className="search-result-items">
                                <div className="poster">
                                    <img src={poster} />
                                </div>
                                <div className="content">
                                  <div className="title">{title}</div>
                                  <div className="genres">{genres.join(', ')}</div>
                                </div>
                            </div>
                        </li>
                    </Link> 
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
   function onEnter(e){
       if(e.key === 'Enter' && searchInput.current.value !== '' ){
            setNavigate(`/search?q=${e.target.value.trim()}&page=1`);
    }
   }
    return(
        <Fragment>
            <SearchStyle>
                <div className="search">
                    <input onKeyDown={onEnter} onChange={handleSearch} className='search-box' placeholder="Search..." ref={searchInput} /> 
                    <SearchOutlined className="search-icon" />  
                </div>
                <div className="serach-result"  ref={searchResultsRef}>
                <ul>
                     {renderSearchResult()}
                </ul>
                </div>
            </SearchStyle>
        </Fragment>
    )
}