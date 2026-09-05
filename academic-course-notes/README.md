# Academic Course Notes Website

A modern, fast, and light-weight static site designed to organize personal bachelor degree course notes using Astro, Tailwind CSS, and MDX.

## Features

- 📚 Organized by subjects and courses
- 🔍 Full-text search powered by Pagefind
- 🌙 Dark Mode support
- 💡 Built-in callout components for warnings, tips, and important info
- 📌 Table of contents auto-generation for lecture pages
- ⚡ High performance static export

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/content/lectures/`: Place your `.mdx` lecture files here.
- `src/components/`: Reusable Astro components.
- `src/pages/`: Astro routing pages.
- `src/layouts/`: Base layout templates.
