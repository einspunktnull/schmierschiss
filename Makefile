.ONESHELL:
SHELL:=/bin/bash


IMAGE_BASE_NAME=schmierschiss
VERSION=$(cat VERSION)
IMAGE_NAME="$IMAGE_BASE_NAME:$VERSION"
IMAGE_NAME_LATEST="$IMAGE_BASE_NAME:latest"
UID=$(id -u)

all: FORCE build docker-run

build: FORCE ng-build docker-build

ng-build: FORCE
	ng build

ng-build: FORCE
	docker run -u $$UID --rm -v ./:/app trion/ng-cli ng build

ng-serve: FORCE
	ng serve

ng-serve-open: FORCE
	ng serve --open

docker-build: FORCE
	./build_docker_image.sh

docker-run: FORCE
	docker run --rm -p 80:80 ${IMAGE_BASE_NAME}



.PHONY: FORCE
FORCE:
