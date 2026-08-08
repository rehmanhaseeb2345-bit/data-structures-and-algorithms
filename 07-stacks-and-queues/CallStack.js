function c() {
  console.log("C");
}

function b() {
  console.log("B start");
  c();
  console.log("B end");
}

function a() {
  console.log("A start");
  b();
  console.log("A end");
}

a();
console.log("done");
