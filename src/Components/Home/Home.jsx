import React, { useState, useEffect } from 'react'
// import reas from '../../peakpx.jpg'
import './Home.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = '0df501190c975f61c6641ff6a5e54901';
const url = 'https://api.themoviedb.org/3';
const imgUrl ='https://image.tmdb.org/t/p/original'
const upcoming ='upcoming'
const nowPlaying ='now_playing'
const popular = 'popular'
const topRated = 'top_rated'
const Card =({img})=>(
    <img className='card' src={img} alt='cover'/>
)
const Row =({title , arr=[]})=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
        {
          arr.map((item, index)=>(
            <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
          ))
        }
    </div>
  </div>
)
const Home = () => {
  const [upComingMovies, setUpComingMovies] = useState([])
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const [nowPopular, setNowPopular] = useState([])
  const [nowTopRated, setTopRated] = useState([])
  const [genre, setGenre] = useState([])
  useEffect(()=>{
        const fetchUpcomingMovie=(async()=>{
          const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
          setUpComingMovies(results)
        })
        const fetchNowPlayingMovie =(async()=>{
          const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
          setNowPlayingMovie(results)
        })
        const fetchPopularMovie =(async()=>{
          const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
          setNowPopular(results)
        })
        const fetchTopRatedMovie =(async()=>{
          const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
          setTopRated(results)
        })
        const fetchAllGenre = (async()=>{
          const {data:{genres}} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
          setGenre(genres)
        })
        fetchUpcomingMovie()
        fetchNowPlayingMovie()
        fetchPopularMovie()
        fetchTopRatedMovie()
        fetchAllGenre()
  },[])

  return (
    <section className='home'>
        <div className='banner'  style={{
                    backgroundImage: nowPopular[0]
                        ? `url(${`${imgUrl}/${nowPopular[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}>
                {nowPopular[0] && <h1>{nowPopular[0].original_title}</h1>}
                {nowPopular[0] && <p>{nowPopular[0].overview}</p>}
                <div>
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
        </div>
        <Row title={'Upcomig'} arr={upComingMovies}/>
        <Row title={'NowPlaying'} arr={nowPlayingMovie}/>
        <Row title={'Popular'} arr={nowPopular}/>
        <Row title={'Top Rated'} arr={nowTopRated}/>
        <div className="genreBox">
          {
            genre.map((item)=>(
              <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
            ))
          }
        </div>
    </section>
  )
}

export default Home