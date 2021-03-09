# README

Bienvenue dans l'app Studio Zérance

Pour lancer l'app, il vous suffit d'inscrire dans votre terminal :
- git clone
- bundle
- yarn
- rails s & vous pouvez lancer le serveur http://localhost:3000/

Pour voir le détail du code, vous pouvez l'ouvrir
- dans Sublime Text avec la commande stt
- dans Code Viewer avec la commande XX


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
Pour plus de clareté, chaque élement de l'app a son fichier CSS que vous trouverez dans app/javascript/channels/
- pour le slider : slider.js
- pour le module contact : contact.js

Ils ont été importés dans app/javascript/packs/application.js
