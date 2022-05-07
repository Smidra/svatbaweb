export function dopravaChange(tab){
    if(tab === 'auto'){
        document.getElementById('doprava-content-vlak').style.display = 'none';
        document.getElementById('doprava-content-auto').style.display = 'block';
        document.getElementById('doprava-vlak').classList.add('opacity-60');
        document.getElementById('doprava-auto').classList.remove('opacity-60');
    }
    if(tab === 'vlak'){
        document.getElementById('doprava-content-vlak').style.display = 'block';
        document.getElementById('doprava-content-auto').style.display = 'none';
        document.getElementById('doprava-vlak').classList.remove('opacity-60');
        document.getElementById('doprava-auto').classList.add('opacity-60');
    }
}

document.getElementById('doprava-vlak').addEventListener('click', () => dopravaChange('vlak'));
document.getElementById('doprava-auto').addEventListener('click', () => dopravaChange('auto'));
