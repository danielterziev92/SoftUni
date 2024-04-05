import {useState} from 'react';

const DragAndDrop = () => {
    const [droppedImages, setDroppedImages] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const imageFiles = files.filter((file) => file.type.startsWith('image/'));
        setDroppedImages([...droppedImages, ...imageFiles]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="drag-and-drop">
            <div
                className="drop-zone"
                onDrop={(e) => handleDrop(e)}
                onDragOver={handleDragOver}
            >
                Drop images here
            </div>
            <div className="dropped-images">
                <h2>Dropped Images</h2>
                <div className="image-preview">
                    {droppedImages.map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`Dropped Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
