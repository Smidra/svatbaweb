// Initialize Parse
Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize('tkgvQtcwKdCFSOOvKngHZBv0GARqt6EvsxF1vjBl', 'P2fXB4hvhxd4jyvRbxYOoYDtgEOPAEF9fsX3YMIy', 'IFU6vutlMLnW0QCFpnzU4YfiyYPQx07Zo27uyTBz');

async function createRegistration(){

    const newReg = new Parse.Object('Registration');
    newReg.set('name', document.getElementById('name').value);
    newReg.set('count', Number.parseInt(document.getElementById('count').value));
    newReg.set('countChildren', Number.parseInt(document.getElementById('countChildren').value));
    newReg.set('howLongWeStay', document.getElementById('howLongWeStay').value);
    newReg.set('accommodation', document.getElementById('accommodation').value);
    const help = [];
    if(document.getElementById('help-sweet').checked){
    help.push('sladky');
    }
    if(document.getElementById('help-notsweet').checked){
        help.push('slany');
    }
    if(document.getElementById('help-muscles').checked){
        help.push('leminek');
    }
    if(document.getElementById('help-program').checked){
        help.push('program');
    }
    newReg.set('help', help);
    newReg.set('comment', document.getElementById('comment').value);
    newReg.set('contact', document.getElementById('contact').value);


    document.getElementById('result').innerText = 'Odesílám...';
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('regForm').classList.add('hidden');


    try {
        const result = await newReg.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Registration created', result);
        document.getElementById('result').innerText = 'Úspěšně odesláno, těšíme se na vás!';
    } catch (error) {
        console.error('Error while creating Registration: ', error);
        document.getElementById('result').innerText = 'Něco se pokazilo. :-( Napište prosím Tonymu. smid@antoninsmid.cz ';
    }
};

document.getElementById('submitFormBtn').addEventListener('click', createRegistration);
