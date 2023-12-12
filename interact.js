const buttons = document.querySelectorAll('.add');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if(this.innerHTML === 'Add to Favorites') {
            this.innerHTML = 'Remove Favorite';
            let x = document.querySelector('.favtip');
            x.innerHTML = parseInt(x.innerHTML) + 1;
            x.style.opacity = '1';
        }
        else if(this.innerHTML === 'Remove Favorite') {
            this.innerHTML = 'Add to Favorites';
            let x = document.querySelector('.favtip');
            x.innerHTML = parseInt(x.innerHTML) - 1;
            if(x.innerHTML === '0') x.style.opacity = '0';
        }
        else if(this.innerHTML === 'Add to Cart'){
            this.innerHTML = 'Remove from Cart';
            let x = document.querySelector('.cartip');
            x.innerHTML = parseInt(x.innerHTML) + 1;
            x.style.opacity = '1';
        }
        else if(this.innerHTML === 'Remove from Cart'){
            this.innerHTML = 'Add to Cart';
            let x = document.querySelector('.cartip');
            x.innerHTML = parseInt(x.innerHTML) - 1;
            if(x.innerHTML === '0') x.style.opacity = '0';
        }
    });
});

document.querySelector('.subutton').addEventListener('click', function() {
    const email = document.querySelector('.email').value;
    if (isValidEmail(email)) {
        document.querySelector('.subscribed').style.display = 'flex';
        setTimeout(function() {document.querySelector('.subscribed').style.display = 'none';}, 2000);
        setTimeout(function() {document.querySelector('.email').value = '';}, 2000);
    }
    else alert('Please enter a valid email address.');
});

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.offer').style.display = 'none';
});