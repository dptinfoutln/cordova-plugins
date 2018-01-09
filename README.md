# Création d'un plugin

Dans cette première partie, nous allons réaliser un plugin Jquery pour afficher une boite de dialogue avec le design propre à Android. Le but de cet exercice est de se familiariser avec la création d'un plugin.
Le projet est composé de 3 fichiers :
  - Un fichier CustomAlertPlugin.java qui se situe dans le dossier src/android/com/example/
  - Un fichier plugin.xml qui contient l'ensemble des configurations du plugin
  - Un fichier plugin.js qui permet de faire l'interface entre le code source Java et notre plugin. Il se situe dans le dossier www/
 
```terminal 
├── package.json
├── plugin.xml
├── src
│   └── android
│       └── com
│           └── example
│               └── CustomAlertPlugin.java
└── www
   └── plugin.js
```
 
Nous vous invitons à regarder la documentation officielle de Cordova pour la création d'un plugin [ici](https://cordova.apache.org/docs/fr/latest/guide/hybrid/plugins/)

### Première étape : le code Java

La classe de notre plugin hérite de `CordovaPlugin` qui permet l'utilisation de la méthode exécute et de pouvoir récupérer l'ensemble des différents attribus de la classe.
Pour plus d'informations sur la classe [CordovaPlugin](https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java).

Le but de cette première partie est donc de remplir la fonction `execute(String action, JSONArray args, final CallbackContext callbackContext)` qui va permettre d'exécuter les différentes fonctions Java de notre plugin en testant la valeur d'```action``` ainsi que la fonction `showCustomAlert(String title, String content)` pour créer la boite de dialogue en customisant le titre et le contenu.
 - `String action` est le nom de la fonction du plugin à exécuter 
 - `JSONArray args` Le json qui contient l'ensemble des paramètres (ici le titre est la description de la boite de dialogue)
 - `CallbackContext callbackContext` qui permet de retourner si l'utilisation d'un plugin a été un succès ou non

Pour créer une boite de dialogue en Android, nous utiliserons la classe  [AlertDialog](https://developer.android.com/guide/topics/ui/dialogs.html).


### Deuxième étape : l'interface JS

La deuxième étape est de réaliser l'interface entre notre code Java écrit précédemment et le javascript. Dans le fichier `plugin.js`, nous allons donc déclarer nos différentes fonctions de la manière suivante :
```javascript
    window.echo = function(str, callback) {
        cordova.exec(callback, function(err) {
            callback('Nothing to echo.');
        }, "Echo", "echo", [str]);
    };
```

### Dernière étape : tester le plugin

La première étape est de créer un nouveau projet C puis d'ajouter la plateforme Android. Pour finir, on ajoute le plugin que l'on vient de créer à notre nouveau projet.
```sh
$ cordova create [nom_de_votre_app] [package] & cd [nom_de_votre_app]`
$ cordova platform add android@6.1.0
$ cordova plugin add ../alert-plugin/
```

Pour vérifier que votre plugin a bien été ajouté, vous pouvez utiliser la commande suivante qui liste l'ensemble des plugins du projet :
```sh
$ cordova plugin ls
```

Nous allons donc ajouter notre code dans la fonction `onDeviceReady` pour utiliser le plugin. Celui-ci va alors être exécuté lors du lancement de votre application :

```sh
$ cordova build android
$ cordova run android
```

A vous de jouer !

# Google maps

Pour la deuxième partie de ce TP, nous allons afficher une Google maps et balayer une partie de ses fonctionnalités. Le but est d'utiliser un plugin développé par une tierce personne. Vous pouvez vous inspirer de la documentation officiel de [Google maps](https://developers.google.com/android/reference/com/google/android/gms/maps/GoogleMap.html#animateCamera(com.google.android.gms.maps.CameraUpdate,%20com.google.android.gms.maps.GoogleMap.CancelableCallback ).

Le projet Cordova est déjà créé et paramétré avec une clé générée pour utiliser l'API Google maps. De ce fait, dans cette partie du TP, vous n'aurez seulement qu'à vous concentrer sur l'utilisation d'un plugin.

Pour ce TP, nous avons généré la clé pour l'utilisation de l'API Google maps. Si vous souhaitez générer vous-même une clé, c'est [ici](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&hl=Fr). Dans le cadre de ce TP, il n'est pas nécessaire d'en générer une pour pouvoir utiliser l'API Google maps. En effet, le nombre limite de requête est largement suffisant pour l'ensemble des membres de la promotion.

### Première étape : Affichage de la Google maps

Le but de cette première partie est d'afficher une Google maps sur l'ensemble de l'écran. Nous utiliserons le fichier maps.js pour ajouter l'ensemble de votre code javascript pour l'affichage et la gestion de notre Google maps.

1. Lorsque l'ensemble de votre mobile est prêt, initialiser la Google maps avec le plugin importé.
2. Créer une balise pour afficher votre Google maps
3. Une fois que la Gogole maps est dans le statut `plugin.google.maps.event.MAP_READY`, afficher une [alert](https://www.w3schools.com/jsref/met_win_alert.asp) javascript.

### Deuxième étape : Affichage d'un marqueur

La deuxième étape consiste à afficher un marqueur sur la carte. La documentation pour les marqueurs se situe [ici](https://developers.google.com/maps/documentation/javascript/markers?hl=fr). Ce marqueur sera positionné en :
 - Latitude : 43.117475
 - Longitude : 5.937939

Pour ce qui est des paramètres complémentaires, libre à votre imagination.

À vous de trouver où ce marqueur se situe !

### Dernière étape : Tunning !

Pour cette dernière étape, nous allons rajouter une animation sur la caméra. Nous souhaitons que celle-ci pointe directement sur la même latitude et longitude que notre marqueur. Nous utiliserons donc la fonction
```js
animateCamera(CameraUpdate update, GoogleMap.CancelableCallback callback) 
```

Pour les différents paramètres, ici par défaut pour le TP :
 - Pour la latitude et la longitude, ce sont les mêmes que le marker précédent
 - Un zoom de 8
 - un tilt de 60
 - un bearing de 140
 - une duration de 5000

### Pour les plus rapide 

Pour les plus rapides, nous vous proposons un petit challenge. Le but ? Récupérer des coordonnées GPS sur un serveur et les afficher sous formes de `marker` sur la Google maps.
Ces positions correspondent à des restaurants situés un peu partout autour de Toulon. Elles sont disponibles sous cette [URL](https://demo9254333.mockable.io/restaurants).

De ce fait, vous aurez besoin d'utiliser les requêtes [AJAX](http://api.jquery.com/jquery.ajax/) avec JQuery. Pas de panique ! La librairie est déjà ajoutée au projet.

Si tout cela fonctionne, félicitations vous pouvez rentrer chez vous !

Bon courage :)


