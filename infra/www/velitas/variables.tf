variable "domain_name" {
  description = "Domain name identifier"
  type        = string
  default     = "bymv"
}

variable "namespace" {
  description = "Namespace for resource naming"
  type        = string
  default     = "frontend"
}

variable "name" {
  description = "Name of the project"
  type        = string
  default     = "velitas"
}

variable "service" {
  description = "Service type"
  type        = string
  default     = "s3"
}

variable "aliases" {
  description = "List of domain aliases for CloudFront"
  type        = list(string)
  default     = []
}

variable "acm_certification" {
  description = "ARN of the ACM certificate"
  type        = string
}

variable "route_53_zone_id" {
  description = "Route 53 hosted zone ID"
  type        = string
}

variable "cnmanage_key" {
  description = "State key for certificate manager"
  type        = string
  default     = "core/security/cmanager/terraform.tfstate"
}
