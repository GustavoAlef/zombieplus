pipeline{
    agent {
        docker {
            image "papitoio/node-wd"
            args "--network=skynet"
        }
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
            post {
                always{
                    junit testResults: "tests_output/**/*.xml"
                } 
            }
        }
    }
}