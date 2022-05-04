/**
 * @file custom.ssi.js
 *
 * This file determines which SSI section should be visible for the user 
 * when they navigate throughout the presentation.
 *
 * Markup in `global.content.html`
 *  <div class="slide-ssi sprite">
 *    <div class="sprite slide-ssi-copy slide-ssi-copy-1 visible"></div>
 *    <div class="sprite slide-ssi-copy slide-ssi-copy-2"></div>
 *    <div class="sprite slide-ssi-copy slide-ssi-copy-3"></div>
 *    <div class="sprite slide-ssi-copy slide-ssi-copy-4"></div>
 *    <div class="sprite slide-ssi-copy slide-ssi-copy-5"></div>
 *  </div>
 * 
 * The visible class will be applied to the SSI that needs to be shown.
 * 
 * Assumptions:
 * - When navigating forward, the next SSI section is shown
 * - When navigating backwards (yes backwards), the next SSI section is shown
 *   -> This is because we can't detect when the user clicks on the Veeva native back button
 * - If we land on a slide that has no SSI (like the references, and ISI slide) DO NOT move the SSI to the next section.
 *   -> Slides that do NOT have a SSI have the class name "no-ssi" applied to the body tag.
 * - ONLY way to reset the order of the SSI is by landing on the 1st slide of the presentation.
 */
var slide_ssi = function ($) {
  const LOCALSTORAGE_SSI_VARIABLE = "VAXELIS-CURRENT-SSI-SECTION",
        NO_SSI_UPDATE_CLASSNAME = "no-ssi-update",
        NO_SSI_CLASSNAME = "no-ssi",
        VISIBLE_CLASSNAME = "visible";
  var el_ssi_sections, num_ssi_sections;

  var init = function () {
    el_ssi_sections = $('.slide-ssi .slide-ssi-copy');
    num_ssi_sections = el_ssi_sections.length;
    onSlideLoad();
  };
  /**
   * When the slides loads, determine which ISI section is next.
   */


  var onSlideLoad = function () {
    // If we are on the first slide, reset the order of the ISI.
    if ($('body').hasClass("landing-page")) {
      // Create the new localstorage variable.
      localStorage.removeItem(LOCALSTORAGE_SSI_VARIABLE, "1");
      return;
    } // Determine if localstorage variable is set.


    var SSI_section = localStorage.getItem(LOCALSTORAGE_SSI_VARIABLE); // If we are on a slide that has no safety information.

    if ($('body').hasClass(NO_SSI_CLASSNAME)) {
      return;
    } // Nothing is defined, use the first SSI section.


    if (!SSI_section || SSI_section == "NaN") {
      displaySSISection($('.slide-ssi-copy-1')); // Create the new localstorage variable.

      localStorage.setItem(LOCALSTORAGE_SSI_VARIABLE, "1");
      return;
    } // Determine the next SSI section.


    var next_ssi_section_num;

    if ($('body').hasClass("no-ssi-update")) {
      next_ssi_section_num = SSI_section;
    } else {
      next_ssi_section_num = (parseInt(SSI_section) + 1) % num_ssi_sections;
    } // When we have a situtation like when '4%4 = 0'.


    next_ssi_section_num = next_ssi_section_num === 0 ? num_ssi_sections : next_ssi_section_num;
    localStorage.setItem(LOCALSTORAGE_SSI_VARIABLE, next_ssi_section_num); // Show the next SSI section. Remember this is an array so minus 1 for index number.

    displaySSISection($(el_ssi_sections[next_ssi_section_num - 1]));
  };
  /**
   * This function displays the SSI element on the screen.
   * @param {elemenet} el_ssi div.slide-ssi-copy element that we need to display on screen
   */


  var displaySSISection = function (el_ssi) {
    el_ssi.addClass(VISIBLE_CLASSNAME);
  };

  var public_interface = {};

  public_interface.init = function () {
    init();
  };

  return public_interface;
}(jQuery);

(function ($) {
  $(document).ready(function () {
    slide_ssi.init($);
  });
})(jQuery);