import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <ImageContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext);
}
