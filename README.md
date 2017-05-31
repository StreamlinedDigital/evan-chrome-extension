# Evan Chrome Extension
## Say hello to Evan, your personal sharepoint Assistant!

### Chrome Extension Info
At a very basic level, a Chrome extension is just some HTML, CSS and JavaScript that allows you to add some functionality to Chrome through some of the JavaScript APIs Chrome exposes. An extension is basically just a web page that is hosted within Chrome and can access some additional APIs.

All Chrome extensions require a manifest file. The Manifest file tells Chrome everything it needs to know to properly load up the extension in Chrome. So we’ll create a manifest.json file and put it into the folder we created. You can leave the manifest file blank for now.

### Testing Locally

- Type `chrome://extensions` in a tab to bring up the extensions page.
- Check `Developer mode` to enable loading unpacked extensions. This will allow you to load your extension from a folder. 
- Click `Load unpacked extension` to load up the extension. You should immediately see the extension show up as a Browser Action with your icon (The icon is a smiley face for now until we have a better icon) in the toolbar window of the current tab. 
- Lastly, click the icon to activate the extension. 

### Publishing

https://developer.chrome.com/webstore/publish
