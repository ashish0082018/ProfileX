"use server"
import cloudinary from "./cloudinary";

export const Uploadimage=async (file:File,folder:string)=>{
    const buffer=await file.arrayBuffer();
    const bytes=Buffer.from(buffer);

    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({
            resource_type:"auto",
            folder:folder
        },async(error,result)=>{
            if(error){
                console.log("error runs");
                
                return reject(error.message)
            }
            return resolve(result)
        }).end(bytes)
    })
}


// "use server";
// import cloudinary from "./cloudinary";
// import sharp from "sharp";

// export const UploadImage = async (file: File, folder: string) => {
//   try {
//     // Convert the file to a buffer
//     const buffer = await file.arrayBuffer();
//     const bytes = Buffer.from(buffer);

//     // Use sharp to process the image
//     const image = sharp(bytes);

//     // Get the metadata to check the image format (png, jpeg, etc.)
//     const metadata = await image.metadata();

//     // Compress the image based on its format
//     let optimizedBuffer: Buffer;

//     if (metadata.format === "jpeg") {
//       // For JPEG, compress with quality set to 80%
//       optimizedBuffer = await image
//         .jpeg({ quality: 80 }) // Compress JPEG to 80% quality
//         .toBuffer();
//     } else if (metadata.format === "png") {
//       // For PNG, apply lossless compression
//       optimizedBuffer = await image
//         .png({ compressionLevel: 9 }) // Lossless compression for PNG
//         .toBuffer();
//     } else {
//       // If the image format is neither JPEG nor PNG, throw an error
//       throw new Error("Unsupported image format. Only JPEG and PNG are allowed.");
//     }

//     // Check if the optimized image is less than 1MB
//     if (optimizedBuffer.length > 1 * 1024 * 1024) {
//       throw new Error("Optimized image is still larger than 1MB.");
//     }

//     // Upload the optimized image to Cloudinary
//     return new Promise((resolve, reject) => {
//       cloudinary.uploader.upload_stream(
//         {
//           resource_type: "auto", // Automatically detect the file type (image, video, etc.)
//           folder: folder, // Folder name in Cloudinary
//         },
//         (error, result) => {
//           if (error) {
//             console.error("Error uploading image:", error);
//             return reject(error.message);
//           }
//           return resolve(result);
//         }
//       ).end(optimizedBuffer); // Upload the optimized image
//     });
//   } catch (error) {
//     console.error("Error processing image:", error);
//     throw new Error("Image processing failed.");
//   }
// };
