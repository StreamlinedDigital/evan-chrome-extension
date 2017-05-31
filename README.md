At a very basic level, a Chrome extension is just some HTML, CSS and JavaScript that allows you to add some functionality to Chrome through some of the JavaScript APIs Chrome exposes. An extension is basically just a web page that is hosted within Chrome and can access some additional APIs.

All Chrome extensions require a manifest file. The Manifest file tells Chrome everything it needs to know to properly load up the extension in Chrome. So we’ll create a manifest.json file and put it into the folder we created. You can leave the manifest file blank for now.

Testing Locally

It’s really easy to test a new extension in Chrome. Type “chrome://extensions” in a tab to bring up the extensions page.

Once on this page, check “Developer mode” to enable loading unpacked extensions. This will allow you to load your extension from a folder. Finally, click “Load unpacked extension” or simply drag the evan chrome extension folder onto the page to load up the extension. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab. Then, go ahead and click the icon for the extension. 
