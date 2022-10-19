import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { Render } from './components/Render';
import './index.css';

export function App() {
  const [images, setImages] = useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <main className="m-4">
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {(props) => <Render {...props} />}
      </ImageUploading>
    </main>
  );
}
