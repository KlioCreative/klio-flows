# Klio Creative Flow Documentation

This repository contains the user flow documentation for Klio Creative, providing comprehensive flowcharts and user journey maps for all user types in the system.

## Documentation Structure

```
flows/
├── index.md                    # Landing page
├── _config.yml                 # Jekyll configuration
├── freelancer_technical_flow.md # Technical documentation for freelancer flows
├── freelancer_user_journey.md   # User journey maps for freelancers
├── agency_technical_flow.md     # Technical documentation for agency flows
├── agency_user_journey.md       # User journey maps for agencies
├── admin_technical_flow.md      # Technical documentation for admin flows
└── admin_user_journey.md        # User journey maps for admins
```

## Local Development

To run this documentation site locally:

1. Install Ruby and Jekyll
```bash
gem install bundler jekyll
```

2. Install dependencies
```bash
bundle install
```

3. Run the local server
```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

## Viewing the Documentation

The documentation is hosted using GitHub Pages and can be accessed at:
[https://your-username.github.io/klio-flows/](https://your-username.github.io/klio-flows/)

## Features

- Interactive Mermaid.js diagrams
- Responsive design
- Easy navigation between different user flows
- Comprehensive technical and user journey documentation

## Contributing

1. All diagrams use Mermaid.js syntax
2. Each flow is documented in its own markdown file
3. The index.md file serves as the main navigation page
4. The _config.yml file contains site configuration

## Updating Documentation

1. Edit the relevant markdown files
2. Commit and push changes
3. GitHub Pages will automatically rebuild the site
4. Changes will be live within a few minutes

## Support

For any questions or issues with the documentation, please create an issue in the repository or contact the development team.
