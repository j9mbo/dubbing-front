node {
    checkout scm
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        def app = docker.build("j9mbo/dubbing:frontend")
        app.push("frontend-${env.BUILD_NUMBER}")
    }
}
