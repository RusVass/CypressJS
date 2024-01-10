pipeline{
    agent {
      docker {
        image 'cypress/browsers:node-18.16.0-chrome-114.0.5735.133-1-ff-114.0.2-edge-114.0.1823.51-1'
      }
    }

    environment {
      HOME = "${env.WORKSPACE}"
    }

    stages{
        stage("Install dependencies"){
            steps{
                sh 'npm i'
            }
        }
        stage('Run tests') {
          steps{
            sh ' --env "siteAuthUserName": "guest"
                  --env "siteAuthUserPassword": "welcome2qauto"
                   --env "user": "r_vasilyev@ukr.net"
                   --env "password": "12345qwerTY"
            npm run cy:run'
          }
        }
    }
    post{
        always{
            echo "========always========"
            cleanWs()
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}