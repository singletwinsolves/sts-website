FROM node:alpine
WORKDIR /app

#copying files and folders into working directory /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# copy all src, public, and package.json files to container
#COPY ./ /app
COPY src ./src
COPY public ./public
COPY node_modules .
# Install packages 
RUN npm install --silent && npm install yarn   
 # build for production
RUN npm run build 

EXPOSE 3000
# start app 
CMD ["npm", "start"]
#CMD ["npm", "test"]
#CMD ["yarn", "run"]
