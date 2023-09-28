<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Invoices</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Deploying to an Ubuntu Server using Docker</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started

The instructions here are for getting the project setup locally. If you prefer using a built docker image, visit [Dockerhub](https://hub.docker.com/repository/docker/suleyunus/invoices/general)

### Prerequisites

* Node
* Angular CLI

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/suleyunus/invoices.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Run the app
   ```sh
   ng serve -o
   ```

### Docker

The application has Docker support. You may run the Docker build locally on your terminal by following the steps below: 

1. Build the Docker image
  ```sh
  docker build -t <your-preferred-app-name> .
  ```
2. Test the Docker image locally
  ```sh
  docker run -d -p 8080:80 <your-preferred-app-name>
  ```

With Github Actions however, you only need to set your secrets to DOCKER_USERNAME and DOCKERHUB_TOKEN and you will have an image on every push to the main branch. To deploy to a server, follow the instructions [here](https://hub.docker.com/repository/docker/suleyunus/invoices/general)


<p align="right">(<a href="#readme-top">back to top</a>)</p>