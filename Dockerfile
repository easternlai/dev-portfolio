FROM node:latest

# Create app directory
WORKDIR /portfoloi

# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 80
CMD ["npm", "start"]