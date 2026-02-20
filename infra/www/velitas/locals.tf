locals {
  aliases             = var.aliases
  acm_certificate_arn = var.acm_certification
  parent_zone_id      = var.route_53_zone_id

  # Uncomment to use remote state for ACM certificate
  # acm_certificate_arn = data.terraform_remote_state.acm.outputs.acm_certificate_arn
}
