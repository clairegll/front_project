# README

Bienvenue dans l'app Studio Zérance !

//LANCEMENT DE L'APP

Pour lancer l'app, il vous suffit d'inscrire dans votre terminal :
- git clone git@github.com:clairegll/front_project.git
- bundle
- yarn
- rails s & vous pouvez lancer le serveur http://localhost:3000/

Pour voir le détail du code, vous pouvez l'ouvrir
- dans Sublime Text avec la commande stt
- dans Visual Code avec la commande code .

//STRUCTURE

Vous trouverez la structure de l'application dans app/views/layouts/application.html.erb

HTML
- pour le détail, vous le trouverez dans app/views/homes/index.html.erb

J'ai séparé les fichiers qui pourraient se trouver sur d'autres pages dans le dossier app/views/shared/
  - le pop up de contact dans contact.html.erb
  - le header dans header.html.erb
  - le footer dans footer.html.erb

CSS
Pour plus de clareté, chaque élement de l'app a son fichier CSS que vous trouverez dans app/assets/stylesheets/components/
- pour la bannière : banner.scss
- pour le module de contact : contact.scss
- pour le footer : footer.scss
- pour le header : header.scss
- pour le portofolio : portofolio.scss
- pour le slider : slider.scss

L'intégralité a été importé dans app/assets/stylesheets/components/index.scss qui est lui même importé dans application.scss
J'ai intégré la font 'Karla' directement importée de Google Font dans app/assets/stylesheets/application.scss
Les images ont été intégrées dans app/assets/images

JS
Pour plus de clareté, chaque élement de l'app a son fichier JS que vous trouverez dans app/javascript/channels/
- pour le slider : slider.js
- pour le module contact : contact.js

Ils ont été importés dans app/javascript/packs/application.js

//DIFFICULTES

J'ai choisi de faire un application rails plutôt qu'un fichier index.html et ses fichiers js et css dans le but de pratiquer mes connaissances acquises pendant le Wagon, je pense que ce choix m'a fait perdre du temps à certain moment, mais m'a permis de m'entrainer à travailler dans un environmment ressemblant à celui de Shopify

Les deux difficultés ont été indéniablement :
- le slider : j'ai d'abord commencé par faire le slider avec boostrap, tout fonctionnait parfaitement, mais je n'étais pas satisfaite de l'utilisation mobile et je n'arrivais pas bien à faire apparaitre la slide suivante.
J'ai alors commencé à utiliser une librairie que je n'ai pas réussi à bien prendre en main et j'ai fini par trouver Glide, qui me paraissait beaucoup plus simple. Bref j'ai perdu beaucoup de temps dans mes recherches pour pas grand chose finalement ! Maintenant je sais comment faire un slider en 10min !!
- le pop up contact : étant donné qu'il était indiqué dans la consigne de ne pas utiliser de JS sauf pour le slider, j'ai commencé par chercher une solution du coté du form afin d'envoyer le prénom dans l'url (avec une méthode GET) et d'ensuite le récupérer et de travailler avec, le problème était le chargement de page à chaque requête.
J'ai fini par me faire aider par un ami, qui m'a indiqué que je n'avais pas le choix d'utiliser du JS pour cela et donc j'ai fini par faire la fonction qui n'a pas posé de problème particulier, simplement je ne suis pas très à l'aise avec JS, donc j'ai pris du temps à me replonger dedans.
La partie la plus difficile a été le Close All car je pense que l'utilisation des deux modales n'était pas la meilleure solution. J'ai donc perdu pas mal de temps au début puis sur la fin !

Petit point également pour le texte défilant, qui malheureusement ne défile pas exactement comme je veux, je vais continuer de chercher une solution, à mon avis la solution est du côté des @keyframes

Le reste ne m'a pas paru compliqué, simplement, je n'avais pas refait d'app depuis le Wagon, donc il m'a fallu un petit temps d'adaptation pour me remettre dedans !
& à tout problème sa solution, j'ai épluché les forums et ai pris ce cas comme une opportunité d'apprendre de nouvelles choses! Merci pour cet apprentissage !

//TEMPS

Je n'ai pas vu les heures passées en travaillant sur ce projet, donc les 7h ont littéralement été explosées... Mais je peux tout refaire en 1h top chrono désormais !! :)

1. Header : 45min
2. Bannière : 30min
3. Portofolio : 30min
4. Slider : 5h
5. Footer : 1h
6. Pop Up Contact : 6h
