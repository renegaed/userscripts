# Transmission Web UI

This is an enhancement to Web UI component of the popular [Transmission Torrent Client.](http://www.transmissionbt.com/) It will automatically update the Title to reflect the current download and upload rate, if there a torrent currently downloading or uploading.

# Userscript Installation

Download the userscripts extension for your browser.

 - Google Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
 - Firefox: [Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/)
 - Opera: [Violentmonkey](https://addons.opera.com/en/extensions/details/violent-monkey/)

Go to your extensions dashboard page and paste the following code:

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

Go to the Transmission Remote GUI Page eg. http://xxx.xxx.xxx.xxx/transmission/web/ to view the changes.