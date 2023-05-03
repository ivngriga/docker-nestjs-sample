A simple nestjs application with Docker created for learning purposes, which exposes a POST endpoint and a GET endpoint at port 3000. To get it running:

<p>In terminal run: <br>
git clone https://github.com/ivngriga/docker-nestjs-sample.git</p>

<p>Then, once its installed build the docker image by running (Make sure you have the docker daemon/client running locally first):
<br>cd docker-nestjs-sample
<br>docker build -t my-nest-app . </p>

<br>At this point, if you are using the docker client you should see the image in the app.

<p>Finally, run the application by running 
<br>docker run -p 3000:3000 my-nest-app</p>

<br>At this point, if you are using the docker client you should see the container running in the app, and should be able to make requests to the API.

Note: the Dockerfile includes npm install, so installing packages locally is not a requirement. If you wish to install the packages locally for quicker testing you can run npm install and remove the npm install command from the Dockerfile, but from my experience this is longer since all the context has to be transferred to the image, which can take a while especially for a large project over a network.

Possible requests:<br>
<br>Get /count-animals <br>

Required params: <br>
  -username: string <br>
  -animal_type: string ("cat" or "dog") <br>

Post /submit-offer<br>

Required params:<br>
  -username: string<br>
  -bid: number
