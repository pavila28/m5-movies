import React, { useState } from 'react'
import {Button, Card} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

export default function CardComponent(props) {
  const [like, setLike] = useState(false)

  const handlerLike = () => {
    setLike(!like)
  }

  return (
    <>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.movie.portada} />
                <Card.Body>
                  {/* {like ? <i class="bi bi-heart"></i> : <i class="bi bi-heart-fill"></i>} */}
                  <button className={like ? 'btn btn-danger' : 'btn btn-primary'} onClick={handlerLike}>Me gusta</button>
                  <Card.Title>{props.movie.titulo}</Card.Title>
                  <Card.Text>
                      {props.movie.sinopsis}
                  </Card.Text>
                  <Card.Text>
                    {props.movie.calificacion}
                  </Card.Text>
                  <Link to={`/${props.movie.genero}/${props.movie.titulo}`} state={props.movie}>
                  Ver detalle
                  </Link>
                </Card.Body>
            </Card>
    </>
  )
}
