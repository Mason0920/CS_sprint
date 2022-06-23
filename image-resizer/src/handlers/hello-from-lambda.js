/**
 * A Lambda function that returns a static string
 */
const AWS = require('aws-sdk')
AWS.config.update({region: 'ap-northeast-2'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'})
const sharp = require('sharp')

exports.helloFromLambdaHandler = async (event, context) => {
    console.log(JSON.stringify(event));
    const parsedSQSevent = JSON.parse(event.Records[0].body)

    if (parsedSQSevent.Event === 's3:TestEvent'){
        return ;
    }
    const s3SourceBucket = parsedSQSevent.Records[0].s3.bucket.name
    const s3SourceKey = parsedSQSevent.Records[0].s3.object.key
    const s3DestinationBucket = 'image-resized-mason'

    // 원본 버킷으로부터 파일 읽기
    const s3Object = await s3.getObject({
        Bucket: s3SourceBucket,
        Key: s3SourceKey
    }).promise()

    // 이미지 리사이즈, sharp 라이브러리가 필요합니다.
    const data = await sharp(s3Object.Body)
        .resize(200)
        .jpeg({ mozjpeg: true })
        .toBuffer()

    // 대상 버킷으로 파일 쓰기
    const result = await s3.putObject({
        Bucket: s3DestinationBucket,
        Key: s3SourceKey,
        ContentType: 'image/jpeg',
        Body: data,
        ACL: 'public-read'
    }).promise()

    return 'hello from Lambda!';
}
