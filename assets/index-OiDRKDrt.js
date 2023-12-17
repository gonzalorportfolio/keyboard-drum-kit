(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const n=e=>document.querySelector(e),i=()=>{n("#app").innerHTML=`
  <main class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </main>
  <audio data-key="65" src="./src/assests/sounds/clap.wav"></audio>
  <audio data-key="83" src="./src/assests/sounds/hihat.wav"></audio>
  <audio data-key="68" src="./src/assests/sounds/kick.wav"></audio>
  <audio data-key="70" src="./src/assests/sounds/openhat.wav"></audio>
  <audio data-key="71" src="./src/assests/sounds/boom.wav"></audio>
  <audio data-key="72" src="./src/assests/sounds/ride.wav"></audio>
  <audio data-key="74" src="./src/assests/sounds/snare.wav"></audio>
  <audio data-key="75" src="./src/assests/sounds/tom.wav"></audio>
  <audio data-key="76" src="./src/assests/sounds/tink.wav"></audio>
 
  `},c=e=>{const d=n(`audio[data-key="${e.keyCode}"]`),t=n(`div[data-key="${e.keyCode}"]`);d&&(t.classList.add("playing"),d.currentTime=0,d.play())},u=e=>{console.log(e),e.propertyName==="transform"&&e.target.classList.remove("playing")},l=()=>{i(),Array.from(document.querySelectorAll(".key")).forEach(d=>d.addEventListener("transitionend",u)),document.addEventListener("keydown",c)};l();
