#!/bin/bash

# This script uploads contents of

SOURCE_DIR="dist"
DEST="access:/nfs/farm/groups/acm/public_html"

echo "Copying site to OSU servers"
scp -r "$SOURCE_DIR/"* "$DEST/"

ssh access "chmod -R 755 /nfs/farm/groups/acm/public_html"
