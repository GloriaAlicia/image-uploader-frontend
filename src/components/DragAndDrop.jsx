import { IoIosImages } from 'react-icons/io';

export const DragAndDrop = ({ isDragging, onImageUpload, dragProps }) => {
  const style = isDragging ? 'bg-teal/[.1]' : '';
  return (
    <article
      {...dragProps}
      className={`flex justify-center items-center flex-col border-2 border-dashed border-teal rounded-md p-5 ${style}`}
    >
      <IoIosImages color={'teal'} size={'4em'} />

      <div className="flex text-ebony font-semibold">
        <p>Drop your image here, or</p> &nbsp;
        <button onClick={onImageUpload} className="text-teal underline">
          browse
        </button>
      </div>

      <p className="text-gray">Supports: jpg, gif, png</p>
    </article>
  );
};
