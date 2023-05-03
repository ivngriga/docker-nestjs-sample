A simple nestjs application with Docker created for learning purposes, which exposes a POST endpoint and a GET endpoint at port 3000. To get it running:

\nIn terminal run:
\ngit clone https://github.com/ivngriga/docker-nestjs-sample.git

\nThen, once its installed build the docker image by running (Make sure you have the docker daemon/client running locally first):
\ncd docker-nestjs-sample
\ndocker build -t my-nest-app .

\nAt this point, if you are using the docker client you should see the image in the app.

Finally, run the application by running 
\ndocker run -p 3000:3000 my-nest-app

At this point, if you are using the docker client you should see the container running in the app, and should be able to make requests to the API.

Note: the Dockerfile includes npm install, so installing packages locally is not a requirement. If you wish to install the packages locally for quicker testing you can run npm install and remove the npm install command from the Dockerfile, but from my experience this is longer since all the context has to be transferred to the image, which can take a while especially for a large project over a network.

Possible requests:
Get /count-animals

Required params:
  -username: string
  -animal_type: string ("cat" or "dog")

Post /submit-offer

Required params:
  -username: string
  -bid: number
