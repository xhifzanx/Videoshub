// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'bootstrap'
import 'jquery'
import '../js/bootstrap.min.js'
import '../js/jquery-3.3.1.min.js'
import '../js/jquery.nice-select.min.js'
import '../js/jquery.slicknav.js'
import '../js/main.js'
import '../js/mixitup.min.js'
import '../js/owl.carousel.min.js'
import '../js/player.js'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

