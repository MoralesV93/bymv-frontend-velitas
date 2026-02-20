# Data sources for infrastructure references

data "aws_caller_identity" "current" {}

# Uncomment to use remote state for ACM certificate
# data "terraform_remote_state" "acm" {
#   backend = "s3"
#   config = {
#     bucket  = "tf-infrastructure-management"
#     key     = var.cnmanage_key
#     region  = "eu-central-1"
#     profile = "bymv-dev"
#   }
# }
