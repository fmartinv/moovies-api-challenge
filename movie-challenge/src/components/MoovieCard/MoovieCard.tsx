import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import type { MoovieCardProps } from './types'

const MoovieCard: React.FC<MoovieCardProps> = ({ moovie, imgUrl }) => {
  return (
    <div className='containerMoovieCard'>
      <Link to={`/movie/${moovie.id}`}>
        <div className='moovie-card'>
          <div className='imageWrapper'>
            <img
              className='moovieImg'
              src={`${imgUrl}${moovie.poster_path}`}
              alt={moovie.title}
            />
          </div>
        </div>
      </Link>
      <section className='details'>
        <article className='articleOverview'>
          <h3>{moovie.title}</h3>
          <p className='pargraphOverview'>{moovie.overview}</p>
        </article>
      </section>
    </div>
  )
}

export default MoovieCard
