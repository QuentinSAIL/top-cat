# Top Cat 🐱

An interactive cat comparison tool that lets you organize tournaments between different felines across multiple rounds.

## 📋 About

Top Cat is a web application developed with React and Vite that allows users to compare cats in a tournament format. Users can select their favorite cats through multiple rounds to determine the ultimate cat!

The application is deployed at [top-cat.saillardq.fr](https://top-cat.saillardq.fr)

## 👥 Authors

- Romain SILVY-LELIGOIS
- Quentin Saillard

## 🚀 Features

- Intuitive user interface for comparing cats
- Progressive round system

## 🛠️ Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building the user interface
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Docker](https://www.docker.com/) - Containerization
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline

## 🐳 Deployment

The application is automatically deployed using Docker and GitHub Actions. Every push to the main branch triggers the deployment pipeline.

To build and run the application locally using Docker:

```bash
# Build the Docker image
docker build -t top-cat .

# Run the container
docker run -p 3000:3000 top-cat
```

## ⚙️ Installation

Make sure you have [Node.js](https://nodejs.org/) installed (version 14.0.0 or higher).

1. Clone the repository:
```bash
git clone https://github.com/your-name/top-cat.git
cd top-cat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at [http://localhost:5173](http://localhost:5173)


## 🚀 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production version locally
- `npm run lint` - Checks the code with ESLint
