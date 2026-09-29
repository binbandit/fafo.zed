# Validation record

Reviewed on macOS in Zed Preview 1.22.0, 29 September 2026.

## Theme coverage

Every variant has 190 explicitly assigned style fields, 55 syntax captures,
eight accent colors, and eight collaboration player colors. The JSON passed
the published [Zed theme schema](https://zed.dev/schema/themes/v0.2.0.json).
Field coverage was also compared with Zed's current
[theme definitions](https://github.com/zed-industries/zed/blob/main/crates/settings_content/src/theme.rs),
because the published schema omits some newer fields. Deprecated fields are
excluded. The extension manifest parses as TOML and all eight names are unique.

Coverage includes editor and gutter colors, active lines, whitespace, guides,
wrap guides, line numbers, diagnostics, search, selections, predictions,
Git status, diff rows and words, conflict markers, debugger highlights,
panels, tabs, menus, title/status bars, scrollbars, minimap, terminal colors,
Vim/Helix indicators, and collaboration cursors.

## Native review

The screenshots in the [gallery](gallery.md) are captures of the installed
development extension in Zed. Blank space outside the captured window was
cropped away; the theme colors were not retouched.

| Check | Variants exercised |
| --- | --- |
| TypeScript types, functions, comments, punctuation | All eight |
| JavaScript object keys, strings, nested objects, destructuring, interpolation | All eight |
| TOML tables, dotted keys, arrays, dates, inline tables | All eight |
| Three-line JavaScript snippet | All eight |
| 58,001-line JavaScript file, including navigation to its middle | All eight |
| ANSI normal, explicit bright, dim, status, inverse, and white-on-black text | All eight |
| Added and removed diff rows | All eight |
| Search matches and full-buffer selection | Four solid variants |
| Python, Rust, JSON, CSS, Markdown, and diagnostic underlines | Nighttime Dark Blur, plus earlier palette review |
| Theme picker, command palette, tabs, sidebar, status bar | All eight |

The large specimen was a disposable 1.34 MB file constructed from repeated
object examples in separate scopes. It was used for readability and navigation
checks, not as a performance benchmark. Test workspace warnings visible in
some screenshots come from deliberately invalid diagnostics and standalone
language-server setup.

## Contrast

The values below use the WCAG relative-luminance formula in sRGB. Syntax
checks include every configured capture, including comments and punctuation,
against the editor, active line, both search fills, added/deleted rows,
added/deleted word fills, and all eight player selection fills.

For Blur variants, the workspace tint was also composited over pure black and
pure white. Those are conservative backdrop extremes for the tint calculation.
The native compositor, display profile, text antialiasing, and user overrides
can change the rendered result; these are palette measurements, not a blanket
accessibility certification.

| Variant | Lowest syntax contrast across tested surfaces | Lowest colored ANSI contrast |
| --- | ---: | ---: |
| Daytime Light | 5.22:1 | 4.90:1 |
| Daytime Light Blur | 4.72:1 | 4.65:1 |
| Daytime Dark | 4.72:1 | 6.23:1 |
| Daytime Dark Blur | 4.72:1 | 4.66:1 |
| Nighttime Light | 5.30:1 | 4.92:1 |
| Nighttime Light Blur | 4.66:1 | 4.67:1 |
| Nighttime Dark | 4.72:1 | 6.54:1 |
| Nighttime Dark Blur | 4.72:1 | 4.67:1 |

The colored ANSI measurement covers red, green, yellow, blue, magenta, and
cyan in normal, bright, and dim palettes. Conventional black and white slots
retain their terminal roles for explicit backgrounds and inverse text; they
are not guaranteed to contrast with every terminal background. Applications
that supply their own 256-color or true-color output bypass these theme slots.

Primary editor text on the solid canvases measures between 10.21:1 and
13.04:1. Ordinary muted UI text was also checked against the workspace,
elevated surfaces, and selection fills. Disabled controls and decorative
borders are intentionally quieter and are not included in the syntax target.

## Limits and maintenance

- Native blur was verified on macOS. Linux and Windows were not visually
  tested; the result depends on Zed and the platform compositor. Solid
  variants are available when consistent opacity is preferred.
- Debugger, Helix, minimap, conflict, and collaboration fields are populated
  and structurally checked. A live multi-user session and every debugger or
  modal-editing state were not exercised end to end.
- Language grammars decide which syntax capture a token receives. Quoted
  JavaScript keys share the string capture. Bare JavaScript keys, JSON keys,
  and TOML keys receive property styling.
- Font, icon, terminal, semantic-highlighting, and theme overrides can change
  the appearance. Screenshots retain the review environment's settings.
- Recheck field coverage against Zed's definitions when updating compatibility.
  Recheck syntax contrast on selections, search, diffs, and both glass backdrop
  extremes whenever a foreground or background changes.

The extension uses native theme JSON only. It does not execute code or bundle
the reference photographs.
