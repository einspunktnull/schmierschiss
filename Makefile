.ONESHELL:
SHELL:=/bin/bash

IMAGE_NAME=schmierschiss

all: FORCE docker

docker: FORCE docker-build docker-run

docker-build: FORCE
	./build.sh

docker-run: FORCE
	docker run --rm -p 80:80 ${IMAGE_NAME}


.PHONY: FORCE
FORCE:
