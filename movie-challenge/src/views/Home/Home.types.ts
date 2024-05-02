export interface imageObject {
  original: string
  title?: string
  popularity: number
  name?: string
}

export interface HomeProps {
  imageSource: imageObject[]
  imageTvSource: imageObject[]
}
