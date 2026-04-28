# Andre Harris — Personal Portfolio

Personal portfolio built with Jekyll, designed for deployment on GitHub Pages.

## Tech Stack

- **Jekyll**
- **Liquid**
- **HTML**
- **CSS**
- **JavaScript**

## Project Structure

```
├── _config.yml            # Jekyll configuration
├── _data/
│   ├── experience.yml     # Work experience entries
│   ├── projects.yml       # Project entries
│   └── skills.yml         # Skill groups and certifications
├── _includes/
│   ├── nav.html
│   ├── hero.html
│   ├── media.html
│   ├── experience.html
│   ├── skills.html
│   ├── projects.html
│   ├── tabs.html
│   └── footer.html
├── _layouts/
│   └── default.html       # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── Github_Profile_Picture.png
│   │   ├── logos/
│   │   │   └── handshake.png
│   │   └── projects/
│   │       ├── Emotion_Profiler_&_Music_Recommender.png
│   │       └── Campus Center.png
│   ├── videos/
│   │   └── demo.mp4
│   └── documents/
│       └── Andre_Harris-Resume.pdf
├── index.html             # Main page content
├── Gemfile
└── README.md
```

## Local Development

### Prerequisites

- Ruby 3.0+
- RubyGems
- GCC
- Make
- Bundler
- Jekyll

Quickstart Guide: https://jekyllrb.com/docs/

### Setup

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

The site will be available at `http://localhost:4000`.

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set the source to the `main` branch, `/ (root)` folder
4. GitHub Pages will automatically build and deploy the site

### Custom Domain (Optional)

Add a `CNAME` file to the root with your domain:

```
yourdomain.com
```

Then configure your DNS provider to point to GitHub Pages.

## Contact

- **Email:** andremharris78@gmail.com
- **GitHub:** [MugenUni](https://github.com/MugenUni)
- **LinkedIn:** [andre-harris-b64610268](https://www.linkedin.com/in/andre-harris-b64610268/)

## License

MIT