#!/bin/bash

THIS_SCRIPT="${BASH_SOURCE[0]}"
THIS_SCRIPT_DIR="$(dirname "$THIS_SCRIPT")"

source "$THIS_SCRIPT_DIR"/read_version_from_package_json.sh

IMAGE_BASE_NAME=schmierschiss

VERSION=$(read_version_from_package_json "$THIS_SCRIPT_DIR"/..)

IMAGE_NAME="$IMAGE_BASE_NAME:$VERSION"
IMAGE_NAME_LATEST="$IMAGE_BASE_NAME:latest"

docker build -t "$IMAGE_NAME" -t "$IMAGE_NAME_LATEST" "$THIS_SCRIPT_DIR"/..
