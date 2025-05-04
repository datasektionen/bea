job "bea" {
  type = "service"

  group "bea" {
    network {
      port "http-frontend" { 
        to = 3000 
      }
    }

    service {
      name     = "bea-frontend"
      port     = "http"
      provider = "nomad"
      tags = [
        "traefik.enable=true",
        "traefik.http.routers.bea.rule=Host(`metadorerna.se`)",
        "traefik.http.routers.bea.tls.certresolver=default",
      ]
    }

    task "bea-frontend" {
      driver = "docker"

      config {
        image = var.image_tag-frontend
        ports = ["http"]
      }

      template {
        data        = "PORT={{ env \"NOMAD_PORT_http-frontend\" }}"
        destination = "local/.env"
        env         = true
      }

      resources {
        memory = 100
      }
    }
  }
}

variable "image_tag-frontend" {
  type = string
  default = "ghcr.io/datasektionen/bea-frontend:latest"
}