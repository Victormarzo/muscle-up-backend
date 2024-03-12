FROM node:20.1.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./app 
ENV PORT=4002
EXPOSE 4002
RUN npx prisma generate
CMD ["npm", "run", "dev:migration:generate"]