class DialogState {
  constructor(private states: Record<string, number>) {}

  setState(entity: string, stateVal: number) {
    this.states[entity] = stateVal;
  }

  changeState(entity: string, stateVal: number) {
    this.states[entity] += stateVal;

    if (this.states[entity] < 0) {
      this.states[entity] = 0;
    }

    if (this.states[entity] > 100) {
      this.states[entity] = 100;
    }
  }

  getStates() {
    return this.states;
  }
}

export default DialogState;
