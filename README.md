


# fabric-course  - EXERCISE 1
Set up your environment by running the bc-dev-env container
```
cd /home/huma
git clone -b improvedsetup https://github.com/hqureshiGmail/fabric-course.git
cd /home/huma/fabric-course/educative
docker-compose build
docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /home/huma:/home/huma educative_bc-dev-env /bin/bash
```
This will launch interactive shell in the main container. From here on everything should be run in this container for all 3 exercises.

One by One run commands in:
```
cd /home/huma/fabric-course/infra-basic-network
./exercise-1.sh
```

# fabric-course  - EXERCISE 2

One by One run commands in:
```
cd /home/huma/fabric-course/chaincode
./exercise-2.sh
```

# fabric-couse - EXERCISE 3
```
cd /home/huma/fabric-course/api
docker-compose up
hit url: {HOST}/query
hit url: {HOST}/invoke
hit url: {HOST}/query
```
