import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieListByGenres from "../../Components/MovieListByGenres";

export default function AllGenres(){

    return(
            <PrimaryLayout>
                    <section className="all-genres" style={{paddingTop: '150px'}}>
                                <MovieListByGenres page='1' genre_id={1} headerDetails={{headerTitle:'CRIM', viewAllLink:'/genre/1'}} />
                                <MovieListByGenres page='1' genre_id={2} headerDetails={{headerTitle:'DRAMA', viewAllLink:'/genre/2'}} />
                                <MovieListByGenres page='1' genre_id={3} headerDetails={{headerTitle:'ACTION', viewAllLink:'/genre/3'}} />
                                <MovieListByGenres page='1' genre_id={4} headerDetails={{headerTitle:'BIOGRAPHY', viewAllLink:'/genre/4'}} />
                                <MovieListByGenres page='1' genre_id={5} headerDetails={{headerTitle:'HISTORY', viewAllLink:'/genre/5'}} />
                                <MovieListByGenres page='1' genre_id={6} headerDetails={{headerTitle:'ADVENTURE', viewAllLink:'/genre/6'}} />
                                <MovieListByGenres page='1' genre_id={7} headerDetails={{headerTitle:'FANTASY', viewAllLink:'/genre/7'}} />
                                <MovieListByGenres page='1' genre_id={8} headerDetails={{headerTitle:'WESTERN', viewAllLink:'/genre/8'}} />
                                <MovieListByGenres page='1' genre_id={9} headerDetails={{headerTitle:'COMEDY', viewAllLink:'/genre/9'}} />
                                <MovieListByGenres page='1' genre_id={10} headerDetails={{headerTitle:'SCI-FI', viewAllLink:'/genre/10'}} />
                                <MovieListByGenres page='1' genre_id={11} headerDetails={{headerTitle:'ROMANCE', viewAllLink:'/genre/11'}} />
                                <MovieListByGenres page='1' genre_id={12} headerDetails={{headerTitle:'MYSTER', viewAllLink:'/genre/12'}} />
                                <MovieListByGenres page='1' genre_id={13} headerDetails={{headerTitle:'FAMILY', viewAllLink:'/genre/13'}} />
                                <MovieListByGenres page='1' genre_id={14} headerDetails={{headerTitle:'WAR', viewAllLink:'/genre/14'}} />
                                <MovieListByGenres page='1' genre_id={15} headerDetails={{headerTitle:'THRILLER', viewAllLink:'/genre/15'}} />
                                <MovieListByGenres page='1' genre_id={16} headerDetails={{headerTitle:'HORROR', viewAllLink:'/genre/16'}} />
                                <MovieListByGenres page='1' genre_id={17} headerDetails={{headerTitle:'MUSIC', viewAllLink:'/genre/17'}} />
                                <MovieListByGenres page='1' genre_id={18} headerDetails={{headerTitle:'ANIMATION', viewAllLink:'/genre/18'}} />
                                <MovieListByGenres page='1' genre_id={19} headerDetails={{headerTitle:'FILM-NOIR', viewAllLink:'/genre/19'}} />
                                <MovieListByGenres page='1' genre_id={20} headerDetails={{headerTitle:'SPORT', viewAllLink:'/genre/20'}} />                       
                    </section>
            </PrimaryLayout>
    )
}