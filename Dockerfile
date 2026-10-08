FROM node:20-alpine

WORKDIR /app

COPY Backend/package*.json ./Backend/

RUN cd Backend && npm install --omit=dev

COPY Frontend ./Frontend
COPY Backend ./Backend

EXPOSE 3000

CMD ["node", "Backend/server.js"]