var list = document.querySelector('.list');
async function getlink(url, endsWith) {
    let proxy = 'https://api.allorigins.win/raw?url=';
    let res = await fetch(proxy + (url));
    let html = await res.text();
    let div = document.createElement('div')
    div.innerHTML = html;
    let link = div.getElementsByTagName('a')
    let avi = []
    for (let index = 0; index < link.length; index++) {
        const element = link[index];
        if (element.href.endsWith(endsWith)) {
            avi.push(element.href)
        }
    }
    list.innerHTML = '';
    return avi
}


async function html(url, endsWith, file) {

    let link = await getlink(url, endsWith);
    let ep = 1;
    let x = 0;
    link.forEach((i) => {
        let correct_url = `https://storage.kanzaki.ru/ANIME___${file}${i.split('netlify.app/')[1]}`;
        let name = ep < 10 ? `EP 0${ep}` : `EP ${ep}`;

        list.innerHTML += `<li><a href="${correct_url}">${name}</a></li>`
        if (x == 0) {
            document.querySelector('video').src = correct_url;
            x = 1;
        }
        ep = ep + 1;
    })
    document.querySelectorAll('li').forEach((i) => {
        i.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('video').src = e.target.href;
        })
    })


}
function first_call() {
    let url = 'https://storage.kanzaki.ru/ANIME___/Naruto/';
    let file = '/Naruto/'
    let endsWith = '480p%5D.mkv'
    html(url, endsWith, file)
}

function html2() {
    document.querySelectorAll('h3').forEach((i) => {
        i.addEventListener('click', (e) => {
            if (e.target.innerText == 'Naruto Shippuden') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Naruto/';
                let file = '/Naruto/'
                let endsWith = '480p%5D.mkv'
                html(url, endsWith, file)
                document.querySelector('.watch').innerText = 'Naruto Shippuden';
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }

            if (e.target.innerText == 'One Punch Man') {
                let url = 'https://storage.kanzaki.ru/ANIME___/One-Punch_Man/';
                let file = '/One-Punch_Man/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'One Punch Man';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'Fullmetal Alchemist') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Fullmetal_Alchemist_%282003%29/';
                let file = '/Fullmetal_Alchemist_%282003%29/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'Fullmetal Alchemist';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'Fullmetal Alchemist Brotherhood') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Fullmetal_Alchemist_Brotherhood_%282009%29/';
                let file = '/Fullmetal_Alchemist_Brotherhood_%282009%29/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'Fullmetal Alchemist Brotherhood';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'Sword Art Online') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Sword_Art_Online/';
                let file = '/Sword_Art_Online/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'Sword Art Online';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'One Piece') {
                let url = 'https://storage.kanzaki.ru/ANIME___/One_Piece/';
                let file = '/One_Piece/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'One Piece';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'Hunter x Hunter') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Hunter_x_Hunter/Hunter%20x%20Hunter%202011/';
                let file = '/Hunter_x_Hunter/Hunter%20x%20Hunter%202011/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'Hunter x Hunter';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
            if (e.target.innerText == 'Haikyuu!!') {
                let url = 'https://storage.kanzaki.ru/ANIME___/Haikyuu%21%21/';
                let file = '/Haikyuu%21%21/'
                let endsWith = '.mkv'
                document.querySelector('.watch').innerText = 'Haikyuu!!';

                html(url, endsWith, file)
                if (l.style.left == '5px') {
                    l.style.left = '-200%'
                }
            }
        })
    })
}
first_call()
html2()
let l = document.querySelector('.left');

document.querySelector('.menu').addEventListener('click', () => {
    l.style.left = '5px';
    document.querySelector('.title').style.backgroundColor = '#e62f6cff';
})
document.querySelector('.cancle').addEventListener('click', () => {
    l.style.left = '-200%'
    document.querySelector('.title').style.backgroundColor = '#f94b85';
})