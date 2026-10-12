pipeline {
agent any

stages {
    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Install Dependencies') {
        steps {
            bat 'npm.cmd ci'
            bat 'npx.cmd playwright install chromium'
        }
    }

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

    stage('Run Cypress Tests') {
        steps {
            bat 'npm.cmd run cy:run'
        }
    }
}

post {
    always {
        archiveArtifacts(
            artifacts: 'playwright-report/**, test-results/**',
            allowEmptyArchive: true
        )

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