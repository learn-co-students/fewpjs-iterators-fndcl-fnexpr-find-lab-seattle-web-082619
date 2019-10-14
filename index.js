const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find(superbowl => superbowl.result === "W")
  if (win) {
    return win.year
  }
}
