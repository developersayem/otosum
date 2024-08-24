import { Paperclip, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { Badge } from "@/components/ui/badge";

interface FileData {
  fileName: string;
  fileImage: string;
}

interface UploadImgProps {
  selectedFile: FileData | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<FileData | null>>;
}

const UploadImg: React.FC<UploadImgProps> = ({
  selectedFile,
  setSelectedFile,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files![0]; // Only get the first file
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFile({
        fileName: file.name,
        fileImage: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fileupload-view h-fit ">
      <div className="kb-attach-box mb-3 flex justify-center items-center py-5">
        {selectedFile === null ? (
          <div className="avatar placeholder flex justify-center items-center ">
            <label
              htmlFor="fileupload"
              className="p-2 text-md  rounded-md cursor-pointer text-center flex items-center justify-center"
            >
              <Paperclip />
              Upload Photo
            </label>
            <input
              type="file"
              id="fileupload"
              className="file-upload-input"
              onChange={handleInputChange}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <div className="flex justify-between">
            {selectedFile.fileName.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
              <div className="avatar py-0 w-full h-full flex justify-center items-center">
                <div className="w-full rounded-lg ">
                  <Image
                    onClick={() => setSelectedFile(null)}
                    src={selectedFile.fileImage}
                    alt={selectedFile.fileName}
                    width={150}
                    height={150}
                    className="bg-transparent transition-all duration-300 rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImg;
