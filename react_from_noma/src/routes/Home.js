//import Button from "../Button";//내가 만들 Button.js에서 Button을 가져옴
//import styles from "../App.module.css";
import {useState,useEffect} from "react";//useState,juseEffect import
import Movie from "../components/Movie.js";

//페이지를 들어왔을 때 로딩 메세지가 보이고, 코인들의 리스트가 완성되면 로딩 메세지를 숨기고 코인들을 멋진 리스트로 보여줌
function Home(){
    const[loading,setLoading]=useState(true);
    const[movies,setMovies]=useState([]);
    //async-await . 비동기 코드를 더 이해하기 쉽게 해줌

    const getMovies=async()=>{
        const response=await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"); //api 호출
        const json=await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    console.log(movies);

    /* 근데 요즘은 .then() 대신에 async-await를 더 많이 씀. 이걸로 수정하자
    useEffect(()=>{
        //fetch를 통해 api 실행하고 응답 받아오기
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year").then((response)=>(
            response.json()
        )).then((json)=>{
            setMovies(json.data.movies);
            setLoading(false); //Loading값 업데이트
        });
    },[]);//dependency가 없으므로 제일 최초로 rendering될 때만 arg1이 렌더링됨
    console.log(movies);
    */

    useEffect(()=>{
        getMovies(); // api는 제일 처음 한 번만 호출되도록
    },[]);


    return(
        /* part1 강의
        <div>
            {loading?<h1>Loading...</h1>:movies.map((movie,index)=>{
                return(
                    <div key={movie.id}>
                       <img src={movie.medium_cover_image}/>
                       <h2> {movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul> {/* 장르가  배열로 되어 있으므로- 해당되는 값이 많으므로 얘도 map으로 해서 표현해줌*//* }
                            {movie.genres.map((genre,index)=>(
                                <li key={index}>{genre}</li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
        */
        <div>
            {loading?<h1>Loading...</h1>:
                <div> {/*props가 파라미터처럼 역할을 함. Movie 컴포넌트에 props를 통해 속성 값들을 넘겨줌
                , 배열의 각 요소요소 각각마다 id,medium_cover_image, title... 속성들이 있음 */}
                    {movies.map((movie)=>(
                        <Movie key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        summary={movie.summary} 
                        genres={movie.genres}
                        /> 
                    ))}
                </div>}
        </div>
    )
}

export default Home;
