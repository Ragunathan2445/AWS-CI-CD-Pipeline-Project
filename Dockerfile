FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./backend/

RUN cd backend && npm install --omit=dev

COPY frontend ./frontend
COPY backend ./backend

EXPOSE 3000

CMD ["node", "backend/server.js"]