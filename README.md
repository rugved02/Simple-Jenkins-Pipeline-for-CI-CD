# My Jenkins CI/CD Demo

A simple Node.js application demonstrating a Jenkins-powered CI/CD pipeline using Docker.

## Project Structure

my-jenkins-demo/
├── Jenkinsfile
├── Dockerfile
├── .gitignore
├── .dockerignore
├── package.json
├── package-lock.json
└── server.js

## Tools

- **Jenkins** (configured with Docker plugin)  
- **Docker Engine**  
- **Git**  
- **Node.js** (v18+)  
- **npm**

## Jenkins Configuration
Create a Pipeline job in Jenkins.
Configure SCM:
Type: Git
Repository URL: Your URL
Branch: main
Script Path: Jenkinsfile
Add Build Triggers:
Poll SCM: H/5 * * * * (every 5 minutes)
Install Plugins:
Docker Pipeline Plugin
(Optional) Pipeline: Stage View, Blue Ocean


## usage
Manual build: Go to the job in Jenkins and click Build Now.
Automatic build: Push any change to main:
git add .
git commit -m "Your message"
git push

