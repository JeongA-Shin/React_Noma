//movie 컴포넌트 - 하나의 컴포넌트당 한 파일
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
//Link는 브라우저 새로 고침 없이도 유저를 다른 페이지(다른 라우팅 경로)로 이동시켜주는 컴포넌트임, html의 a herf=".." 역할

function Movie({id,coverImg,title,summary,genres}){
    return(
        <div>
            <img src={coverImg} alt={title}/>
            <h2> 
                <Link to={`/movie/${id}`}>{title}</Link> 
            </h2>
            <p>{summary}</p>
            <ul> {/* 장르가  배열로 되어 있으므로- 해당되는 값이 많으므로 얘도 map으로 해서 표현해줌*/ }
                {genres.map((genre,index)=>(
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  };


export default Movie;