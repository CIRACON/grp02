node {

    stage('Checkout') {
        git (branch:'main', url: 'https://github.com/CIRACON/grp02.git')
    }
    stage('Install Dependencies') {
        sh'''
            npm install
        '''
    }
    stage('Install Server Dependencies') {
        sh'''
            cd server
            mkdir -p build
            npm install
        '''
    }
    stage('Build'){
       sh'''
            npm run build
        ''' 
    }
     stage('Build DockerImage') {

         sh '''sudo docker build -t hackathon/hackathon_tldp .'''
        
    }
    
}