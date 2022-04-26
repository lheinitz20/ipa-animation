import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from 'react';
import styles from '../styles/Animation.module.css';
import anime from 'animejs';
import { nodeName } from 'jquery';


export default function Home() {


  useEffect(() => {

    //Ermittlung der Seitenbreite um Variabeln dementsprechend zu setzen
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width > 1920) {
      // Wenn Seitenbreite grösser als '1920px' ist
    } else {
      // Wenn Seitenbreite kleiner als '1920px' ist
    }

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
      .add({
        targets: '.Animation_paperplane__Oqw4I',
        translateX: ['-340px', '2000px'],
        translateY: ['300px', '400px'],
        rotate: ['35deg', '0deg'],
        duration: 2400,
        easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000)'
      })
      .add({
        targets: '.background-container',
        width: '100%',
        duration: 2500,
        easing: 'cubicBezier(0.000, 0.000, 0.580, 1.000)'
      }, '-=2300')
      .add({
        targets: '.Animation_whole_robot__Xj3IE',
        translateX: [-340, 300],
        duration: 2000,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '#left_wheel, #right_wheel',
        rotate: '360',
        duration: 2900,
        direction: 'normal',
        easing: 'linear',
      }, '-=3000')
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
        .add({
          targets: '.Animation_robot_projection__ODSlJ',
          keyframes: [
            {opacity: 1},
            {opacity: 0},
            {opacity: 1},
            {opacity: 0},
            {opacity: 0},
            {opacity: 1},
          ],
          duration: 4000,
          easing: 'easeInOutSine',
        }, '-=1000')
        .add({
          targets: '.Animation_text__hiWK8',
          opacity: 1,
          begin: function restart() {
             var img = document.getElementById('anim'); 
             img.src = ""; 
             img.src = 'Animation_Welcome_Text.gif'; 
          }
        })
        .add({
          targets: '.Animation_text__hiWK8',
          opacity: 0
        }, '+=6000')
        .add({
          targets: '.Animation_robot_projection__ODSlJ',
          opacity: 0,
          duration: 2000,
          easing: 'easeInOutSine',
        })
        .add({
          targets: '.Animation_robot__hEoHQ',
          width: ['340px', '6600px'],
          translateY: '3800px', 
          translateX: '-1645px',
          duration: 5000,
          easeing: 'easeOut'
        }, '-=500')

      }, []);

  return (

    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="fixed left-0 background-container w-0 h-full bg-secondary"></div>
      {/* Roboter eingefügt */}
      <div className={styles.whole_robot}>
        {/* Fallschirm Grafik eingefügt und mit TailwindCSS Tag Breite zugewiesen 
        <div className={styles.parachute} >
          <img className="w-64" src="/graphics/robot_parachute.svg" alt="parachute"></img>
        </div>
         */}
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
        </div>
        <div className={styles.content} >
          <img className={styles.paperplane} src="/graphics/paperplane_1.svg" alt="paperplane" />
          <img className={styles.robot_projection} src="/robot_projection_asset.svg" alt="projection" />
          <img id="anim" className={styles.text} src="Animation_Welcome_Text.gif" alt="text" />
        </div>

    </div>
  )
  }