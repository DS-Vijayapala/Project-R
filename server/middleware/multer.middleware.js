import multer from 'multer'

const storage = multer.diskStorage({


})

const Upload = multer({ storage })

export default Upload
