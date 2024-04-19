import {useLayoutEffect, useState} from "react";

export default function DragAndDropBox({image, updateDroppedImage, style}) {
    const [displayedImage, setDisplayedImage] = useState([]);

    useLayoutEffect(() => {
        image.length > 0
            ? setDisplayedImage(image)
            : setDisplayedImage([]);
    }, [image]);

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        if (!files || files.length === 0) return;

        const imageFile = files[0];
        if (!imageFile || !imageFile.type.startsWith('image/')) return;

        updateDroppedImage([imageFile]);
    };

    const removeImage = (e) => {
        e.preventDefault();
        updateDroppedImage([]);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className={style.dragGroup}>
                <div className={style.dragZone}
                     onDrop={(e) => handleDrop(e)}
                     onDragOver={handleDragOver}>
                    <i className="fa-regular fa-clone"></i>
                    Drop & drop Image here or
                    <span>Select</span>
                    <input type="file"
                           onChange={(e) => handleDrop(e)}
                           onClick={(e) => e.target.value = null}
                           multiple={false}
                    />
                </div>
                {displayedImage.length > 0 &&
                    <div className={style.draggedImage}>
                        <div>
                            <i className="fa-solid fa-circle-xmark" onClick={removeImage}></i>
                            <img src={URL.createObjectURL(displayedImage.pop())} alt="Dropped Image"/>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
