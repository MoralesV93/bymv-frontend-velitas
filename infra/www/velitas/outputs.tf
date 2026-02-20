# CloudFront outputs
output "cf_id" {
  description = "CloudFront distribution ID"
  value       = module.velitas_web.cf_id
}

output "cf_domain_name" {
  description = "CloudFront distribution domain name"
  value       = module.velitas_web.cf_domain_name
}

output "cf_arn" {
  description = "CloudFront distribution ARN"
  value       = module.velitas_web.cf_arn
}

# Aliases
output "aliases" {
  description = "Domain aliases"
  value       = module.velitas_web.aliases
}
