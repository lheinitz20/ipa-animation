import Head from 'next/head';
import React, { useEffect } from 'react';
import styles from '../styles/Animation.module.css';
import anime from 'animejs';


export default function Home() {

  useEffect(() => {

    var basicTimeline = anime.timeline({
      direction: 'normal',
      loop: false,
      autoplay: true
    });
    
    basicTimeline
      .add({
        targets: '.Animation_start_background____vrL',
        width: '100%',
        duration: 2000,
        easing: 'easeInOutSine',
      })
      //Roboter fährt von links ins Bild
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        translateX: '600px',
        duration: 3000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '360',
        duration: 2900,
        direction: 'normal',
        easing: 'linear',
      }, '-=3000')
      //Bildschirm mit Willkommenstext wird nach unten ins Bild geschoben
      .add({
        targets: '.Animation_welcomecontent__Gmo3P',
        translateY: 650,
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=1000')
      //Roboter hebt seine rechte Hand
      .add({
        targets: '#robot_right_arm',
        rotate: -140,
        duration: 1200,
        easing: 'easeInOutSine'
      })
      //Schatten des Roboters hebt ebenfalls die rechte Hand
      .add({
        targets: '#robot_right_arm_shadow',
        rotate: 140,
        duration: 1200,
        easing: 'easeInOutSine',
      }, '-=1200')
      //Hand geht leicht hin und her (winken)
      .add({
      targets: '#robot_right_arm',
      keyframes: [
        {rotate: -130},
        {rotate: -140},
        {rotate: -130},
        {rotate: -140},
        {rotate: 0},
      ],
      duration: 4000,
      easing: 'easeInOutSine',
      })
      .add({
        targets: '#robot_right_arm_shadow',
        keyframes: [
          {rotate: 130},
          {rotate: 140},
          {rotate: 130},
          {rotate: 140},
          {rotate: 0},
        ],
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=4000')

      //Der Willkommenstext auf dem Bildschirm wird eingeblendet
      .add({
        targets: '.Animation_welcometext__dp7Dq',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutSine'
      }, '-=4500')
      //Roboter wird wieder nach links aus dem Bild geschoben
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        translateX: -300,
        duration: 3000,
        easing: 'easeInOutSine',
      }, '+=500')
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '-360',
        duration: 3500,
        direction: 'normal',
        easing: 'linear',
        autoplay: true
      }, '-=3000')
      //Bildschirm wird mit Text zusammen wieder nach oben aus dem Bild geschoben
      .add({
        targets: '.Animation_welcomecontent__Gmo3P',
        translateY: -700,
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=2500')
      .add({
        targets: '.Animation_start_background____vrL',
        duration: 2000,
        easing: 'easeInOutSine',
        opacity: 0
      }, '-=2000')
      /* Scroll-Effekt anders ermöglichen
      //In nächste Szene schieben
      .add({
        targets: 'body',
        translateY: '-1000px',
        duration: 1500,
        easing: 'easeInOutQuad'
      }, '-=1500')
      .add({
        targets: 'body',
        translateY: '620px',
        duration: 500,
        easing: 'easeInOutQuad'
      }, '-=500')
      */
      //Schatten des Roboters wird erstmal ausgeblendet
      .add({
        targets: '.Animation_shadow__qIreC',
        opacity: 0,
      })
      //Roboter wird zusammen mit Schatten wieder von links ins Bild geschoben (Schatten hier ausgeblendet)
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        translateX: '700px',
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=1000')
      //Räder des Roboters drehen während dem hineinschieben
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '360',
        duration: 3650,
        direction: 'normal',
        easing: 'linear',
      }, '-=4000')
      //Roboter wird vergrössert und etwas nach links geschoben um Zoom-in Effekt zu erzeugen
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        width: '2000px',
        left: '-700px',
        duration: 2000,
        easing: 'easeInOutSine',
      }, '-=2000')
      //Seite wird dementsprechend verschoben um korrekten Ausschnitt darzustellen
      .add({
        targets: 'body',
        translateY: '-780px',
        duration: 2000,
        easing: 'easeInOutQuad'
      }, '-=2000')
      //Projektion des Roboters wird blinkend eingeblendet
      .add({
        targets: '.Animation_robot_projection__ODSlJ img',
        keyframes: [
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 0 },
        ],
        duration: 1500
      }, '-=500')
      //Projektion des Roboters wird dauerhaft eingeblendet
      .add({
        targets: '.Animation_robot_projection__ODSlJ img',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=500 ')
      //Titel-Grafik wird im Bildschirm des Roboters eingeblendet
      .add({
        targets: '.Animation_pasted_advice__W4_nV svg',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=500')
      //Titel wird eingeblendet
      .add({
        targets: '.Animation_advice_text__hmnr_ h2',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1500')
      //Texts & Icons werden nacheinander eingeblendet
      .add({
        targets: '.Animation_advice_text__hmnr_ div span:nth-child(1)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
        }, '-=500')
      .add({
        targets: '.Animation_iconbox__82G7S div img:nth-child(1)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_advice_text__hmnr_ div span:nth-child(2)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_iconbox__82G7S div img:nth-child(2)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_advice_text__hmnr_ div span:nth-child(3)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_iconbox__82G7S div img:nth-child(3)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_advice_text__hmnr_ div span:nth-child(4)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_iconbox__82G7S div img:nth-child(4)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_advice_text__hmnr_ div span:nth-child(5)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      .add({
        targets: '.Animation_iconbox__82G7S div img:nth-child(5)',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 500
      })
      //Projektion, Texte und Grafik werden ausgeblendet
      .add({
        targets: '.Animation_pasted_advice__W4_nV svg, .Animation_iconbox__82G7S, .Animation_advice_text__hmnr_, .Animation_robot_projection__ODSlJ img',
        opacity: 0,
        duration: 2000,
        easing: 'linear',
      }, '+=1000')
      .add({
        targets: '.advice',
        begin: function() {
          document.querySelector('.advice').style.display = 'none';
        }
      })
      //Roboter wird wieder auf Originalgrösse geschrumpft
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        width: '261px',
        duration: 1000,
        easing: 'linear'
      })
      //Roboter gleitet mit Fallschirm nach unten (Schatten zieht mit)
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC, .Animation_parachute__GZcRF',
        translateY: '1785px',
        keyframes: [
          { translateX: '1100px'},
          { translateX: '900px'},
          { translateX: '1095px'},
        ],
        duration: 4000,
        easing: 'easeInOutQuad'
      }, '-=500')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: '1060'
      })
      //Schatten wird wieder eingeblendet
      .add({
        targets: '.Animation_shadow__qIreC',
        opacity: 1,
        duration: 500,
        easing: 'easeInOutQuad'
      }, '-=1000')
      //Fallschirm geht wieder nach oben aus dem Bild
      .add({
        targets: '.Animation_parachute__GZcRF',
        scaleX: 0.2, 
        scaleY: 0.2, 
        translateY: '-700',
        opacity: 0,
        duration: 3000,
        easing: 'easeInOutQuad'
      }, '-=500')
      /*
      //Runterscrollen
      .add({
        targets: 'body',
        translateY: '-1200px',
        duration: 2000,
        easing: 'easeInOutQuad'
      }, '-=5000')
      */
      //Hintergrund wird von links ins Bild geschoben
      .add({
        targets: '.Animation_visual_background__tuWMx',
        translateX: '1200px',
        duration: 1000,
        easing: 'easeInOutQuad'
      }, '-=4000')
      //Projektion wird blinkend eingeblendet (mit Eigenschaft: Opacity)
      .add({
        targets: '.Animation_visual_projection__gNEFC',
        keyframes: [
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 0 },
        ],
        duration: 1500,
        easing: 'linear'
      }, '-=2000')
      //Projektion nun dauerhaft eingeblendet
      .add({
        targets: '.Animation_visual_projection__gNEFC',
        opacity: 1,
        duration: 500,
        easing: 'easeOutExpo'
      }, '-=500 ')
      //Grafiken und Texte werden nacheinander eingeblendet
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(4)',
        opacity: 1,
        duration: 100
      }, '-=500')
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5)',
        opacity: 1,
        duration: 100
      }, '-=500')
      .add({
        targets: '.Animation_visual_graphics__Z1AN_ svg',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=500')
      .add({
        targets: '.Animation_visual_text__2Aw9L h2',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=1000')
      /*
      .add({
        targets: '.Animation_visual_text__2Aw9L div span:nth-child(1)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=1500')
      .add({
        targets: '.Animation_visual_graphics__Z1AN_ svg:nth-child(1), .Animation_visual__O5frs img:nth-child(5)',
        translateX: '-1150px',
        translateY: '-380px',
        duration: 4000,
        easing: 'easeOutExpo'
      }, '+=1000')
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5)',
        opacity: 0,
        duration: 100
      }, '-=1000')
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5)',
        translateX: '0',
        translateY: '0',
        duration: 100
      }, '-=500') 
      .add({
        targets: '.Animation_visual_graphics__Z1AN_ svg:nth-child(2), .Animation_visual__O5frs img:nth-child(4)',
        translateX: '-270px',
        translateY: '-828px',
        duration: 3000,
        easing: 'easeOutExpo'
      }, '-=4200')
      .add({
        targets: '.Animation_visual_text__2Aw9L div span:nth-child(2)',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=3500')
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5), .Animation_visual__O5frs img:nth-child(4)',
        opacity: 0
      }, '-=1000')
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5), .Animation_visual__O5frs img:nth-child(4)',
        translateX: '0',
        translateY: '0',
      }, '-=500') 
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5), .Animation_visual__O5frs img:nth-child(4)',
        opacity: '1',
        duration: 100
      })
      .add({
        targets: '.Animation_visual_graphics__Z1AN_ svg:nth-child(2)',
        translateX: '0',
        translateY: '0',
        left: '790px',
        bottom: '487px',
        duration: 100
      })
      .add({
        targets: '.Animation_visual__O5frs img:nth-child(5), .Animation_visual_graphics__Z1AN_ svg:nth-child(2)',
        translateX: '-1150px',
        translateY: '-380px',
        duration: 4000,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.Animation_visual_graphics__Z1AN_ svg:nth-child(3), .Animation_visual__O5frs img:nth-child(4)',
        translateX: '-270px',
        translateY: '-828px',
        duration: 3000,
        easing: 'easeOutExpo'
      }, '-=4000')
      .add({
        targets: '.Animation_visual_text__2Aw9L div span:nth-child(3)',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo'
      }, '-=3500')
      .add({
        targets: '.Animation_visual_background__tuWMx',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      }, '+=1000')
      .add({
        targets: '.Animation_visual_projection__gNEFC, .Animation_visual_projection_circle__haqG6, .Animation_visual_graphics__Z1AN_',
        keyframes: [
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 1 },
         { opacity: 0 },
         { opacity: 0 },
        ],
        duration: 2000,
        easing: 'linear'
      }, '-=500')
      .add({
        targets: '.Animation_visual_text__2Aw9L',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      }, '-=500')
      //Sekundärer Hintergrund wird über gesamte Seite gezogen
      .add({
        targets: '.background-container',
        width: '100%',
        duration: 1500,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateX: 3000,
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=1500')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: 2970,
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=4000')
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '1000deg',
        duration: 4000,
        direction: 'normal',
        easing: 'linear',
      }, '-=4000')
      //Hebel kommt rechts aus dem Bild
      .add({
        targets: '.Animation_production_lever__rQ9gS',
        right: '-15px',
        duration: 1000,
        easing: 'linear'
      }, '-=2000')
      //Roboter greift danach
      .add({
        targets: '#robot_right_arm',
        rotate: -140,
        duration: 1200,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#robot_right_arm',
        rotate: 0,
        duration: 2000,
        easing: 'easeInOutSine',
      })
      //Hebel kippt nach unten
      .add({
        targets: '.Animation_lever_stick__NblGT',
        rotate: '-80deg',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=1000')
      //Roboter geht ein Stück zur Seite
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateX: 2850,
        duration: 3000,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: 2820,
        duration: 3000,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '800deg',
        duration: 3000,
        direction: 'normal',
        easing: 'linear',
      }, '-=3000')
      .add({
        targets: '.Animation_production_lever__rQ9gS',
        right: '-220px',
        duration: 1000,
        easing: 'linear'
      }, '-=500')
      .add({
        targets: '.Animation_production_text__7lHlM h2',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=500')
      //Zahnräder erscheinen
      .add({
        targets: '.Animation_production_gears__PF_DD',
        left: '-260px',
        duration: 1000,
        easing: 'linear'
      }, '-=2500')
      //Zahnräder drehen
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(2)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(3)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(4)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      //Bolzen & Grafiken kommen aus dem Boden
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(1)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(1)',
        bottom: '195px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      //Passender Text wird eingeblendet
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(1)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(2)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(2)',
        bottom: '28px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(2)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(3)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(3)',
        bottom: '222px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(3)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=2000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(2)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '+=3000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(3)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(4)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(1)',
        bottom: '-1500px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(1)',
        bottom: '-585px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(3)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(2)',
        bottom: '-1500px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(2)',
        bottom: '-752px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(2)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(3)',
        bottom: '-1500px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(1) svg:nth-child(3)',
        bottom: '-558px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(1)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=2000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(1), .Animation_production_text__7lHlM div span:nth-child(2), .Animation_production_text__7lHlM div span:nth-child(3)',
        //Funktion, welche die Eigenschaft "display" der drei Elemente auf "none" setzt und sie damit ausblendet
        begin: function() {
          document.querySelector('.Animation_production_text__7lHlM div span:nth-child(1)').style.display = 'none';
          document.querySelector('.Animation_production_text__7lHlM div span:nth-child(2)').style.display = 'none';
          document.querySelector('.Animation_production_text__7lHlM div span:nth-child(3)').style.display = 'none';
        },
      }, '-=1500')
      //Wiederholung der vorherigen Abläufe
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(2)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(3)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(4)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(1)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(1)',
        bottom: '583px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(4)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(2)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(2)',
        bottom: '390px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(5)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(3)',
        bottom: '-720px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(3)',
        bottom: '502px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(6)',
        opacity: 1,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=2000')

      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(2)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '+=3000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(3)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(4)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(1)',
        bottom: '-1500px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(1)',
        bottom: '-185px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(6)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(3)',
        bottom: '-1500px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(3)',
        bottom: '-275px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=4000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(5)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(2)',
        bottom: '-962px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(2)',
        //Hier wird eine Funktion aufgerufen, welche die Klasse 'animate-bounce' entfernt, somit hört der Ball auf hin und her zu springen
        begin: function() {
          document.querySelector('.Animation_production_graphics__6LNkT div:nth-child(2) svg:nth-child(2)').classList.remove('animate-bounce');
        },
        //Danach hüpft Ball nach oben aus dem Bild
        translateY: '-1200px',
        duration: 1000,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_production_text__7lHlM div span:nth-child(4)',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      .add({
        targets: '.Animation_production_text__7lHlM h2',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutExpo'
      }, '-=3000')
      //Roboter geht auf letzten Bolzen
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateX: 1905,
        duration: 3000,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: 1875,
        duration: 3000,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '400deg',
        duration: 3000,
        direction: 'normal',
        easing: 'linear',
      }, '-=3000')
      //Zahnräder drehen
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(2)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      })
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(3)',
        rotate: '-360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD g:nth-child(4)',
        rotate: '360deg',
        duration: 6000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_gears__PF_DD',
        bottom: '1300px',
        duration: 4000,
        direction: 'normal',
        easing: 'easeInOutSine'
      }, '-=6000')
      .add({
        targets: '.Animation_production_bolts__BDfZN img:nth-child(2)',
        bottom: '-1500px',
        duration: 1500,
        easing: 'easeInOutSine'
      }, '-=3000')
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateY: 1820,
        duration: 1000,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateY: 1825,
        duration: 1500,
        easing: 'easeInOutSine',
      }, '-=3000')
      .add({
        targets: '.Animation_shadow__qIreC',
        opacity: 0,
      }, '-=500')
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateX: 900,
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=1000')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: 870,
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=1000')
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '0deg',
        duration: 4000,
        direction: 'normal',
        easing: 'linear',
      }, '-=7000')
      .add({
        targets: '.background-container',
        left: '-100%',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=2000')
      //Der Roboter wird vergrössert (Zoom-in Effekt)
      .add({
        targets: '.Animation_robot__hEoHQ, .Animation_shadow__qIreC',
        width: '850px',
        translateY: 1200,
        duration: 1500,
        easing: 'easeInOutSine',
      }, '-=3000')
      //Sekundärer Hintergrund und VR-Brille werden eingeblendet
      .add({
        targets: '.Animation_future_second_img__QFQym img:nth-child(1)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_second_img__QFQym img:nth-child(2)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=500')
      //Texte und Icons werden nacheinander eingeblendet
      .add({
        targets: '.Animation_future_text__MOO2V h2',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      .add({
        targets: '.Animation_future_iconbox__UnVDt img:nth-child(1)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V div span:nth-child(1)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      .add({
        targets: '.Animation_future_iconbox__UnVDt img:nth-child(2)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V div span:nth-child(2)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      .add({
        targets: '.Animation_future_iconbox__UnVDt img:nth-child(3)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V div span:nth-child(3)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      .add({
        targets: '.Animation_future_iconbox__UnVDt img:nth-child(4)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V div span:nth-child(4)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      .add({
        targets: '.Animation_future_iconbox__UnVDt img:nth-child(5)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V div span:nth-child(5)',
        opacity: 1,
        duration: 1000,
        easing: 'linear'
      }, '-=1000')
      //Gesamter Inhalt wird nacheinander wieder ausgeblendet
      .add({
        targets: '.Animation_future_iconbox__UnVDt img',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      }, '+=2000')
      .add({
        targets: '.Animation_future_text__MOO2V div span',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_text__MOO2V h2',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_second_img__QFQym img:nth-child(1)',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: '.Animation_future_second_img__QFQym img:nth-child(2)',
        opacity: 0,
        duration: 1000,
        easing: 'linear'
      }, '-=500')
      //Roboter bewegt sich
      .add({
        targets: '.Animation_robot__hEoHQ',
        width: '261px',
        translateY: '1200px',
        translateX: '500px',
        duration: 1000,
        easing: 'easeInOutSine',
      }, '-=500')
      .add({
        targets: '.Animation_shadow__qIreC',
        translateY: '1206px',
        translateX: '460px',
        duration: 1000,
        easing: 'easeInOutSine',
      }, '-=500')
      //Start-Szene wird wiederholt
      .add({
        targets: '.Animation_end_background__FIf7x',
        width: '100%',
        duration: 2000,
        easing: 'easeInOutSine',
        opacity: 1,
      })
      .add({
        targets: '.Animation_endcontent__uyaSg',
        opacity: 1
      })
      //Roboter fährt von links ins Bild
      .add({
        targets: '.Animation_robot__hEoHQ',
        translateX: 1100,
        duration: 3000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '.Animation_shadow__qIreC',
        translateX: 1060,
        duration: 3000,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '300deg',
        duration: 2900,
        direction: 'normal',
        easing: 'linear',
      }, '-=6000')
      //Bildschirm mit Verabschiedungstext wird nach unten ins Bild geschoben
      .add({
        targets: '.Animation_endcontent__uyaSg',
        top: '1142px',
        duration: 2000,
        easing: 'easeInOutSine'
      }, '-=1000')
      //Roboter hebt seine rechte Hand
      .add({
        targets: '#robot_right_arm',
        rotate: -140,
        duration: 1200,
        easing: 'easeInOutSine'
      })
      //Schatten des Roboters hebt ebenfalls die rechte Hand
      .add({
        targets: '#robot_right_arm_shadow',
        rotate: 140,
        duration: 1200,
        easing: 'easeInOutSine',
      }, '-=1200')
      //Hand geht leicht hin und her (winken)
      .add({
      targets: '#robot_right_arm',
      keyframes: [
        {rotate: -130},
        {rotate: -140},
        {rotate: -130},
        {rotate: -140},
        {rotate: 0},
      ],
      duration: 4000,
      easing: 'easeInOutSine',
      })
      .add({
        targets: '#robot_right_arm_shadow',
        keyframes: [
          {rotate: 130},
          {rotate: 140},
          {rotate: 130},
          {rotate: 140},
          {rotate: 0},
        ],
        duration: 4000,
        easing: 'easeInOutSine',
      }, '-=4000')

      //Der Verabschiedungstext auf dem Bildschirm wird eingeblendet
      .add({
        targets: '.Animation_endtext__dox20',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutSine'
      }, '-=4500')
      //Gesamter Inhalt wird ausgeblendet
      .add({
        targets: '.Animation_container__Tf2Lc',
        opacity: 0,
        duration: 3000
      })
      */
      }, []);

  return (

    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="fixed right-0 background-container w-0 h-full bg-secondary -z-10"></div>
      <img className={styles.start_background} src="/start_background.png" alt="start_background"></img>
      {/* Roboter eingefügt */}
      <div className="the_robot">
        <div className={styles.robot}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 351.1 440.9">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="robot_left_arm">
                        <path className="cls-1" d="M11.65,281.42a4.46,4.46,0,0,0,5.82,0,4.83,4.83,0,0,0,0-4.08l-6.7-10.07,5.1-8.31H26.08l4.66,7.59L25.64,276a6,6,0,0,0-.81,5.69,3.83,3.83,0,0,0,2.65,1.13A4.1,4.1,0,0,0,30.74,281q4.17-7.07,8.32-14.14L28.7,251.09H12.52L2.6,267Z"/>
                            <circle className="cls-2" cx="7.7" cy="266.97" r="5.1"/>
                            <circle className="cls-2" cx="33.96" cy="266.97" r="5.1"/>
                        <path className="cls-1" d="M53.31,160.57s-6.56,31.79-10.15,40l-18.35-1.56S31,163.32,33.3,154.43Z"/>
                        <path className="cls-2" d="M30.17,253.49l18.88-39s3-14.16-11.59-21.46c0,0-17.16-4.72-22.31,6,0,2.06-3,5.58-3,12,0,0-3,32.61-2.15,42.48Z"/>
                            <circle className="cls-1" cx="48.4" cy="160.41" r="20.43"/></g>
                    <g id="robot_right_arm" className={styles.rightarm}>
                        <path className="cls-1" d="M191.38,160.57s6.56,31.79,10.15,40l18.35-1.56s-6.21-35.73-8.49-44.62Z"/>
                        <g id="robot_right_hand">
                        <path className="cls-1" d="M215.38,281.42a4.46,4.46,0,0,0,5.82,0,4.79,4.79,0,0,0,0-4.08l-6.7-10.07,5.1-8.31h10.21l4.66,7.59-5.1,9.47a6,6,0,0,0-.81,5.69,3.83,3.83,0,0,0,2.65,1.13,4.08,4.08,0,0,0,3.26-1.86q4.17-7.07,8.32-14.14-5.17-7.87-10.36-15.75H216.25L206.33,267Z"/>
                            <circle className="cls-2" cx="211.44" cy="266.97" r="5.1"/>
                            <circle className="cls-2" cx="237.69" cy="266.97" r="5.1"/>
                        </g>
                            <circle className="cls-1" cx="198.16" cy="159.72" r="20.43"/>
                        <path className="cls-2" d="M214.52,253.49l-18.88-39s-3-14.16,11.59-21.46c0,0,17.16-4.72,22.31,6,0,2.06,3,5.58,3,12,0,0,3,32.61,2.15,42.48Z"/>
                    </g>
                    <g id="robot_face">
                        <rect className="cls-1" x="103.6" y="94.54" width="38.32" height="25.74"/>
                        <path className="cls-3" d="M57.32,78.67s17.77,22.4,66.36,23.39c0,0,41.77,0,63.35-23.39l11.13-7s-1-47.28-45.78-54.74c0,0-24,17.91-28.7,16.92S89.17,15,89.17,15,57.32,30.4,50.35,48.31,57.32,78.67,57.32,78.67Z"/>
                        <path className="cls-2" d="M42.63,78.42l14.69.25V53.29S63.79,29.9,86.68,23.93a5.6,5.6,0,0,1,2.24,0s9.46,16.42,33.84,16.42a41.07,41.07,0,0,0,33.6-16.54s21.28-.49,30.67,27.43l1.36,26.58,12,.85a5.83,5.83,0,0,0,5.23-5.22V45.33s-1.49-4.23-5-5.23l-6-.25S186.72,2,122.76,0c0,0-56-2.74-72.16,39.31,0,0-9-.24-10,5.73V73.2S39.65,76.68,42.63,78.42Z"/>
                    </g>
                    <g id="robot_body">
                        <rect className="cls-1" x="89.25" y="264.65" width="67.69" height="72.12" rx="6.19"/>
                        <path className="cls-3" d="M192.63,142.27s2.46-27.11-33.89-33.89H86.66s-30.19,2.47-33.88,34.5V247.61S49.08,287,86.66,287h72.7s34.5,1.23,33.27-38.81ZM174,243.3a3.79,3.79,0,0,1-3.78,3.78h-95a3.79,3.79,0,0,1-3.78-3.78v-92a3.79,3.79,0,0,1,3.78-3.78h95a3.79,3.79,0,0,1,3.78,3.78Z"/>
                    </g>
                    <g id="robot_screen">
                        <rect className="cls-4" x="71.36" y="147.55" width="102.59" height="99.54" rx="3.78"/>
                    </g>
                    <g id="robot_wheels">
                        <path className="cls-3" d="M177.34,356.28s-1.13-15.55-20.4-26.85v1.15a6.21,6.21,0,0,1-6.19,6.19H95.44a6.21,6.21,0,0,1-6.19-6.19V329.1A41,41,0,0,0,67.35,359v44.91s-1,6.57,7,9.86h95.06s6.47,1.09,10-9.86C179.33,403.93,182.32,372.71,177.34,356.28Z"/>
                        <g id="left_wheel" className={styles.leftw} style={{ transformOrigin: "63px 378px" }}>
                            <circle cx="61.49" cy="379.18" r="54.67"/>
                            <path className="cls-5" d="M113.46,373.73l8.85-.55c-.18-16.42-7.75-25.46-7.75-25.46l-8.11,5c-.56-1.84-5.72-8.48-5.72-8.48l6.45-5.91c-7.19-8.85-21-15.49-21-15.49l-3.5,8.48c-1.29-.92-9.41-3.5-9.41-3.5l.92-8.86a68.11,68.11,0,0,0-25.64-.37c.92,2.4.92,9.78.92,9.78a58.75,58.75,0,0,0-9.22,2.58L36.53,323c-10,3.51-20.85,15.13-20.85,15.13l7,6.82-6.5,7.62L9.39,348C1.08,355,.55,373.36.55,373.36l8.86-.18-.19,11.25L0,384.8a74.58,74.58,0,0,0,8.67,25.65l7-5.91,6.83,9.59-6.83,6.09c6.83,8.12,21.4,15.5,21.4,15.5l3.14-8.49A63.59,63.59,0,0,0,50,430.37l-1.47,9.22c16.79,2.22,25.83-.55,25.83-.55l-1.48-8.67c2.77-.37,10-3.51,10-3.51l3.51,8.86c17.71-9.41,20.84-15.87,20.84-15.87l-6.27-6.27,6.46-8.3,7.19,5.17a62.61,62.61,0,0,0,7.75-25.28l-8.67-.74Zm-52,52.9a47.57,47.57,0,1,1,47.56-47.56A47.56,47.56,0,0,1,61.49,426.63Z"/>
                            <circle className="cls-6" cx="61.16" cy="379.29" r="34.68"/>
                            <circle className="cls-7" cx="61.47" cy="379.31" r="10.24"/>
                            <circle className="cls-8" cx="61.49" cy="379.18" r="6.62"/>
                        </g>
                          <g id="right_wheel" className={styles.rightw} style={{ transformOrigin: "189px 380px" }}>
                              <circle cx="186.59" cy="379.37" r="54.67"/>
                              <path className="cls-5" d="M215.15,423.13l4.53,7.62c14.53-7.65,19.12-18.51,19.12-18.51l-8.14-4.95c1.39-1.33,4.94-9,4.94-9l8.2,3.05c4.6-10.44,4.19-25.78,4.19-25.78l-9.15.75c.23-1.57-1.17-10-1.17-10l8.3-3.22a68.12,68.12,0,0,0-11.38-23c-1.71,1.92-8.28,5.29-8.28,5.29-1.76-2.63-6.5-7-6.5-7l5.37-6.91c-7.66-7.26-23-11.64-23-11.64l-2.88,9.35-9.74-2.31.93-8.11c-10-4.23-26.57,3.69-26.57,3.69l4.21,7.79-10.1,5-4.54-8a74.58,74.58,0,0,0-18.86,19.41l8.45,3.55-5.42,10.45-8.53-3.3c-4.11,9.78-4,26.12-4,26.12l9-1.08a63.45,63.45,0,0,0,1.67,10.13l-8.88,2.89c5.69,16,12.28,22.73,12.28,22.73l7-5.27c1.59,2.3,7.67,7.27,7.67,7.27l-6.28,7.16c16.45,11.46,23.63,11.3,23.63,11.3l2.72-8.44,10.33,2L183,440.87a62.69,62.69,0,0,0,26-4.64l-3.3-8.06ZM144.36,401a47.57,47.57,0,1,1,64,20.62A47.56,47.56,0,0,1,144.36,401Z"/>
                              <circle className="cls-6" cx="186.33" cy="379.13" r="34.68"/>
                              <circle className="cls-7" cx="186.46" cy="379.42" r="10.24"/>
                              <circle className="cls-8" cx="186.59" cy="379.37" r="6.62"/>
                          </g>
                    </g>
                    <g id="robot_mouth">
                        <path className="cls-4" d="M109.88,83.15v4.67s3.36,7.09,12.88,6.72A15.37,15.37,0,0,0,135.45,88V83.15Z"/>
                    </g>
                    <g id="robot_eyes">
                        <circle className="cls-4" cx="85.42" cy="59.46" r="16.23"/>
                        <circle className="cls-4" cx="160" cy="59.46" r="16.23"/>
                    </g>
                </g>
                <defs>
                    <style>{`
                        .cls-1{fill:#151c28;}.cls-2{fill:#8188a6;}.cls-3{fill:#151515;}.cls-4{fill:#fff;}.cls-5{fill:#424245;}.cls-6{fill:#eaebed;}.cls-7{fill:#b0b2b5;}.cls-8{fill:#403f42;}
                    `}</style>
                </defs>
            </svg>
          </div>
          {/* Schatten des Roboters */}
          <svg className={styles.shadow} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 292.5 448.1" >
          <style>{`
            .st0{opacity:0.2;enable-background:new    ;}
            .st1{fill:#424245;}
            .st2{opacity:0.2;}
            `}</style>
          <g id="robot_right_arm_shadow" className={styles.rightarmshadow} style={{ opacity:0.2 }}>
            <path className="st1" d="M251.8,204.2c-1.2-1.8-3.6-2.5-5.6-1.5c-0.9,1.1-1.3,2.5-1.1,3.9l3.8,11.5l-7.1,6.7l-9.8-2.7l-2.5-8.5l7.4-7.8   c1.6-1.3,2.5-3.2,2.3-5.3c-0.5-0.9-1.3-1.5-2.3-1.8c-1.3-0.3-2.6,0-3.6,0.9c-3.9,3.8-7.8,7.6-11.8,11.4l5.8,17.9l15.6,4.3   l13.8-12.7L251.8,204.2z"/>
            <circle className="st1" cx="251.8" cy="219.2" r="5.1"/>
            <circle className="st1" cx="226.5" cy="212.3" r="5.1"/>
            <path className="st1" d="M179.8,309.8c0,0,14.7-28.9,20.3-35.9l17.3,6.3c0,0-15.4,32.8-19.9,40.8L179.8,309.8z"/>
            <path className="st1" d="M226.6,226.3l-28.5,32.6c0,0-6.6,12.9,5.5,23.8c0,0,15.3,9.1,23.1,0.1c0.5-2,4.4-4.6,6.1-10.8   c0,0,11.5-30.7,13.3-40.4L226.6,226.3z"/>
            
              <ellipse transform="matrix(0.2635 -0.9647 0.9647 0.2635 -164.375 407.223)" className="st1" cx="184.5" cy="311.3" rx="20.4" ry="20.4"/>
          </g>
          <g className="st2">
            <path className="st1" d="M292.4,96c-2.5-50-44-58.7-44-58.7c-30.4-9.7-58,11.1-57.9,11.2l-21.2-6.1c-1.1-10.5-15.8-25.5-15.8-25.5   C122.6-12.9,83.1,6.1,83.1,6.1c-35.3,19-33.7,54.4-33.7,54.4c-1,36.6,28.8,52.8,28.8,52.8c18.4,14.2,46.1,8.9,46.1,8.9l-10.4,36   c-34.7-10.7-43.6,22.3-43.6,22.3l-20.5,70.9c8.1,4.5,12.3,14.1,9.7,23.4c-2.7,9.3-11.4,15.3-20.7,14.8c-6,25.1,22.6,39.4,22.6,39.4   l17.4,5l-2.3,7.9c-17.1-2.5-34.4,0.3-49.8,8l-12.4-3.6c-2.6-0.4-5.2,0.9-6.4,3.2L0,376.9c0.5,5.7,3.9,6.6,3.9,6.6l5.1,1.7   c1.6,42.9,57.5,58.1,57.5,58.1c60.7,17.5,80.7-17.6,80.7-17.6c9.1,2.8,11.2-2.7,11.2-2.7s7.6-27.1,7.8-27c1.8-2.3-0.4-5.8-0.4-5.8   l-14.1-4.1c-11.9-22.4-38.5-33.6-38.5-33.6l2.2-7.8l17.4,4.9c29.5,2.9,39.2-19.7,39.9-21.7c-6.8-4.8-10.3-13.5-8-22.1   c2.4-8.9,10.3-14.8,19-15l0.4-1.2l18.7-64.6c5.7-16,1-27.9,1-27.9c-5.6-16.8-25.1-20.1-25.1-20.1l10.4-36   c29.4,27.2,63.2,13.4,63.2,13.4C296.6,134.2,292.4,96,292.4,96z"/>
          </g>
          <g id="robot_left_arm" style={{ opacity:0.2 }}>
            <path className="st1" d="M25.1,154.1l5.2,18l15.6,4.5l14.3-12.3c-1.4-5.3-2.7-10.6-4.1-15.9c-0.4-1.3-1.4-2.2-2.6-2.6   c-1-0.3-2-0.1-2.9,0.4c-1.2,1.6-1.5,3.8-0.8,5.7l2.3,10.5l-6.6,6l-9.8-2.8l-2.6-9.4l9.2-7.8c0.9-1.1,1.3-2.5,1.1-3.9   c-1.2-1.8-3.6-2.5-5.6-1.6L25.1,154.1z"/>
            <circle className="st1" cx="30" cy="155.5" r="5.1"/>
            <circle className="st1" cx="55.3" cy="162.8" r="5.1"/>
            <path className="st1" d="M23.7,270.8c0.2-9.2,4.1-45.2,4.1-45.2l18.1,3.5c1.2,8.9-1.2,41.2-1.2,41.2L23.7,270.8z"/>
            <path className="st1" d="M28.5,169.1c-3.5,9.3-9.6,41.4-9.6,41.4c-1.8,6.2,0.1,10.4-0.4,12.4c2,11.7,19.8,11.9,19.8,11.9   c16-3,17-17.4,17-17.4l-7.4-42.7L28.5,169.1z"/>
            
              <ellipse transform="matrix(0.2752 -0.9614 0.9614 0.2752 -229.9023 233.4082)" className="st1" cx="39.8" cy="269.2" rx="20.4" ry="20.4"/>
          </g>
          </svg>
        </div>

        {/* Bildschirm */}

        <div className={styles.welcomecontent}>
          <img className={styles.startscreen} src="/graphics/screen_start_end.svg" alt="welcome_screen"></img>
          <div className={styles.welcometext}>
            <h1 className="font-bold text-4xl">Willkommen</h1><br/>
            <p className="text-2xl">Ich begrüsse Sie im Zentrum der digitalen Medien der Armee!<br/><br/>
            Was tun wir?</p>
          </div>
        </div>

          {/* Container um gesamte Szene "Beratung" */}
          <div className="advice">
            <div className={styles.robot_projection} >
              {/* Projektion des Roboters (Dreieck) eingefügt */}
              <img src="/robot_projection_asset.svg" alt="robot_projection"></img>
            </div>

            {/* Projektion des Roboters (Dreieck) als SVG eingefügt */}
            <div className={styles.pasted_advice} >
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 239.8 333.4" >
              <style type="text/css">{`
                .stp0{fill:#B7CAFF;}
                .stp1{fill:#8188A6;}
                .stp2{fill:#FFFFFF;}
              `}</style>
              <path className="stp0" d="M32.4,191.5h9.6c6.6,0,12,5.4,12,12v117.9c0,6.6-5.4,12-12,12h-9.6c-6.6,0-12-5.4-12-12V203.5
                C20.4,196.8,25.8,191.5,32.4,191.5z"/>
              <ellipse className="stp1" cx="37.2" cy="161.4" rx="37.2" ry="44.3"/>
              <path className="stp0" d="M198.3,188.8h8.7c6.6,0,12,5.4,12,12v120.6c0,6.6-5.4,12-12,12h-8.7c-6.6,0-12-5.4-12-12V200.8
                C186.3,194.1,191.6,188.8,198.3,188.8z"/>
              <ellipse className="stp1" cx="202.6" cy="161.4" rx="37.2" ry="44.3"/>
              <path className="stp0" d="M111.2,56.1c0-4.4,3.6-8,8-8h58.9V12c0-6.6-5.4-12-12-12c0,0,0,0,0,0H50c-6.6,0-12,5.4-12,12v60.6
                c0,0.5,0,1,0.1,1.5V80L38,103.6l20.7-12l12.1-7h40.5V56.1z"/>
              <path className="stp2" d="M191.7,44.1h-72.5c-6.6,0-12,5.4-12,12v34.3c0,6.6,5.4,12,12,12h62l8.3,4.8l14.2,8.3l-0.1-16.3v-7.4
                c0.1-0.5,0.1-0.9,0.1-1.4V56.1C203.8,49.5,198.4,44.1,191.7,44.1L191.7,44.1z"/>
              <path className="stp1" d="M36.5,214h3c3.2,0,5.7,2.6,5.7,5.7v59.9c0,3.2-2.6,5.7-5.7,5.7h-3c-3.2,0-5.7-2.6-5.7-5.7v-59.9
                C30.8,216.6,33.3,214,36.5,214z"/>
              <path className="stp1" d="M200.3,214h2.3c3.2,0,5.7,2.6,5.7,5.7v59.9c0,3.2-2.6,5.7-5.7,5.7h-2.3c-3.2,0-5.7-2.6-5.7-5.7v-59.9
                C194.6,216.6,197.2,214,200.3,214z"/>
              <path className="animate-pulse stp0" d="M182.3,98.4h-63.1c-4.4,0-8-3.6-8-8V56.1c0-4.4,3.6-8,8-8h72.5c4.4,0,8,3.6,8,8v34.3c0,0.3,0,0.6-0.1,0.9v0.2
                l0.1,17L182.3,98.4z"/>
              </svg>

            {/* Auflistung der Icons & Styling durch div darüber mit children-Module */}
              <div className={styles.iconbox} >
                <div className="children:opacity-0 children:h-20 children:w-auto z-10">
                  <img src="/icons/photographie_camera.svg" alt="photographie"></img>
                  <img src="/icons/it_structure.svg" alt="it_structure"></img>
                  <img src="/icons/print_flyer.svg" alt="flyer"></img>
                  <img src="/icons/media_library.svg" alt="media_library"></img>
                  <img src="/icons/event_technology.svg" alt="event_technology"></img>
                </div>
              </div>

              {/* Text zur Beratung */}
              <div className={styles.advice_text} >
                <h2 className="text-3xl font-light opacity-0">Wir beraten Sie gerne mit Profis in den Bereichen</h2><br/>
                {/* Auflistung der Bereiche & Styling durch div darüber mit children-Module */}
                <div className="flex flex-col justify-between children:font-bold children:text-2xl children:opacity-0">
                  <span>Bildmedien</span>
                  <span>Audiovsuelle Medien</span>
                  <span>Printmedien</span>
                  <span>Interaktive Medien</span>
                  <span>Mediathek</span>
                </div>
              </div>

            </div>
          </div>

           {/* Container um gesamte Szene "Visualisierung" */}
          <div className={styles.visual} >
            <div className={styles.parachute} >

              {/* Fallschirm Grafik eingefügt und mit TailwindCSS Tag Breite zugewiesen */}
              <img className="w-64" src="/graphics/robot_parachute.svg" alt="parachute"></img>
            </div>
            <img className={styles.visual_background} src="/visual_secondary_background.png" alt="visual_background"></img>
            <img className={styles.visual_projection} src="/robot_graphic_projection_full.svg" alt="visual_projection"></img>
            <img className={styles.visual_projection_circle} src="/robot_graphic_projection_circle_asset.svg" alt="visual_projection_circle"></img>
            <img className={styles.visual_projection_circle} src="/robot_graphic_projection_circle_asset.svg" alt="visual_projection_circle"></img>
            
            {/* Text zur Visualisierung */}
            <div className={styles.visual_text}>
              <h2 className="text-3xl font-light opacity-0">Visualisieren? Für uns kein Problem!</h2><br/>
              <div className="flex flex-col justify-between children:font-bold children:text-2xl children:opacity-0">
                <span>Visuelle Effekte</span>
                <span>Avatare</span>
                <span>Screen Designs</span>
              </div>
            </div>
            {/* Container um Grafiken zur Visualisierung */}
            <div className={styles.visual_graphics}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.88 309.57">
              <defs>
              <style>{`.clsg-1{fill:#73e5a2;}.clsg-2{fill:url(#linear-gradient);}.clsg-3{fill:#b7caff;}.clsg-4{fill:#8188a6;}.clsg-5{fill:#fff;}.clsg-6{fill:#f2f2f2;}`}</style>
              <linearGradient id="linear-gradient" x1="151.44" y1="147.14" x2="302.88" y2="147.14" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0071bc"/>
              <stop offset="0.98" stopColor="#1a1a1a"/></linearGradient>
              </defs>
              <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="clsg-1" d="M15,0H161.16a0,0,0,0,1,0,0V294.27a0,0,0,0,1,0,0H15a15,15,0,0,1-15-15V15A15,15,0,0,1,15,0Z"/><path className="clsg-2" d="M151.44,0H287.86a15,15,0,0,1,15,15V279.23a15,15,0,0,1-15,15H151.44a0,0,0,0,1,0,0V0A0,0,0,0,1,151.44,0Z"/><rect className="clsg-3" x="47.7" y="167.68" width="33.57" height="141.89" rx="12"/><ellipse className="clsg-4" cx="64.49" cy="137.62" rx="37.16" ry="44.26"/><rect className="clsg-4" x="58.1" y="190.2" width="14.43" height="71.34" rx="5.72"/><rect className="clsg-3" x="219.44" y="167.68" width="33.57" height="141.89" rx="12"/><ellipse className="clsg-4" cx="236.23" cy="137.62" rx="37.16" ry="44.26"/><rect className="clsg-4" x="229.84" y="190.2" width="14.43" height="71.34" rx="5.72"/></g><g id="stars_layer"><path className="clsg-5" d="M224.12,43.11a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M271.68,77.46a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M218.83,76.14a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M168,199.66a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M182.5,240a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M286.21,272.33a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M269,206.27a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M286.87,182.49a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M168.63,29.24a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M204.3,19.33a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M278.94,12.73a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M188.45,277a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M179.86,130.31a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M201.66,193.72a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M172.59,249.21a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M176.56,121.72a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-5" d="M156.08,63.59a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-6" d="M284.89,4.8a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-6" d="M255.16,61.61a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-6" d="M296.12,43.78a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/><path className="clsg-6" d="M158.06,162a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"/></g></g></svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.32 193.05"><defs><style>{`.clsa-1{fill:#b7caff;}.clsa-2{fill:#8188a6;}.clsa-3{fill:#fff;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clsa-1" x="11.25" y="54.75" width="51.83" height="131.86" rx="12"/><ellipse className="clsa-2" cx="37.16" cy="39.63" rx="37.16" ry="39.63"/><rect className="clsa-2" x="4.03" y="83.43" width="12.09" height="71.34" rx="5.72"/><rect className="cls-2" x="58.84" y="83.43" width="11.45" height="71.34" rx="5.72"/><circle className="clsa-3" cx="21.77" cy="28.7" r="7.93"/><circle className="clsa-3" cx="53.26" cy="28.7" r="7.93"/><rect className="cls-2" x="17.89" y="180.17" width="15.95" height="12.89" rx="6.44"/><rect className="clsa-2" x="40.49" y="180.17" width="15.95" height="12.89" rx="6.44"/></g></g></svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.66 414.3"><defs><style>{`.clss-1{fill:#f3f2ef;}.clss-2{fill:#8188a6;}.clss-3{fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:4px;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clss-1" x="192.88" y="325.65" width="118.9" height="78.44"/><rect className="clss-2" width="504.66" height="335.56" rx="12"/><rect className="clss-1" x="145.32" y="396.6" width="214.02" height="17.7" rx="8.85"/><rect className="clss-1" x="16.46" y="20.48" width="471.74" height="294.6" rx="12"/><polygon className="clss-2" points="38.46 125.7 78.06 62.73 117.11 125.7 143.41 95.96 172.22 125.7 38.46 125.7"/><rect className="clss-3" x="38.74" y="39.76" width="133.47" height="85.66"/><polygon className="clss-2" points="176.34 294.12 215.94 231.15 254.99 294.12 281.3 264.38 310.1 294.12 176.34 294.12"/><rect className="clss-3" x="176.62" y="208.18" width="133.47" height="85.66"/><rect x="36.55" y="147.58" width="137.53" height="5" rx="2.5"/><rect x="36.55" y="159.84" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="172.11" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="184.38" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="196.65" width="120.22" height="5" rx="2.5"/><rect x="329.39" y="207.18" width="137.53" height="5" rx="2.5"/><rect x="329.39" y="219.45" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="231.72" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="243.99" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="256.25" width="120.22" height="5" rx="2.5"/></g></g></svg>

            </div>
            </div>
          
          {/** Hier Rest wieder einfügen */}

    </div>

  )
  }
