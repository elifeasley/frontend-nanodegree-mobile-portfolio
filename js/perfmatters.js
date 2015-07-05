// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

function deferredLoad(sheet) {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = sheet;
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
  }

function setUpGoogleAnalytics() {
  (function(w,g){
    w.GoogleAnalyticsObject = g;
    w[g]=w[g] || function(){
      (w[g].q = w[g].q||[]).push(arguments)};
      w[g].l=1*new Date();})
  (window,'ga');
  ga('create', 'UA-XXXX-Y');
  ga('send', 'pageview');
}

window.addEventListener("load", function(event) {
  logCRP();
  deferredLoad('css/style.css');
  deferredLoad('//fonts.googleapis.com/css?family=Open+Sans:400,700');
  if (window.matchMedia('print').matches) {
      deferredLoad('css/print.css');
  }
  deferredLoad('http://www.google-analytics.com/analytics.js');
  setUpGoogleAnalytics();
});
