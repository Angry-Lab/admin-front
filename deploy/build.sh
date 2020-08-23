#!/bin/sh

DOCKER_IMAGE="${DOCKER_REGISTRY}/angry-lab/admin-front:latest"

echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USER}" --password-stdin "${DOCKER_REGISTRY}"

docker build -t "${DOCKER_IMAGE}" -f ./deploy/Dockerfile .
docker tag "${DOCKER_IMAGE}" admin-front:latest
docker push "${DOCKER_IMAGE}"
