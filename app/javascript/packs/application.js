// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import "bootstrap"


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import { initContactForm } from '../channels/contact';
import { initSlider } from '../channels/slider';

console.log('Hello from application.js')

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  initContactForm();
  initSlider();
});


//= require_self
//= require rails-ujs
//=require jquery
//=require jquery_ujs
//=require jquery.turbolinks
//=require turbolinks-compatibility
//=require turbolinks
//= require underscore
//= require gmaps/google
//= require_tree .
//= require customejsfile
