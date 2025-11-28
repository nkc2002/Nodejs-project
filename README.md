# Node.js Bootstrap Creative Theme

A simple Node.js web application built with Express.js, serving the Creative Bootstrap theme from Start Bootstrap. This project is optimized for deployment on Vercel.

## Features

- Express.js server setup
- Bootstrap 5 Creative theme
- Responsive design
- Portfolio sections
- Contact form integration ready
- Vercel deployment ready

## Prerequisites

- Node.js >= 18.x
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Nodejs
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Local Development

Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Deployment

This project is configured for deployment on Vercel.

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

## Project Structure

```
Nodejs/
├── public/              # Static files
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── index.html      # Main HTML file
├── server.js           # Express server configuration
├── package.json        # Project dependencies
└── vercel.json         # Vercel deployment configuration
```

## Technologies Used

- **Backend**: Express.js v5.1.0
- **Frontend**: Bootstrap 5
- **Template**: Start Bootstrap Creative Theme
- **Deployment**: Vercel

## Configuration

The server uses the following configuration:
- Default port: 3000 (can be overridden with PORT environment variable)
- Static files served from the `public` directory

## License

ISC

## Credits

- Template: [Start Bootstrap - Creative Theme](https://startbootstrap.com/theme/creative/)
- Framework: [Bootstrap](https://getbootstrap.com/)
