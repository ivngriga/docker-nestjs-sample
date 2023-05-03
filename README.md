A simple nestjs application with Docker created for learning purposes, which exposes a POST endpoint and a GET endpoint at port 3000. To get it running:

In terminal run:
git clone https://github.com/ivngriga/docker-nestjs-sample.git

Then, once its installed build the docker image by running (Make sure you have the docker daemon/client running locally first): 
docker build -t my-nest-app 

At this point, if you are using the docker client you should see the image in the app.

Finally, run the application by running 
docker run -p 3000:3000 my-nest-app

At this point, if you are using the docker client you should see the container running in the app, and should be able to make requests to the API.

Possible requests:
Get /count-animals

Required params:
  -username: string
  -animal_type: string ("cat" or "dog")

Post /submit-offer

Required params:
  -username: string
  -bid: number
