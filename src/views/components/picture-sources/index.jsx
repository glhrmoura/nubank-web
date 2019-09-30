import React from 'react';

export default ({ sources = [] }) => {
  return sources.map(({ media, src }) => {
    return <source key={media} media={media} srcSet={src} />
  });
};