      {/* Responsive ANPASSUNG */}

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

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.32 193.05"><defs><style>{`.clsa-1{fill:#b7caff;}.clsa-2{fill:#8188a6;}.clsa-3{fill:#fff;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="clsa-1" x="11.25" y="54.75" width="51.83" height="131.86" rx="12"/><ellipse class="clsa-2" cx="37.16" cy="39.63" rx="37.16" ry="39.63"/><rect class="clsa-2" x="4.03" y="83.43" width="12.09" height="71.34" rx="5.72"/><rect class="cls-2" x="58.84" y="83.43" width="11.45" height="71.34" rx="5.72"/><circle class="clsa-3" cx="21.77" cy="28.7" r="7.93"/><circle class="clsa-3" cx="53.26" cy="28.7" r="7.93"/><rect class="cls-2" x="17.89" y="180.17" width="15.95" height="12.89" rx="6.44"/><rect class="clsa-2" x="40.49" y="180.17" width="15.95" height="12.89" rx="6.44"/></g></g></svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.66 414.3"><defs><style>{`.clss-1{fill:#f3f2ef;}.clss-2{fill:#8188a6;}.clss-3{fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:4px;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="clss-1" x="192.88" y="325.65" width="118.9" height="78.44"/><rect className="clss-2" width="504.66" height="335.56" rx="12"/><rect className="clss-1" x="145.32" y="396.6" width="214.02" height="17.7" rx="8.85"/><rect className="clss-1" x="16.46" y="20.48" width="471.74" height="294.6" rx="12"/><polygon className="clss-2" points="38.46 125.7 78.06 62.73 117.11 125.7 143.41 95.96 172.22 125.7 38.46 125.7"/><rect className="clss-3" x="38.74" y="39.76" width="133.47" height="85.66"/><polygon className="clss-2" points="176.34 294.12 215.94 231.15 254.99 294.12 281.3 264.38 310.1 294.12 176.34 294.12"/><rect className="clss-3" x="176.62" y="208.18" width="133.47" height="85.66"/><rect x="36.55" y="147.58" width="137.53" height="5" rx="2.5"/><rect x="36.55" y="159.84" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="172.11" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="184.38" width="137.72" height="5" rx="2.5"/><rect x="36.62" y="196.65" width="120.22" height="5" rx="2.5"/><rect x="329.39" y="207.18" width="137.53" height="5" rx="2.5"/><rect x="329.39" y="219.45" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="231.72" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="243.99" width="137.72" height="5" rx="2.5"/><rect x="329.46" y="256.25" width="120.22" height="5" rx="2.5"/></g></g></svg>

        </div>
        </div>

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