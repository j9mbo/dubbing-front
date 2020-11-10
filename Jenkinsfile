node {
    checkout scm
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
        def app = docker.build("j9mbo/dubbing:frontend")
        app.push("frontend-${env.BUILD_NUMBER}")
        app.run(-p 80:80 frontend-${env.BUILD_NUMBER} )
    }
}
