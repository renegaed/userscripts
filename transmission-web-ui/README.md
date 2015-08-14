# Transmission Web UI - Add Download & Upload Rate in Title Bar

This is an enhancement to Web UI component of the popular [Transmission Torrent Client.](http://www.transmissionbt.com/) It will automatically update the Title to reflect the current download and upload rate, if there a torrent currently downloading or uploading.

# Userscript Installation

Download the userscript extension for your browser.

 - Google Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
 - Firefox: [Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/)
 - Opera: [Violentmonkey](https://addons.opera.com/en/extensions/details/violent-monkey/)

For whichever userscript extension you downloaded go to that extension's Dashboard page. Add a new userscript and paste the following code:

    // ==UserScript==
    // @name         Transmission Web GUI
    // @namespace    renegaed
    // @version      1.0
    // @description  Update Title Bar with the Download & Upload Rate
    // @author       Vijay Madas
    // @include      http*:*/transmission/web/
    // @require      https://raw.githubusercontent.com/renegaed/userscripts/master/transmission-web-ui/download_upload_rate.js
    // @grant        none
    // ==/UserScript==

Save and go to the Transmission Remote GUI Page eg. http://xxx.xxx.xxx.xxx/transmission/web/ to view the changes.