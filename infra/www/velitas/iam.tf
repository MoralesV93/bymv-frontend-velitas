# IAM policy for CI/CD deployment
resource "aws_iam_policy" "deploy_sync_and_invalidate" {
  name        = "${var.namespace}-${var.name}-deploy-policy"
  description = "Policy for deploying to S3 and invalidating CloudFront"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3ListBucket"
        Effect = "Allow"
        Action = [
          "s3:ListBucket"
        ]
        Resource = [
          module.velitas_web.s3_bucket_arn
        ]
      },
      {
        Sid    = "S3ObjectOperations"
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject",
          "s3:PutObjectAcl",
          "s3:GetObjectAcl"
        ]
        Resource = [
          "${module.velitas_web.s3_bucket_arn}/*"
        ]
      },
      {
        Sid    = "CloudFrontInvalidation"
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetDistribution",
          "cloudfront:GetInvalidation"
        ]
        Resource = [
          "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${module.velitas_web.cf_id}"
        ]
      }
    ]
  })
}

output "deploy_policy_arn" {
  description = "ARN of the deployment IAM policy"
  value       = aws_iam_policy.deploy_sync_and_invalidate.arn
}
