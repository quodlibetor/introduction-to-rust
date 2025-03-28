#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")"

echo '
# Summary
' >SUMMARY.md

rm slide-*.md || true

if which gawk >/dev/null 2>&1; then
  AWK=gawk
else
  if ! awk 'BEGIN{if(gsub(/a/,"b","test") != 1) exit 1}' 2>/dev/null; then
    echo "Your awk implementation doesn't support gsub. Please install gawk (gnu awk)."
    exit 1
  fi
  # shellcheck disable=SC2209
  AWK=awk
fi

# shellcheck disable=SC2016
$AWK -F/ '
  BEGIN{
    file=1
    content=""
    raw_name=""
    safe_name=""
    need_heading=1  # Start by needing a heading
  }
  # Heading -- use it as the slide name, but only if we need one
  /^#+ /{
    if (need_heading) {
      hashes = length(gensub(/^(#+) .*$/, "\\1", "g"))
      raw_name = gensub(/^#+ (.*)$/, "\\1", "g")
      safe_name = tolower(raw_name)
      gsub("[?` ,:&/]+", "_", safe_name)
      gsub("['"'"'.!()]", "", safe_name)
      file_name = sprintf("slide-%02d-%s.md", file, safe_name)
      indent = sprintf("%" ((hashes-1)*2) "s", "")
      need_heading = 0  # We have our heading for this section
    }
  }
  # End of slide -- write accumulated content to current file
  /^-----/{
    if (content != "") {
      print content > file_name
      printf("%s- [%s](%s)\n", indent, raw_name, file_name) >> "SUMMARY.md"
    }
    content = ""
    file++
    need_heading = 1  # Reset flag to look for next heading
    next
  }
  # Accumulate content with newlines
  {
    if (content == "") {
      content = $0
    } else {
      content = content "\n" $0
    }
  }
  # ensure the last slide is written
  END {
    if (content != "") {
      print content > file_name
    }
  }
' all-slides.md
