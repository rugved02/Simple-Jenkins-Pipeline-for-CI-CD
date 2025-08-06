pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        echo 'Building Docker image...'
        sh 'docker build -t my-jenkins-demo:${BUILD_NUMBER} .'
      }
    }

    stage('Test') {
      steps {
        echo 'No tests defined yet—add your own here.'
        // e.g., sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying container...'
        sh '''
          docker rm -f jenkins-demo || true
          docker run -d --name jenkins-demo -p 8080:80 my-jenkins-demo:${BUILD_NUMBER}
        '''
      }
    }
  }

  post {
    always {
      echo "Build #${BUILD_NUMBER} finished with status: ${currentBuild.currentResult}"
    }
  }
}
