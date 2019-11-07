pipeline{
    agent any
    stages {
        stage('build'){
            steps {
                sh "npm install"
            }
        }
        stage('tests'){
            steps {
                sh "npm test"
            }
        }
    }
}