import './style.css';
import { getEl, getAllEl} from './utils/utils.js';
import { LOAD_MAIN } from './utils/render.js';

const handleKeydown = (e) => {
  
  const audio = getEl(`audio[data-key="${e.keyCode}"]`);
  const key = getEl(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const handleTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const main = () => {
  
  LOAD_MAIN();
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', handleTransition));
  document.addEventListener('keydown', handleKeydown);


};

main();
