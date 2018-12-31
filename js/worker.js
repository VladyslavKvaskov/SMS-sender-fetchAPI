self.addEventListener('message', function(event){
  //let num1 = Math.floor((Math.random() * 10) + 0);
  //let num2 = Math.floor((Math.random() * 10) + 0);
  //let num3 = Math.floor((Math.random() * 10) + 0);
  //let num4 = Math.floor((Math.random() * 10) + 0);
  //let num5 = Math.floor((Math.random() * 10) + 0);
  //let num6 = Math.floor((Math.random() * 10) + 0);
  //let num7 = Math.floor((Math.random() * 10) + 0);

  if(event.data.carrier == 'att'){
    self.postMessage(event.data.phone + '@mms.att.net');
  }
  else if(event.data.carrier == 'verizon'){
    self.postMessage(event.data.phone + '@vzwpix.com');
  }
  else {
    self.postMessage('This carrier is not yet supported.');
  }
});
