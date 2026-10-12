pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Check Node and npm') {
            steps {
                bat 'node --version'
                bat 'npm.cmd --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd ci'
                bat 'npx.cmd playwright install chromium'
            }
        }

        stage('Run Playwright UI and API Tests') {
    stage('Run UI, API and Database Tests') {
    steps {
        withCredentials([
            string(
                credentialsId: 'mysql-db-password',
                variable: 'DB_PASSWORD'
            )
        ]) {
            bat 'npm.cmd test'
        }
    }
}
}

    }

    post {
    always {
        archiveArtifacts artifacts: 'playwright-report/**, test-results/**',
                         allowEmptyArchive: true

        publishHTML(target: [
            reportName: 'Playwright HTML Report',
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
        ])
    }
}
}