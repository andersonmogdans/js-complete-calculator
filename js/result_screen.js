export function screenId() {
  return "tela"
}

export class Screen {
  constructor(value) {
    this.value = value
  }

  getResult() {
    new Result().execute()
  }
  
  appendValue(value){
    new AppendValue().execute(value)
  }
  
  updateResult(value) {
    new UpdateResult().execute(value)
  }
}

class Result {
  execute() {
    return document.getElementById(screenId()).innerHTML;
  }
}

class AppendValue {
  execute(value) {
    document.getElementById(screenId()).innerHTML += value
  }
}

class UpdateResult {
  execute(value) {
    document.getElementById(screenId()).innerHTML = value;
  }
}