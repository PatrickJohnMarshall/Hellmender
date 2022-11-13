import { audioEffectsMap } from "./audioEffects";

export default class InterfaceAudio {
  _playEffect(caller) {
    const effect = new Audio(audioEffectsMap[caller]);
    effect.volume = 0.05;
    effect.play();
  }

  playButton(): void {
    this._playEffect("button");
  }
}
