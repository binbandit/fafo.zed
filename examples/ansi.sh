#!/bin/sh
# Run in Zed's terminal to inspect normal, bright, and dim ANSI colors.
printf '\nFuck Around Find Out / terminal palette\n\n'
for intensity in 0 1 2; do
  case "$intensity" in
    0) label=Normal ;;
    1) label=Bright ;;
    2) label=Dim ;;
  esac
  printf '%-8s' "$label"
  for color in 30 31 32 33 34 35 36 37; do
    if [ "$intensity" = 1 ]; then
      printf '\033[%sm Aa 123 \033[0m' "$((color + 60))"
    else
      printf '\033[%s;%sm Aa 123 \033[0m' "$intensity" "$color"
    fi
  done
  printf '\n'
done
printf '\n\033[32mSuccess\033[0m  \033[33mWarning\033[0m  \033[31mError\033[0m  \033[36mInformation\033[0m\n'
printf '\033[40;37m White on black \033[0m  \033[7m Inverse text \033[0m\n\n'
