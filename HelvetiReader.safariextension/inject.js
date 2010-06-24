
(function() {
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = 'http://www.helvetireader.com/css/helvetireader.2.css';
  cssNode.media = 'screen';
  cssNode.title = 'dynamicLoadedSheet';
  document.getElementsByTagName("head")[0].appendChild(cssNode);

// This is actually what has to happen to 

  var helvetireaderIconOverload = function(e)
  {
    if(e.name === "swapFavicon")
    {
      var favvy = document.createElement('link');
      favvy.setAttribute('type', 'image/x-icon');
      favvy.setAttribute('rel', 'shortcut icon');
      favvy.setAttribute('href', 'http://www.helvetireader.com/favicon.png');
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(favvy); 
    }
  }
  safari.self.addEventListener("message", helvetireaderIconOverload, false);
  safari.self.tab.dispatchMessage("shouldSwapFavicon",null);
})();