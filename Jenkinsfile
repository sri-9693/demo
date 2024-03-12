pipeline{
    agent {
        label 'sv'
    }

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Init') {
            steps {
                script {
                    sh (
                        encoding: 'UTF-8', 
                        label: 'Docker Image Build', 
                        script: "docker build -t demo:${BRANCH_NAME}-${BUILD_ID} ."
                    )
                }
            }
        }

        stage('Start') {
            steps {
                script {
                    if(BRANCH_NAME.equals("main")){
                        env.NG_PORT=8081
                    } else if (BRANCH_NAME.equals("test")){
                        env.NG_PORT=8082
                    }

                    def containerStartStatus=0

                    containerStartStatus = sh (
                        encoding: 'UTF-8', 
                        label: 'Start Container', 
                        returnStatus: true,
                        script: "docker run -itd -p ${NG_PORT}:3000 demo:${BRANCH_NAME}-${BUILD_ID}"
                    )

                    if (containerStartStatus >= 1) {
                        echo "DOCKER CONTAINER NOT STARTED"
                    } else {
                        echo "DOCKER CONTAINER STARTED"
                    }
                }
            }
        }

    }


}