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
                        script: 'docker build -t demo:latest .'
                    )
                }
            }
        }

    }


}