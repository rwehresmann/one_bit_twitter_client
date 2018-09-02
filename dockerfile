FROM node:9.11.1
ENV INSTALL_PATH /one_bit_twitter_client
RUN yarn create react-app one_bit_twitter_client
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN yarn install
CMD ["yarn", "start"]