type imageObject = {
  original: string
  title?: string
  popularity: number
  name?: string
  id?: number
}

export interface GalleryProps {
  data: imageObject[]
  dataType: string
}
