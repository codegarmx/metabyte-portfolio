# --- Development stage --- #
FROM node:18-slim AS development

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node
EXPOSE 3000
CMD npm run dev