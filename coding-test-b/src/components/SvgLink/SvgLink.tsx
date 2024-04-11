import { FC } from 'react'
import { Link } from 'react-router-dom'

type SvgLinkProps = {
  link: string
  color: string
}

export const SvgLink: FC<SvgLinkProps> = ({ link, color }) => {
  return (
    <Link to={link}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        style={{ width: '100%', height: 'auto' }}
        fill={color}
      >
        <path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z' />
      </svg>
    </Link>
  )
}
