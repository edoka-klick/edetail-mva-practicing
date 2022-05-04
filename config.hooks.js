/**
 * @file
 * config.hooks.js
 *
 * Learn more about how to customize BuildIVA at the Wiki:
 * https://github.com/KlickInc/klick-iva-builder/wiki/Extending-functionality
 *
 *
 * Custom hooks to use in the IVA build process, for the current project.
 *
 * All hooks will have the global paths object available to them.
 *
 * All hooks *except* those for init and help will have the global config
 * object available to them.
 *
 * The 'context' argument given to each hook contains contextual information
 * about the command. The object looks like:
 * {
 *   presentation_id: 'my_external_id',  // presentation_id we're operating on
 *   slide_ids: [ '100' ], // array of slide_ids given on command line
 *   files: [], // array of existing filenames given on command line
 *   args: [], // any additional non-presentation id/slide id/file arguments
 *   detected_presentation_id: true, // was the presentation id detected automatically?
 *   command: 'screenshot', // what command is the user running?
 *   is_verbose: true, // are we running in 'verbose' mode?
 * }
 *
 * For the 'alterCreateSlide' and 'alterUpdateSlide' methods, it also includes
 * a 'slide_id' property indicating the current slide being updated.
 */

let paths;
let config;
let log;

/**
 * SAMPLE CODE
 * Perform an action before screenshots are taken.
 */
const screenshotBefore = function(context) {
  console.log("Hook: screenshotBefore()");
  return new Promise((resolve, reject) => {
    // Do things here. Resolve when done.
    resolve();
  });
};

/**
 * SAMPLE CODE
 * Perform an action after screenshots have been taken and moved into their
 * final destination folders.
 *
 * @param object files_map, contains key/value pairs where:
 *   key = slide id
 *   value = path/filename of the thumbnail for this slide id (relative to
 *     this project's root folder)
 */
const screenshotAfter = function(context, previous_hook_results) {
  console.log(
    "Hook: screenshotAfter() received:",
    context,
    previous_hook_results
  );
  return new Promise((resolve, reject) => {
    // Do things here. Resolve when done.
    resolve();
  });
};

/**
 * Define public API.
 */
module.exports = function(di_paths, di_config, di_log) {
  paths = di_paths;
  config = di_config;
  log = di_log;

  return {
    /*
     * These hooks affect the core functionality of buildiva.
     */
    //watchBefore: function(context) {},
    //watch: function(context) {},
    //watchAfter: function(context) {},
    //buildBefore: function(context) {},
    //build: function(context, previous_hook_results) {},
    //buildAfter: function(context, previous_hook_results) {},
    //screenshotBefore: function(context) {},
    //screenshot: function(context) {},
    //screenshotAfter: function(context, previous_hook_results) {},
    //packageBefore: function(context) {},
    //package: function(context) {},
    //packageAfter: function(context, previous_hook_results) {},
    //deployBefore: function(context) {},
    //deploy: function(context, previous_hook_results) {},
    //deployAfter: function(context, previous_hook_results) {},
    /*
     * These hooks allow you to alter the help system, and the project
     * initialization task.
     */
    //helpBefore: function(context) {},
    //help: function(context) {},
    //helpAfter: function(context, previous_hook_results) {},
    //initBefore: function(context) {},
    //init: function(context) {},
    //initAfter: function(context, previous_hook_results) {},
    //createBefore: function(context) {},
    //create: function(context) {},
    //createAfter: function(context, previous_hook_results) {},
    //debugBefore: function(context) {},
    //debug: function(context) {},
    //debugAfter: function(context, previous_hook_results) {},
    /*
     * These hooks allow you to alter Veeva binder and document data after
     * it has been generated in buildiva, but before it goes to Vault.
     */
    //alterCreateBinder: function(context, binder_data) { return binder_data; },
    //alterUpdateBinder: function(context, binder_data, binder_id) { return binder_data; },
    alterCreateSlide: function(context, document_data) {
      return addWebkit(context, document_data);
    },
    alterUpdateSlide: function(context, document_data, document_id) {
      return addWebkit(context, document_data);
    }
    /*
     * These hooks allow you to run custom code before different parts of
     * the build process. (Requires BuildIVA v2.6.0 or later.)
     */
    //buildHtmlBefore: function(context, input_files) {},
    //buildHtmlAfter: function(context, output_files_by_slide_id) {},
    //buildCssBefore: function(context, input_files) {},
    //buildCssAfter: function(context, output_files) {},
    //buildJsBefore: function(context, input_files) {},
    //buildJsAfter: function(context, output_files) {},
    //buildFoldersBefore: function(context, input_globs) {},
    //buildFoldersAfter: function(context, output_files) {},
    //buildSlideAssetsBefore: function(context, input_globs) {},
    //buildSlideAssetsAfter: function(context, output_files) {},
    //buildCopySharedBefore: function(context, input_files) {},
    //buildCopySharedAfter: function(context, output_files_by_slide_id) {},
  };
};

const addWebkit = function(context, document_data, document_id) {
  document_data.ios_resolution__v = "Scale To Fit";
  document_data.crm_ios_viewer__v = "WKWebView";

  return document_data;
};