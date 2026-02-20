module "velitas_web" {
  source  = "cloudposse/cloudfront-s3-cdn/aws"
  version = "1.1.0"

  namespace = var.namespace
  stage     = terraform.workspace
  name      = var.name

  aliases             = local.aliases
  acm_certificate_arn = local.acm_certificate_arn
  parent_zone_id      = local.parent_zone_id
  dns_alias_enabled   = true

  block_origin_public_access_enabled = true
  origin_force_destroy               = true
  origin_path                        = "/current"
  compress                           = true
  viewer_protocol_policy             = "redirect-to-https"
  default_root_object                = "index.html"

  # Custom error responses for SPA
  custom_error_response = [
    {
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
      error_caching_min_ttl = 10
    }
  ]

  # Cache settings
  default_ttl = 86400
  min_ttl     = 0
  max_ttl     = 31536000

  # Versioning
  versioning_enabled = true

  # Logging (disabled for cost savings)
  cloudfront_access_logging_enabled = false

  tags = {
    Project     = "locales-velita"
    Environment = terraform.workspace
    ManagedBy   = "terraform"
  }
}
