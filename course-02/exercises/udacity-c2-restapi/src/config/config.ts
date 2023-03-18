export const config = {
  "dev": {
    // "username": "concelman",
    // "password": "concelman",
    // "database": "udagramconcelmandev",
    // "host": "udagramconcelmandev.cuwg89p85l6e.us-east-1.rds.amazonaws.com",
    // "dialect": "postgres",
    // "aws_region": "us-east-1",
    // "aws_profile": "default",
    // "aws_media_bucket": "udagram-concelman-dev"

    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    // "aws_profile": "default",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
