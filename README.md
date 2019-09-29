


# fabric-course  - EXERCISE 1
Set up your environment by running the bc-dev-env container
```
cd /home/huma
git clone -b containerized https://github.com/hqureshiGmail/fabric-course.git
cd educative
docker-compose build
docker run -it -v /var/run/docker.sock:/var/run/docker.sock -v /home/huma:/home/huma educative_bc-dev-env /bin/bash
```

One by One run commands in:
```
cd /home/huma/fabric-course/infra-basic-network
./exercise-1.sh
```

# fabric-course  - EXERCISE 2

One by One run commands in:
```
cd chaincode
./exercise-2.sh
```

# fabric-couse - EXERCISE 3
```
cd api
docker-compose up
hit url: {HOST}/query
hit url: {HOST}/invoke
hit url: {HOST}/query
```
