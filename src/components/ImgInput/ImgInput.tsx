import { useEffect, useState } from "react";

import style from "./ImgInput.module.css";

interface Props {
  defaultImg: string;
  edit: boolean;
  setFile: (image: File) => void;
}

export default function ImgInput({ defaultImg, edit, setFile }: Props) {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (!edit) setImage("");
  }, [edit]);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {image ? (
          <img src={image} alt="image" />
        ) : (
          <img
            className={style.invoiceIcon}
            src={defaultImg}
            alt="defaultImg"
          />
        )}
      </div>
      {edit && (
        <div className="mb-3">
          <input
            className="form-control"
            id="image"
            type="file"
            onChange={handleFile}
            placeholder="Elegir archivo"
          />
        </div>
      )}
    </div>
  );
}
