.ONESHELL:
SHELL:=/bin/bash


IMAGE_BASE_NAME=schmierschiss
VERSION=$(cat VERSION)
THIS_DIR=$(realpath ./)
UID=$(id -u)

all: FORCE build docker-run

build: FORCE ng-build docker-build

ng-build: FORCE
	ng build

ng-build: FORCE
		echo ${THIS_DIR}
		docker run -u $$UID --rm -v ${THIS_DIR}:/app trion/ng-cli ng build

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
