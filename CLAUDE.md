# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Mikael Samvelian, hosted via GitHub Pages at www.mikaelsamvelian.com. The entire site is a single `index.html` file with inline CSS and JavaScript — no build step, no dependencies, no package manager.

## Architecture

- **Single-file site**: `index.html` contains all markup, styles (`<style>` block), and behavior (`<script>` block)
- **Design**: Interactive 3D credit card metaphor with a front face (name, title, monogram, EMV chip) and a back face (links, featured project, location). Card flips on click/scroll/swipe with 3D tilt on mouse movement.
- **Fonts**: Google Fonts — Outfit (headings/UI) and DM Sans (body text)
- **Monitoring**: Sentry error tracking integrated via CDN script

## Deployment

- GitHub Pages serves directly from the `master` branch — pushing to `master` deploys the site
- Custom domain configured in `CNAME` → `www.mikaelsamvelian.com`
- Sentry releases are automated via `.github/workflows/sentry.yaml`, triggered by version tags (`v*`)

## Development

No build or install commands. Open `index.html` in a browser to preview. All changes are made directly in `index.html`.
