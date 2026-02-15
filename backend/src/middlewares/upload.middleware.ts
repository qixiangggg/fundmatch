import multer from "multer"
import path from "path"

const allowedTypes = [
    "image/png",
    "image/jpeg",
    "application/pdf"
]

const uploadPath = path.join(process.cwd(), "uploads")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, uploadPath)},
    filename: (req, file,cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage, 
    fileFilter: (req, file, cb) => {
        allowedTypes.includes(file.mimetype) ? cb(null,true) : cb(new Error("Invalid file type"));
    },
    limits: {
    fileSize: 10 * 1024 * 1024 //10MB
}})