const result = document.querySelector('#result');
const submit = document.querySelector('.submit');
const tel = document.querySelector('#tel');

let worker = new Worker('js/worker.js');

submit.onclick = () => {

if(document.querySelector('#tel').value.length != 0 || document.querySelector('#message').value.length != 0){
submit.type = 'button';
worker.postMessage({'phone': tel.value, 'carrier':'att'});
worker.postMessage({'phone': tel.value, 'carrier':'verizon'});

worker.addEventListener('message', function(event){
  //worker.postMessage({'code_area':530, 'carrier':'att'});

  result.innerHTML = 'Sending SMS';

  if(event.data != 'This carrier is not yet supported.')
  fetch('https://marinmover.com/email_sender/php/email_sender.php', {
            method: 'POST',
            'Accept': 'application/json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'email_message=' + JSON.stringify({
                  'mail_to': event.data,
                  'mail_subject': document.querySelector('#subject').value,
                  'mail_message': document.querySelector('#message').value
            })
        }).then(response => response.json()).then(data => {
            if (data.result == 'success') {
                result.innerHTML = `SMS was successfully sent to ${tel.value}`;
                console.log(data);
                //worker.postMessage({'code_area':'530', 'carrier':'att'});
            }
            else
                result.innerHTML = 'Error sending a message!';

        }).catch(err => {
          console.log(err);
          //worker.postMessage({'code_area':'530', 'carrier':'att'});
        });

  else{
    result.innerHTML = 'This carrier is not yet supported!';
  }
});

}

else {
  submit.type = 'submit';
}
};
