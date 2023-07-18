#!/bin/bash

this_script=$(realpath "${BASH_SOURCE[0]}")
this_script_dir="$(dirname "$this_script")"

read_version_from_package_json() {

    if [ $# -ne 1 ]; then
        echo "no dir path provided"
        return 1 # (exitcode)
    fi
    local dir=$(realpath "$1")
    local file="$dir/package.json"

    # Check if package.json exists
    if [ -f "$file" ]; then
        # Read the content of package.json into a variable
        local package_json=$(<"$file")
        # Extract the version field using pattern matching
        local version=$(grep -o '"version": *"[^"]*"' <<<"$package_json" | grep -o '"[^"]*"$' | tr -d '"')
        echo "$version"
        return 0
    else
        echo "Error: package.json not found in the directory $dir"
        return 1
    fi

}

if [ "$0" = "$BASH_SOURCE" ]; then
    read_version_from_package_json "$@"
fi
