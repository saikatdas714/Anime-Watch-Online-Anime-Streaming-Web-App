 var list = document.querySelector('.list');
async function getlink(url,endsWith) { 
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
    
    
async function html(url,endsWith,name_front_split,name_end_split,file) {
   
    let link = await getlink(url,endsWith);
    let ep = 1;
    let x = 0;
    link.forEach((i) => {
        
        let correct_url = `https://storage.kanzaki.ru/ANIME___${file}${i.split('netlify.app/')[1]}`;
        console.log(correct_url);

        let name = correct_url.split(name_front_split)[1].split(name_end_split)[0].replaceAll('%20', ' ').replaceAll('%27','-').replaceAll('_-_',' ').replaceAll('_',' ').replaceAll('%21', '!');
        console.log(name);
      let name2 = ep < 10 ? `EP 0${ep}` : `EP ${ep}`;

        list.innerHTML += `<li><a href="${correct_url}">${name2}</a></li>`
        if(x == 0){
              document.querySelector('video').src = correct_url;
              x = 1;
        }
        ep = ep +1;
    })
    document.querySelectorAll('li').forEach((i) => {
        i.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('video').src = e.target.href;
        })
    })
   

}
function first_call(){
     let url = 'https://storage.kanzaki.ru/ANIME___/Naruto/';
                let file = '/Naruto/'
                let endsWith = '480p%5D.mkv'
                let name_front_split = '%5BHorribleSubs%5D%20'
                let name_end_split = '%20%5B480p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file) 
}

function html2() {
    document.querySelectorAll('h3').forEach((i)=>{
        i.addEventListener('click',(e)=>{
            if(e.target.innerText == 'Naruto Shippuden'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Naruto/';
                let file = '/Naruto/'
                let endsWith = '480p%5D.mkv'
                let name_front_split = '%5BHorribleSubs%5D%20'
                let name_end_split = '%20%5B480p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file)
            }

            if(e.target.innerText == 'One Punch Man'){
                let url = 'https://storage.kanzaki.ru/ANIME___/One-Punch_Man/';
                let file = '/One-Punch_Man/'
                let endsWith = '.mkv'
                let name_front_split = '%5BHorribleSubs%5D%20'
                let name_end_split = '%20%5B720p'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
             if(e.target.innerText == 'Fullmetal Alchemist'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Fullmetal_Alchemist_%282003%29/';
                   let file = '/Fullmetal_Alchemist_%282003%29/'
                let endsWith = '.mkv'
                let name_front_split = 'A1394%5D%20'
                let name_end_split = '%20%27'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
             if(e.target.innerText == 'Fullmetal Alchemist Brotherhood'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Fullmetal_Alchemist_Brotherhood_%282009%29/';
                let file = '/Fullmetal_Alchemist_Brotherhood_%282009%29/'
                let endsWith = '.mkv'
                let name_front_split = 'alchemist_brotherhood_-_'
                let name_end_split = '__rs2_%5B1080p_bd'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
            if(e.target.innerText == 'Sword Art Online'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Sword_Art_Online/';
                let file = '/Sword_Art_Online/'
                let endsWith = '.mkv'
                let name_front_split = '%5BHorribleSubs%5D%20'
                let name_end_split = '%20%5B720p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
             if(e.target.innerText == 'One Piece'){
                let url = 'https://storage.kanzaki.ru/ANIME___/One_Piece/';
                let file = '/One_Piece/'
                let endsWith = '.mkv'
                let name_front_split = 'Subs%5D%20One%20Piece%20-'
                let name_end_split = '%5B720p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
               if(e.target.innerText == 'Hunter x Hunter'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Hunter_x_Hunter/Hunter%20x%20Hunter%202011/';
                let file = '/Hunter_x_Hunter/Hunter%20x%20Hunter%202011/'
                let endsWith = '.mkv'
                let name_front_split = 'BHorribleSubs%5D%20'
                let name_end_split = '%20%5B720p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
            if(e.target.innerText == 'Haikyuu!!'){
                let url = 'https://storage.kanzaki.ru/ANIME___/Haikyuu%21%21/';
                let file = '/Haikyuu%21%21/'
                let endsWith = '.mkv'
                let name_front_split = 'ibleSubs%5D%20'
                let name_end_split = '%20%5B720p%5D.mkv'
                html(url,endsWith,name_front_split,name_end_split,file)
            }
        })
    })
}
first_call()
html2()
