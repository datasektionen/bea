job "bea" {
  type = "service"

  group "bea" {
    network {
      port "http" { }
    }

    service {
      name     = "bea"
      port     = "http"
      provider = "nomad"
      tags = [
        "traefik.enable=true",
        "traefik.http.routers.bea.rule=Host(`metadorerna.se`)",
        "traefik.http.routers.bea.tls.certresolver=default",
      ]
    }

    task "bea" {
      driver = "docker"

      config {
        image = var.image_tag
        ports = ["http"]
      }

      template {
        data        = <<ENV
{{ with nomadVar "nomad/jobs/bea" }}
{{ end }}
PORT={{ env "NOMAD_PORT_http" }}
ENV
        destination = "local/.env"
        env         = true
      }

      resources {
        memory = 120
      }
    }
  }
}

variable "image_tag" {
  type = string
  default = "ghcr.io/datasektionen/bea:latest"
}
