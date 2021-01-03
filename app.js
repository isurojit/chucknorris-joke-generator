document.querySelector('#get-jokes').addEventListener('click', getJokes);

//get jokes function
function getJokes(e){
    const number = document.querySelector('#number').value;

    //xhr request
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            
            let output = '';

            //check if success
            if(response.type === 'success'){
                response.value.forEach(function(responses){
                    output += `
                    <li>${responses.joke}</li>
                    `;
                });
            }else{
                output += `<li>Something Went Wrong</li>`;
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    //xhr send
    xhr.send();

    e.preventDefault();
}