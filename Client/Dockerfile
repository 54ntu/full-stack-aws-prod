
# //build stage
FROM node:22-alpine AS builder

WORKDIR /app

# //copy package.json files and install all dependencies
COPY package*.json ./
RUN npm install

# //copy all files to the current working directory
COPY . .

# //build the react project
RUN npm run build

# //production stage

FROM nginx:alpine

WORKDIR /app

# //copy the build files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# // expose port to 80

EXPOSE 80

# //start the nginx server
CMD [ "nginx","-g","daemon off;" ]

