# Interface SVN Creator

Ceci est le dépôt Github de l'interface frontend du projet SVN Creator, une interface de facilitation de création de dépôts [Subversion (SVN)](https://subversion.apache.org/).

## Dépendances de déploiement

Cette interface est à utiliser de façon jointe avec l'[API SVN Creator](https://github.com/Kuent1/svnback), ou à déployer sur AWS via [ce projet d'infrastructure](https://github.com/Kuent1/svn_docker_swarm).

## Présentation

Ce projet utilise des technologies Web habituelles:

- HTML 5
- CSS 3
- Javascript (framework VITE)

Le tout est conteneurisé grâce à un Dockerfile, afin de faciliter son déploiement.

## Déploiement local

Cloner le code source 
```bash
git clone https://github.com/Kuent1/svnfront
```

Créer un fichier .env à la racine du projet avec le contenu suivant:

```
VITE_BACKEND_IP=<adresse IP ou FQDN de l'API>
```

Créer un fichier `public/user.json`, contenant les utilisateurs de votre organisation.

Utiliser la syntaxe suivante:

```json
{
    "users": [
        {
            "username": "user1",
            "password": "password1"
        },
        {
            "username": "user2",
            "password": "password2"
        },
        {
            "username": "user3",
            "password": "password3"
        }
    ]
}
```

Installer les dépendences Node et builder le site
```bash 
npm install
npm run build
```

Construire l'image Docker
```bash
docker build -t svnfront .
```

Déployer l'image Docker localement
```
docker compose up -d
```

L'interface est accessible localement sur le port 80 (HTTP).