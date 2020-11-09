node {
    checkout scm
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        def app = docker.build("j9mbo/dubbing:backend")
        app.push("backend-${env.BUILD_NUMBER}")
    }
}
