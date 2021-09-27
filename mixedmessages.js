
// input zodiac sign with capital letter into eSign function => will return element sign and personality traits on a good or bad day.

const eSign = zSign => {
    
    let fire = ['Sagittarius', 'Leo', 'Aries'];
    let air = ['Aquarius', 'Gemini', 'Libra'];
    let water = ['Pisces', 'Cancer', 'Scorpio'];
    let earth = ['Capricorn', 'Virgo', 'Taurus'];
    
    let goodDay = ['Intelligent', 'Patient', 'Charasmatic', 'Loyal', 'Funny', 'Sociable']
    let badDay = ['Stubborn', 'Vain', 'Selfish', 'Moody', 'Aloof', 'Impulsive'];
    
    let gDayRnd = goodDay[Math.floor(Math.random() * goodDay.length)];
    let bDayRnd = badDay[Math.floor(Math.random() * badDay.length)];

    for(let i = 0; i <= fire.length - 1; i++) {
        if(zSign === fire[i]) {
            return `You are a fire sign. On a good day you are ${gDayRnd} and on a bad day you are ${bDayRnd}.`
        }
    }
    for(let j = 0; j <= air.length - 1; j++) {
        if(zSign === air[j]) {
            return `You are an air sign. On a good day you are ${gDayRnd} and on a bad day you are ${bDayRnd}.`
        }
    }
    for(let k = 0; k <= water.length - 1; k++) {
        if(zSign === water[k]) {
            return `You are a water sign.On a good day you are ${gDayRnd} and on a bad day you are ${bDayRnd}.`
        }
    }
    for(let l = 0; l <= earth.length - 1; l++) {
        if(zSign === earth[l]) {
            return `You are an earth sign. On a good day you are ${gDayRnd} and on a bad day you are ${bDayRnd}.`
        }
    }

    };

  
 console.log(eSign('input Zodiac sign'));


   



