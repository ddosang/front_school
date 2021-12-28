const mutler = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
aws.config.loadFromPath(__dirname + "/../config/s3Info.json");

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'bucketname',
        acl: 'public-read-write',
        key: (req, file, cb) => {
            cb(null, Date.now() + "." + file.originalname.split(".").pop()); // 파일 이름을 유니크한이름.확장자 형태로
        }
    })
});

module.exports = upload;