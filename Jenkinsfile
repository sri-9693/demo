pipeline{
    agent {
        label 'sv'
    }

    environment {
        CONTAINER_PREFIX = "node"
    }

    options {
        disableConcurrentBuilds()
    }

    triggers {
        githubPush()
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

                    try {
                        sh (
                            encoding: 'UTF-8', 
                            label: 'Delete old Container', 
                            script: "docker rm -f ${CONTAINER_PREFIX}-${BRANCH_NAME}"
                        )

                        sh (
                            encoding: 'UTF-8', 
                            label: 'Start Container', 
                            script: "docker run -itd -p ${NG_PORT}:3000 --name ${CONTAINER_PREFIX}-${BRANCH_NAME} demo:${BRANCH_NAME}-${BUILD_ID}"
                        )

                        echo "DOCKER CONTAINER NOT STARTED"
                    } catch (Exception err) {
                        echo "DOCKER CONTAINER NOT STARTED - $err"
                        sh 'false'
                    }
                }
            }
        }
    }
}