# S3 bucket configuration is handled by the cloudfront-s3-cdn module
# This file is for any additional S3 resources or overrides

# Output the bucket name for reference
output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = module.velitas_web.s3_bucket
}

output "s3_bucket_arn" {
  description = "ARN of the S3 bucket"
  value       = module.velitas_web.s3_bucket_arn
}
