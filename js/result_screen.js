export function screenId() {
  return "tela"
}

export class Screen {
  constructor(value) {
    this.value = value
  }

  getResult() {
    return new Result().execute()
  }
  
  appendValue(value){
    return new AppendValue().execute(value)
  }
  
  updateResult(value) {
    return new UpdateResult().execute(value)
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