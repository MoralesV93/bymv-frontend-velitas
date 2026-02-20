# Terragrunt root configuration

locals {
  default_region                  = "eu-central-1"
  default_terraform_version       = "1.3.0"
  default_AWS_provider_version    = "5.10"
  default_terraform_bucket_name   = "tf-infrastructure-management"
  default_terraform_dynamodb_name = "tf-infrastructure-management-table"
  default_AWS_profile_name        = "bymv-dev"
}

# Generate backend configuration
generate "backend" {
  path      = "common.tf"
  if_exists = "overwrite_terragrunt"
  contents  = <<EOF
terraform {
  required_version = ">= ${local.default_terraform_version}"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> ${local.default_AWS_provider_version}"
    }
  }

  backend "s3" {
    bucket         = "${local.default_terraform_bucket_name}"
    key            = "${path_relative_to_include()}/terraform.tfstate"
    region         = "${local.default_region}"
    dynamodb_table = "${local.default_terraform_dynamodb_name}"
    profile        = "${local.default_AWS_profile_name}"
    encrypt        = true
  }
}

provider "aws" {
  region  = "${local.default_region}"
  profile = "${local.default_AWS_profile_name}"

  default_tags {
    tags = {
      ManagedBy = "terraform"
      Project   = "locales-velita"
    }
  }
}
EOF
}

# Generate .terraform-version file
generate "terraform_version" {
  path      = ".terraform-version"
  if_exists = "overwrite_terragrunt"
  contents  = local.default_terraform_version
}
