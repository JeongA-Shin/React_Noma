import {useParams} from "react-router-dom";
//다이나믹 url에서 변경되는(의미 있는) 값을 받아오기 위한 리액트 메서드
import {useEffect,useState} from 'react';
//useEffect 임포트할 때 { }로 해줘야 함!

function Detail(){
    //const x=useParams(); // 따라서 x에는 `/movie/:id` 의 라우팅 경로에서 "id값"만 저장되는 것. 
    //console.log(x); //{id:'34015'} 이런 식으로 찍히는데, 변수명은 내가 설정한 대로 나옴. 나는 지금 "/movie/:id"이렇게 해서
    //변수명이 id인데, 내가 변수명을 tomato로 하면 {tomato:'34015'} 이렇게 됨
    const {id}=useParams(); //이러면 id=useParams.id 임. (자바스크립트 문법 중 내가 원하는 속성명과 변수명이 일치하면 이렇게 가능)
    //console.log(id) // 즉! 여기서 34015만 찍힘. '값'만 나오게 됨. 딕셔너리 형태 아님. 이제 이걸로 요청을 보내자
    const[detailInfo,setDetailInfo]=useState([]);
    const[loading,setLoading]=useState(true);
    
    const getMovie = async () => {
        const json = await ( // awiat 함수는 반드시 async 함수 내에 있어야 함... 근데 나는 fetch로 받아오는게 더 편한듯 (Home.js 참조) ㅠ
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        //console.log(json);
        setDetailInfo(json.data.movie);//detailInfo 업데이트
        //console.log("디테일");
        console.log(detailInfo);
        setLoading(false);//이제 로딩상태 끝내도 됨
    };



    useEffect(() => {
        getMovie(); // api는 제일 처음 한 번만 호출되도록
    });
    
    return (
        <div>
            <h1>Detail</h1>
            {loading?<h2>Loading...</h2>:
                <div> {/*얘는 home.js와는 다르게! 배열의 각 요소요소 각각마다 id,medium_cover_image, title... 속성들이 없고!!!
                즉 배열 속의 배열 구조가 아니라 걍 1차원 배열일 뿐임. 그래서 걍 단순 호출(map등을 쓰지 않고) detailInfo.title 이렇게만 써줘도 
                해당 아이디의 제목이 나옴-> 배열 속 배열 구조랑 헷갈려서 엄청 삽질함*/}
                    <img src={detailInfo.medium_cover_image} alt={detailInfo.title}/>
                    <h2> {detailInfo.title} </h2>
                    <p>rating: {detailInfo.rating}</p>
                    <ul> {/* 장르가  배열로 되어 있으므로- 해당되는 값이 많으므로 얘도 map으로 해서 표현해줌*/ }
                        {detailInfo.genres.map((genre,index)=>(
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                </div>}
        </div>

    )
}

export default Detail;