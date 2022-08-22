const menuItems = document.querySelectorAll('.menu__item');


const messageNotifications = document.querySelector('#notifications__message');
const messages = document.querySelector('.messages');
const message = messages.getElementsByTagName('.message');
const messageSearch = document.querySelector('#messages-search');



const theme  = document.querySelector('#theme')
const themeModel = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
const notificationModel = document.querySelector('.notifications__popup')

var root = document.querySelector(':root')

const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')



const changeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');

    })
}



menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActive();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications__popup').style.display= 'none';
        }
        else{
            document.querySelector('.notifications__popup').style.display= 'block';
            document.querySelector('#notifications .notification__count').style.display = 'none';
        }
    })
})






messageNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotifications.querySelector('.notification__count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})

        // Theme

const openThemeModel = () => {
    themeModel.style.display = 'grid'
}

const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none'
    }
}

themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);

            // Fonts

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
   
     size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize;
        
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize ='10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-12rem')
            root.style.setProperty('--sticky-top-right', '-35rem')
        }
        document.querySelector('html').style.fontSize = fontSize
     })


})

const removeColorSelector = () => {
    colorPalette.forEach(sizep => {
        sizep.classList.remove('active')
    })
}
// change primary color

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelector()

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }

        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active')


        root.style.setProperty('--primary-color-hue', primaryHue)
    })
}) 




let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '95%';
    lightColorLightness = '100%';

   

    Bg1.classList.add('active')
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')
    changeBg()

})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active')
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    changeBg()


})


Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightolorLightness = '0%';

    Bg3.classList.add('active')
    Bg2.classList.remove('active')
    Bg1.classList.remove('active')
    changeBg()


})