# Utilisation d'une image Node.js comme base
FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "prod"]
