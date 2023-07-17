.ONESHELL:
SHELL:=/bin/bash

IMAGE_NAME=schmierschiss

all: FORCE build docker-run

build: FORCE ng-build docker-build

ng-build: FORCE
	ng build

ng-serve: FORCE
	ng serve

ng-serve-open: FORCE
	ng serve --open

docker-build: FORCE
	./build_docker_image.sh

docker-run: FORCE
	docker run --rm -p 80:80 ${IMAGE_NAME}



.PHONY: FORCE
FORCE:
