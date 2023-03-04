class DialogState {
  constructor(private _states: Record<string, number>) {}

  setState(entity: string, stateVal: number) {
    this._states[entity] = stateVal;
  }

  changeState(entity: string, stateVal: number) {
    this._states[entity] += stateVal;

    if (this._states[entity] < 0) {
      this._states[entity] = 0;
    }

    if (this._states[entity] > 100) {
      this._states[entity] = 100;
    }
  }

  get states() {
    return this._states;
  }
}

export default DialogState;
