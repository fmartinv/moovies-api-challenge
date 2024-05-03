export interface imageObject {
  original: string | undefined
  title?: string
  popularity: number
  name?: string
  id?: number
}

export interface HomeProps {
  imageSource: imageObject[]
  imageTvSource: imageObject[]
}
