import { DragAndDrop } from './DragAndDrop';
import { Gallery } from './Gallery';

export const Render = ({
  imageList,
  onImageUpload,
  onImageRemoveAll,
  onImageUpdate,
  onImageRemove,
  isDragging,
  dragProps,
}) => {
  const classCSS = 'p-2 text-ebony border border-teal rounded-md cursor-pointer my-4';
  return (
    <>
      <DragAndDrop onImageUpload={onImageUpload} isDragging={isDragging} dragProps={dragProps} />

      <button onClick={onImageRemoveAll} className={classCSS}>
        Remove all images
      </button>

      <Gallery imageList={imageList} onImageUpdate={onImageUpdate} onImageRemove={onImageRemove} />
    </>
  );
};
