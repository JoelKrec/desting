FROM node:18

# If it is needed to NOT copy over folders like .git or node_modules
# RUN apt-get update && apt-get install -y rsync

WORKDIR /app

COPY ./runTests.sh .

RUN mkdir /toTest

RUN mkdir /cpToTest

CMD ./runTests.sh