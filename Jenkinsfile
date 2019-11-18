pipeline{
    agent {
        docker {image "papitoio/node-wd"}
    }
    stages {
        stage('build'){
            steps {
                sh "npm install"
            }
        }
        stage('tests'){
            steps {
                sh "npm run test:ci"
            }
        }
    }
}