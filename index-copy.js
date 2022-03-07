      {/* Responsive ANPASSUNG */}

        {/* Container um gesamte Szene "Produktion" */}
        <div className={styles.production}>

            {/* Text zur Produktion */}
            <div className={styles.production_text} >
            <h2 className="text-3xl font-light opacity-0">Wir produzieren fleissig!</h2><br/>
            {/* Auflistung der Bereiche & Styling durch div darüber mit children-Module */}
            <div className="flex flex-col children:font-bold children:text-2xl children:opacity-0">
              <span>Bildmedien</span>
              <span>Tonproduktion</span>
              <span>Videografie</span>
              <span>Vom Flyer bis zum Buch</span>
              <span>Umfragen</span>
              <span>Animationen</span>
            </div>
          </div>

        {/* Hebel als SVG eingefügt */}
        <svg className={styles.production_lever} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 217.2 212">
          <style type="text/css">{`
            .st0l{fill:#FFFFFF;}
            .st1l{fill:#151515;}`}
          </style>
          <g id="Layer_1">
            <path id="Rechteck_23" className="st0l" d="M190.2,0h17c5.5,0,10,4.5,10,10v192c0,5.5-4.5,10-10,10h-17c-5.5,0-10-4.5-10-10V10 C180.2,4.5,184.7,0,190.2,0z"/>
            <g className={styles.lever_stick}>
              <rect id="Rechteck_24" x="163.4" y="29.1" transform="matrix(0.8746 -0.4848 0.4848 0.8746 -29.1128 95.6917)" className="st0l" width="14" height="150.1"/>
              <circle id="Ellipse_25" className="st1l" cx="132.2" cy="33" r="21"/>
            </g>
          </g>
        </svg>

        {/* Zahnräder als SVG eingefügt */}
        <svg className={styles.production_gears} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          viewBox="0 0 100 100">
        <style type="text/css">{`
          .st0g{fill-rule:evenodd;clip-rule:evenodd;fill:#F3F2EF;}
        `}</style>
        <g id="gear_x5F_3">
          <path className="st0g" d="M53.9,70.4l0.1,0.9l0.2,0.9l0.4,0.9l0.5,0.8l0.6,0.7l0.7,0.6l0.8,0.5l0.9,0.4l0.9,0.2l0.9,0.1l0.9-0.1l0.9-0.2
            l0.9-0.4l0.8-0.5l0.7-0.6l0.6-0.7l0.5-0.8l0.4-0.9l0.2-0.9l0.1-0.9l-0.1-0.9l-0.2-0.9l-0.4-0.9l-0.5-0.8l-0.6-0.7l-0.7-0.6L62.7,65
            l-0.9-0.4l-0.9-0.2l-0.9-0.1L59,64.4l-0.9,0.2L57.2,65l-0.8,0.5l-0.7,0.6l-0.6,0.7l-0.5,0.8l-0.4,0.9L54,69.4L53.9,70.4 M44.7,72.5
            l-0.1-1.4v-1.4l0.1-1.4l3.6-1l0.3-1l0.4-1l0.5-0.9l-1.9-3.2l0.9-1.1l1-1l1.1-0.9l3.2,1.9l0.9-0.5l1-0.4l1-0.3l1-3.6l1.4-0.1h1.4
            l1.4,0.1l1,3.6l1,0.3l1,0.4l0.9,0.5l3.2-1.9l1.1,0.9l1,1l0.9,1.1l-1.9,3.2l0.5,0.9l0.4,1l0.3,1l3.6,1l0.1,1.1l0,1.1l0,1.1l-0.1,1.1
            l-3.6,1l-0.3,1l-0.4,1l-0.5,0.9l1.9,3.2l-0.9,1.1l-1,1l-1.1,0.9L66,80.8L65,81.3l-1,0.4l-1,0.3l-1,3.6l-1.4,0.1h-1.4l-1.4-0.1
            l-1-3.6l-1-0.3l-1-0.4l-0.9-0.5l-3.2,1.9l-1.1-0.9l-1-1l-0.9-1.1l1.9-3.2L49,75.5l-0.4-1l-0.3-1L44.7,72.5"/>
        </g>
        <g id="gear_x5F_2">
          <path className="st0g" d="M45.1,47.7l-0.4-0.8l-0.6-0.8l-0.7-0.7l-0.8-0.6l-0.8-0.4L41,44.1L40,44h-0.9l-0.9,0.1l-0.9,0.3l-0.8,0.4
            l-0.8,0.6L35,46.1l-0.6,0.8L34,47.7l-0.3,0.9l-0.1,0.9v0.9l0.1,0.9l0.3,0.9l0.4,0.8l0.6,0.8l0.7,0.7l0.8,0.6l0.8,0.4l0.9,0.3
            l0.9,0.1H40l0.9-0.1l0.9-0.3l0.8-0.4l0.8-0.6l0.7-0.7l0.6-0.8l0.4-0.8l0.3-0.9l0.1-0.9v-0.9l-0.1-0.9L45.1,47.7 M24.7,53.8l3-2.3
            l-0.1-1v-1.1l0.1-1l-3-2.3l0.4-1.4l0.6-1.3l0.7-1.3l3.7,0.5l0.7-0.8l0.7-0.7l0.8-0.7l-0.5-3.7l1.3-0.7l1.3-0.6l1.4-0.4l2.3,3l1-0.1
            h1.1l1,0.1l2.3-3l1.4,0.4l1.3,0.6l1.3,0.7l-0.5,3.7l0.8,0.7l0.7,0.7l0.7,0.8l3.7-0.5l0.7,1.3l0.6,1.3l0.4,1.4l-3,2.3l0.1,1v1.1
            l-0.1,1l3,2.3l-0.4,1.4l-0.6,1.3l-0.7,1.3l-3.7-0.5l-0.7,0.8l-0.7,0.7l-0.8,0.7l0.5,3.7l-1.3,0.7l-1.3,0.6l-1.4,0.4l-2.3-3l-1,0.1
            H39L38,62l-2.3,3l-1.4-0.4L33,63.9l-1.3-0.7l0.5-3.7l-0.8-0.7l-0.7-0.7L30,57.3l-3.7,0.5l-0.7-1.3l-0.6-1.3L24.7,53.8"/>
        </g>
        <g id="gear_x5F_1">
          <path className="st0g" d="M53.9,29.6l0.1,0.9l0.2,0.9l0.4,0.9l0.5,0.8l0.6,0.7l0.7,0.6l0.8,0.5l0.9,0.4l0.9,0.2l0.9,0.1l0.9-0.1l0.9-0.2
            l0.9-0.4l0.8-0.5l0.7-0.6l0.6-0.7l0.5-0.8l0.4-0.9l0.2-0.9l0.1-0.9l-0.1-0.9l-0.2-0.9l-0.4-0.9l-0.5-0.8l-0.6-0.7l-0.7-0.6
            l-0.8-0.5l-0.9-0.4l-0.9-0.2l-0.9-0.1L59,23.7l-0.9,0.2l-0.9,0.4l-0.8,0.5l-0.7,0.6l-0.6,0.7l-0.5,0.8l-0.4,0.9L54,28.7L53.9,29.6
            M44.6,30.4v-1.4l0.1-1.4l3.6-1l0.3-1l0.4-1l0.5-0.9l-1.9-3.2l0.9-1.1l1-1l1.1-0.9l3.2,1.9l0.9-0.5l1-0.4l1-0.3l1-3.6l1.4-0.1h1.4
            l1.4,0.1l1,3.6l1,0.3l1,0.4l0.9,0.5l3.2-1.9l1.1,0.9l1,1l0.9,1.1l-1.9,3.2l0.5,0.9l0.4,1l0.3,1l3.6,1l0.1,1.1l0,1.1l0,1.1l-0.1,1.1
            l-3.6,1l-0.3,1l-0.4,1l-0.5,0.9l1.9,3.2L71.3,40l-1,1l-1.1,0.9L66,40.1L65,40.6l-1,0.4l-1,0.3l-1,3.6L60.7,45h-1.4l-1.4-0.1l-1-3.6
            l-1-0.3l-1-0.4l-0.9-0.5l-3.2,1.9L49.6,41l-1-1l-0.9-1.1l1.9-3.2L49,34.7l-0.4-1l-0.3-1l-3.6-1L44.6,30.4"/>
        </g>
        </svg>

        {/* Bolzen mithilfe des img-Tags eingefügt */}
        <div className={styles.production_bolts}>
          <img src="/graphics/bolt_b.svg" alt="big_bolt"></img>
          <img src="/graphics/bolt_s.svg" alt="small_bolt"></img>
          <img src="/graphics/bolt_m.svg" alt="medium_bolt"></img>
        </div>

        {/* Container um die Grafiken zur Produktion */}
        <div className={styles.production_graphics}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 372.2"><defs><style>{`.clsc-1{fill:#8188a6;}.clsc-2{fill:#f3f2ef;}.clsc-3{fill:#151c28;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clsc-1" y="40.28" width="540" height="331.93" rx="30.02"/><path className="clsc-1" d="M349.1,0H190.9A6.25,6.25,0,0,0,186,4c-1.5,3.72-11.08,48.4-11.08,48.4a12,12,0,0,0,12,12H353.12a12,12,0,0,0,12-12s-9.86-43.77-11-48.08A5.43,5.43,0,0,0,349.1,0Z"/><circle className="clsc-2" cx="270" cy="209.95" r="118.81"/><circle className="clsc-3" cx="270" cy="209.95" r="110.79"/><circle className="clsc-2" cx="270" cy="209.95" r="94.87"/><rect className="clsc-2" x="426.05" y="64.4" width="81.91" height="26.73" rx="11.9"/></g></g></svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560.26 407.87">
                <defs>
                  <style>
                    {`.clsv-1{fill:#8188a6;}.clsv-2{fill:#151c28;}.clsv-3{fill:#F3F2EF;}.clsv-4{fill:#d32947;}.clsv-5{fill:#73e5a2;}`}
                  </style>
                </defs><g id="Layer_2" data-name="Layer 2"><g id="camera_film"><circle className="clsv-1" cx="269.22" cy="69.17" r="69.17"/><circle className="clsv-2" cx="269.22" cy="28.1" r="14.71"/><circle className="clsv-2" cx="228.15" cy="69.17" r="14.71"/><circle className="clsv-2" cx="269.22" cy="110.25" r="14.71"/><circle className="clsv-2" cx="310.3" cy="69.17" r="14.71"/></g><g id="Layer_1-2" data-name="Layer 1"><circle className="clsv-1" cx="124.32" cy="81.06" r="57.28"/><polygon className="clsv-1" points="549.67 156.88 549.67 276.21 549.67 395.54 446.33 335.87 342.99 276.21 446.33 216.54 549.67 156.88"/><rect className="clsv-1" y="165.08" width="425.85" height="242.79" rx="15"/><rect className="clsv-3" x="425.85" y="219.94" width="10.53" height="113.8" rx="5.26"/><rect className="clsv-3" x="544.4" y="155.88" width="15.85" height="240.91" rx="7.93"/><circle className="origin-camera-on clsv-4 animate-ping" cx="37.56" cy="202.22" r="15.05"/><circle className="clsv-4" cx="37.56" cy="202.22" r="15.05"/><circle className="clsv-5" cx="79.15" cy="202.22" r="15.05"/><rect className="clsv-2" x="69.97" y="140.35" width="271.93" height="24.73"/><rect className="clsv-3" x="278.86" y="328.96" width="121.16" height="55.28" rx="12"/><rect className="clsv-3" x="198.01" y="-0.48" width="15.85" height="279.8" rx="7.93" transform="translate(66.51 345.36) rotate(-90)"/><circle className="clsv-2" cx="124.32" cy="81.06" r="30.11"/></g></g>
              </svg>
              <svg className="h-64 w-auto" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 226.2 534.3">
                <style type="text/css">{`
                  .stm0{fill:#8188A6;}
                  .stm1{fill:#161D29;}
                  `}</style>
                  <g id="Layer_2_00000162349293332574414590000000610949274244801164_">
                    <g id="Layer_1-2">
                      <path className="stm0" d="M15,500.7h196.2c8.3,0,15,6.7,15,15v3.6c0,8.3-6.7,15-15,15H15c-8.3,0-15-6.7-15-15v-3.6
                        C0,507.5,6.7,500.7,15,500.7z"/>
                      <path className="stm0" d="M100.3,304c1.2,0.8,24.3,0.9,25.7,0v198.5h-25.7V304z"/>
                      <path className="stm0" d="M97.1,0h32.1c37.2,0,67.3,30.1,67.3,67.3v199.5c0,37.2-30.1,67.3-67.3,67.3H97.1c-37.2,0-67.3-30.1-67.3-67.3
                        V67.3C29.8,30.1,59.9,0,97.1,0z"/>
                      <path className="stm1" d="M29.8,109.5h64.5c6,0,10.9,4.9,10.9,10.9l0,0l0,0c0,6-4.9,10.9-10.9,10.9c0,0,0,0,0,0H29.8l0,0V109.5
                        L29.8,109.5z"/>
                      <path className="stm1" d="M196.5,131.3H132c-6,0-10.9-4.9-10.9-10.9l0,0c0-6,4.9-10.9,10.9-10.9h64.5l0,0V131.3L196.5,131.3z"/>
                      <path className="stm1" d="M29.8,143.8h64.5c6,0,10.9,4.9,10.9,10.9l0,0c0,6-4.9,10.9-10.9,10.9H29.8l0,0V143.8L29.8,143.8z"/>
                      <path className="stm1" d="M196.5,165.6H132c-6,0-10.9-4.9-10.9-10.9l0,0c0-6,4.9-10.9,10.9-10.9h64.5l0,0V165.6L196.5,165.6
                        L196.5,165.6z"/>
                      <path className="stm1" d="M29.8,178.2h64.5c6,0,10.9,4.9,10.9,10.9l0,0c0,6-4.9,10.9-10.9,10.9c0,0,0,0,0,0H29.8l0,0V178.2L29.8,178.2z
                        "/>
                      <path className="stm1" d="M196.5,200H132c-6,0-10.9-4.9-10.9-10.9l0,0c0-6,4.9-10.9,10.9-10.9h64.5l0,0V200L196.5,200L196.5,200z"/>
                      <rect x="29.8" y="240.2" className="stm1" width="166.7" height="14.2"/>
                    </g>
                  </g>
                </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.05 515.25"><defs><style>{`.clsf-1{fill:#f3f2ef;stroke-width:8px;}.clsf-1,.clsf-3{stroke:#1d1d1b;stroke-miterlimit:10;}.clsf-2{fill:#8188a6;}.clsf-3{fill:none;stroke-width:4px;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clsf-1" x="70.32" y="35.56" width="261.4" height="444.13" transform="translate(-72.99 79.58) rotate(-19.02)"/><rect className="clsf-1" x="70.32" y="35.56" width="261.4" height="444.13"/><polygon className="clsf-2" points="91.72 198.39 156.09 96.03 219.57 198.39 262.34 150.06 309.15 198.39 91.72 198.39"/><rect className="clsf-3" x="92.18" y="58.7" width="216.97" height="139.25"/><rect x="90.28" y="218.93" width="138.69" height="6.95" rx="3.48"/><rect x="90.28" y="236.2" width="190.92" height="6.95" rx="3.48"/><rect x="90.28" y="254.15" width="170.86" height="6.95" rx="3.48"/><rect x="90.28" y="272.1" width="218.88" height="6.95" rx="3.48"/><rect x="90.28" y="290.05" width="106.13" height="6.95" rx="3.48"/><rect x="90.28" y="308" width="170.86" height="6.95" rx="3.48"/><rect x="90.28" y="325.95" width="218.88" height="6.95" rx="3.48"/><rect x="90.28" y="343.9" width="106.13" height="6.95" rx="3.48"/><rect x="90.28" y="455.91" width="76.79" height="6.95" rx="3.48"/></g></g></svg>
              
              <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.07 369.1"><defs><style>{`.clsb-1{fill:#8188a6;}.clsb-2{fill:#fff;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="clsb-1" d="M357.6,120.63A184.51,184.51,0,0,0,126.77,9.32C32.08,40.54-20.3,141.09,7.39,236.07Z"/><path className="clsb-1" d="M361.68,133,11.48,248.47C45.7,341.3,147.6,391,242.3,359.77S389.37,228,361.68,133Z"/><path className="clsb-2" d="M126.16,364.39c11.91-44.17,14.31-86.87,7.11-126.91a253,253,0,0,0-35.2-90.34C68.06,99.49,31.49,75.27,31.12,75l6.77-10.36c1.59,1,39.22,26,70.65,75.87a265,265,0,0,1,36.91,94.75c7.53,41.85,5.05,86.37-7.34,132.32Z"/><path className="clsb-2" d="M237.84,166.06a259.68,259.68,0,0,1-12.28-62c-4.28-57,10.68-98.15,11.32-99.87l11.25,4.17-5.62-2.08,5.62,2.08c-.14.4-14.77,40.79-10.56,95.32a244.85,244.85,0,0,0,24.75,90.49c17.47,35.23,43.9,67,78.56,94.51l-7.46,9.41c-36.15-28.67-63.74-62-82-98.9A254.47,254.47,0,0,1,237.84,166.06Z"/><rect className="clsb-2" x="-2.81" y="178.02" width="373.46" height="13.88" transform="translate(-48.56 66.67) rotate(-18.19)"/></g></g></svg>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426 544"><defs><style>{`.clsu-1{fill:#8188a6;}.clsu-2{fill:#f3f2ef;}.clsu-3{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px;}.clsu-4{fill:#86c598;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clsu-1" width="426" height="544" rx="12"/><rect className="clsu-2" x="36.87" y="42.69" width="352.27" height="408.15" rx="12"/><rect x="152.94" y="73.31" width="205.94" height="6.95" rx="3.48"/><rect x="152.94" y="90.04" width="163.16" height="6.95" rx="3.48"/><rect x="152.94" y="106.77" width="181.9" height="6.95" rx="3.48"/><rect className="clsu-3" x="76.52" y="75.31" width="36.74" height="36.74" rx="12"/><rect x="152.94" y="147.19" width="90.95" height="6.95" rx="3.48"/><rect x="152.94" y="163.93" width="163.16" height="6.95" rx="3.48"/><rect x="152.94" y="180.66" width="181.9" height="6.95" rx="3.48"/><rect className="clsu-3" x="76.52" y="149.19" width="36.74" height="36.74" rx="12"/><rect x="152.94" y="223.08" width="138.69" height="6.95" rx="3.48"/><rect x="152.94" y="239.82" width="199.19" height="6.95" rx="3.48"/><rect x="152.94" y="256.55" width="81.58" height="6.95" rx="3.48"/><rect className="clsu-3" x="76.52" y="225.08" width="36.74" height="36.74" rx="12"/><rect x="152.94" y="300.97" width="107.77" height="6.95" rx="3.48"/><rect x="160.44" y="317.7" width="59.56" height="6.95" rx="3.48"/><rect x="152.94" y="334.44" width="181.9" height="6.95" rx="3.48"/><rect className="clsu-3" x="76.52" y="302.97" width="36.74" height="36.74" rx="12"/><rect className="clsu-4" x="84.86" y="225.36" width="7.05" height="28.62" rx="3.52" transform="translate(-120.24 92.26) rotate(-34.51)"/><rect className="clsu-4" x="104.36" y="201.25" width="7.05" height="55.03" rx="3.52" transform="translate(71.92 479.12) rotate(-146.58)"/></g></g></svg>
            </div>
        </div>
      </div>

        {/* Container um gesamte Szene "Zukunftsmanagement" */}
        <div className={styles.future}>
          {/* VR-Brille eingefügt */}
          <div className={styles.future_second_img}>
            <img src="/graphics/vr_glasses.svg" alt="vr-glasses"></img>
            {/* Sekundärer Hintergrund eingefügt */}
            <img src="/future_secondary_background_asset.svg" alt="secondary-future-background"></img>
         </div>
          {/* Icons zum Thema "Zukunftsmanagement" eingefügt */}
          <div className={styles.future_iconbox} >
            <img src="/icons/apps.svg" alt="future_apps"></img>
            <img src="/icons/virtual_reality.svg" alt="future_vr"></img>
            <img src="/icons/motion_graphic.svg" alt="future_motion"></img>
            <img src="/icons/3d.svg" alt="future_3D"></img>
            <img src="/icons/e-publishing.svg" alt="future_e-publishing"></img>
          </div>
          {/* Text zum Zukunftsmanagement */}
          <div className={styles.future_text} >
            <h2 className="text-3xl font-light opacity-0">Wir gehen mit der Zeit...</h2><br/>
            {/* Auflistung der Bereiche & Styling durch div darüber mit children-Module */}
            <div className="flex flex-col justify-between children:font-bold children:text-2xl children:opacity-0">
              <span>Apps</span>
              <span>VR-Tours</span>
              <span>Motion Graphics</span>
              <span>3D-Modellierung</span>
              <span>E-Publishing</span>
            </div>
          </div>
        </div>

        {/* Container um gesamtes Ende */}
        <img className={styles.end_background} src="/start_background.png" alt="end_background"></img>
        <div className={styles.end}>
        <div className={styles.endcontent}>
          <img className={styles.endscreen} src="/graphics/screen_start_end.svg" alt="end_screen"></img>
          <div className={styles.endtext}>
            <h1 className="font-bold text-3xl">Bye!</h1><br/>
            <p className="text-xl">Nun sind Sie über unsere Dienstleistungen aufgeklärt!</p>
          </div>
        </div>

        </div>