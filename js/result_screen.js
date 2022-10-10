export function screenId() {
  return "tela"
}

export class Screen {
  constructor(value) {
    this.value = value
  }

  getResult() {
    return document.getElementById(screenId()).innerHTML;
  }
  
  appendValue(value){
    document.getElementById(screenId()).innerHTML += value
  }
  
  updateResult(value) {
    document.getElementById(screenId()).innerHTML = value;
  }
}