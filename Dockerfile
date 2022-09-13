FROM electronuserland/builder
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . .
CMD npx electron-builder --linux --x64