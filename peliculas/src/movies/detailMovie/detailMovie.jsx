import React from 'react'
import { useLocation } from 'react-router-dom'
import './detailMovie.css'

export default function DetailMovie(props) {
    const location = useLocation()
    const movie = location.state
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1 className='movie-title'>{movie.titulo}</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <img src={movie.portada} alt="" />
            </div>
            <div className='col'>
                <p className='sinopsis-font'>{movie.sinopsis}</p>
                <ul>
                    <li>Director: {movie.director}</li>
                    <li>Actores: {movie.actores.map((actor)=>{
                        return <p className='ml-3 actor-font'>{actor}</p>
                    })}</li>
                    <li>Genero: {movie.genero}</li>
                    <li>Fecha de estreno: {movie.anio}</li>
                </ul>
            </div>
        </div> 
    </div>
    </>
  )
}
