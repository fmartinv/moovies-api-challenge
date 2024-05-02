import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { Container, ImgItem, Title } from './galleryStyles'
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { GalleryProps } from './gallery.types'

export const Gallery: React.FC<GalleryProps> = ({ data, dataType }) => {
  return (
    <Container>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        scrollbar={{ draggable: true }}
        className='mySwiper'
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
      >
        {data?.map((data, index) => (
          <SwiperSlide key={index}>
            <Link to={`/${dataType}/${data.id}`}>
              <ImgItem src={data.original} alt={data.title} />
              <Title>{data.title}</Title>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
