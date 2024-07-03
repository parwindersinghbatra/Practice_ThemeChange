body = document.getElementsByTagName('body')[0];
ul= document.getElementsByTagName('ul')[0];
btn = document.getElementById('btn')
link = document.querySelectorAll('ul li a');

const chnageColor = () =>{
        if(body.style.backgroundColor == 'black'){
            body.style.backgroundColor = 'white';
            ul.style.backgroundColor  = '#333';
            btn.style.backgroundColor = '#333';
            btn.style.color='white'
            link.forEach(element => {
                element.style.color = 'white'; // Set <a> text color to white
                element.classList.remove('hover-dark');
                element.classList.add('hover-light');
            });
        }else{
            body.style.backgroundColor = 'black';
            ul.style.backgroundColor  = 'white';
            btn.style.backgroundColor = 'white'
             btn.style.color='black'
            link.forEach(element => {
                element.style.color = 'black'; // Set <a> text color to black
                element.classList.remove('hover-light');
                element.classList.add('hover-dark');
            });
        }
}

document.getElementById('btn').addEventListener('click',chnageColor)