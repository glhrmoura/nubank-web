import React from 'react'

interface Source {
  media: string
  src: string
}

interface PictureSourcesProps {
  sources?: Source[]
}

const PictureSources: React.FC<PictureSourcesProps> = ({ sources = [] }) => {
  return sources.map(({ media, src }) => {
    return <source key={media} media={media} srcSet={src} />
  })
}

export default PictureSources 