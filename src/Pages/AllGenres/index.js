import { Fragment, useEffect, useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieListByGenres from "../../Components/MovieListByGenres";
import API from "../../Helpers/api";
import Loading from "../../Components/Loading";
import EmptyData from "../../Components/ErrorHandeling/EmptyData";

export default function AllGenres(){
   const [ genres, setGenres] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
        getApi();
   },[]);

async function getApi(){
        try{
        const response = await   API.get(`genres`);
        setGenres(response.data);
        setLoading(false);
        window.scrollTo({
                top: 0,
                behavior: 'smooth'
        });
        }catch(e){
                setLoading(false);
                
        }
}
   function renderFarm(){
        if(genres.length === 0){
                return( <EmptyData /> )
            }
        console.log('mahsa')
        console.log(genres)
        return genres.map(({id, name}) => {
                return(
                        <MovieListByGenres key={id} page='1' genre_id={id} headerDetails={{headerTitle: `${name}`, viewAllLink:`/genre/${id}}`}} />
                )
        })
   }
    return(
            <PrimaryLayout>
                    <section className="all-genres" style={{paddingTop: '150px'}}>
                           {loading === false ? (<Fragment>{renderFarm()}</Fragment>) : ( <Loading /> )}   
                    </section>
            </PrimaryLayout>
    )
}