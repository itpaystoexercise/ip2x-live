/* IP2X app journey movie — markup and timeline. See ipm.css for how a page
   mounts it. Every on-screen line is the app's own text at v0.3.30. */
var MARKUP = `
<div class="ipm" id="ipm" aria-roledescription="animated walkthrough">
  <div class="ipm-glow"></div>
  <div class="ipm-stage">
    <div class="ipm-phone-box" id="ipm-pbox">
      <div class="ipm-phone" aria-hidden="true">
        <div class="ipm-screen" id="ipm-screen">
          <div class="ipm-island"></div>
          <div class="ipm-status" id="ipm-status"><span>9:41</span><i>●●● ▮</i></div>
          <div class="ipm-tap" id="ipm-tap"></div>

          <!-- 1 home screen -->
          <div class="ipm-scr s-home" data-s="home">
            <div class="ios-grid">
              <div class="ios-app"><b></b>Mail</div><div class="ios-app"><b></b>Photos</div><div class="ios-app"><b></b>Maps</div><div class="ios-app"><b></b>Clock</div>
              <div class="ios-app"><b></b>Health</div><div class="ios-app"><b></b>Watch</div><div class="ios-app"><b></b>TestFlight</div>
              <div class="ios-app ip" id="t-icon"><b><svg viewBox="0 0 60 32"><use href="#ipm-inf"/></svg><span>IP2X</span></b>IP2X</div>
            </div>
            <div class="ios-zoom" id="ios-zoom"></div>
          </div>

          <!-- 2 welcome -->
          <div class="ipm-scr s-welcome" data-s="welcome">
            <div class="a-mark"><svg viewBox="0 0 60 32"><use href="#ipm-inf"/></svg>IP2X</div>
            <h2 class="a-title">Welcome to IP2X</h2>
            <p class="a-cap" style="font-size:15px;line-height:22px">IP2X collects health and workout data from your phone and watch and uploads it for analysis.</p>
            <div class="col" style="gap:6px">
              <div class="lbl">What's your name?</div>
              <div class="a-input"><span id="t-name"></span><span class="caret"></span></div>
              <div class="a-free" id="t-free">✓ free</div>
            </div>
            <div class="grow"></div>
            <div class="a-btn dis" id="t-setup">Let's get set up</div>
            <div class="a-link" style="font-size:13px">Have a code from your old phone?</div>
          </div>

          <!-- 3 health -->
          <div class="ipm-scr s-health" data-s="health">
            <div class="sheet">
              <h4>Health Access</h4>
              <p>IP2X would like to read data from Health</p>
              <div class="turn" id="t-allon">Turn On All</div>
              <ul>
                <li>Heart Rate <span class="tog"></span></li>
                <li>Workouts <span class="tog"></span></li>
                <li>Active Energy <span class="tog"></span></li>
                <li>Date of Birth <span class="tog"></span></li>
                <li>Height <span class="tog"></span></li>
                <li>Weight <span class="tog"></span></li>
              </ul>
              <div class="allow" id="t-allow">Allow</div>
            </div>
          </div>

          <!-- 4 about you -->
          <div class="ipm-scr s-cards" data-s="cards">
            <div class="dots" id="t-dots"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="qcard" id="t-q">
              <div data-q="0">
                <h2 class="a-h">A few questions about you</h2>
                <div class="consent">They help us read your heart rate fairly and map your watch's movement. We keep them with your name only. You can change or delete them any time.</div>
                <div class="grow"></div>
                <div class="a-btn" id="t-agree">I agree, continue</div>
              </div>
              <div data-q="1">
                <h2 class="a-h">Which wrist do you wear your watch on?</h2>
                <div class="a-opt" id="t-left">Left</div><div class="a-opt">Right</div><div class="a-opt">I don't wear one</div>
              </div>
              <div data-q="2">
                <h2 class="a-h">How often do you train?</h2>
                <div class="a-opt">Rarely</div><div class="a-opt">1–2 a week</div><div class="a-opt" id="t-34">3–4 a week</div><div class="a-opt">5+ a week</div>
              </div>
            </div>
          </div>

          <!-- 5 setup check -->
          <div class="ipm-scr s-check" data-s="check">
            <h2 class="a-h">Check my setup</h2>
            <p class="a-cap">Hi sam. Checking the phone and the watch…</p>
            <div>
              <div class="chk"><b>✓</b><div>Health permissions granted<small>Granted.</small></div></div>
              <div class="chk"><b>✓</b><div>Watch paired, app installed<small>A watch is paired and the app is installed.</small></div></div>
              <div class="chk"><b>✓</b><div>Motion &amp; Fitness granted on the watch</div></div>
              <div class="chk"><b>✓</b><div>Phone can reach the server<small>Online. Nothing has needed uploading yet.</small></div></div>
            </div>
            <div class="verdict" id="t-verdict">Ready to record<small>Everything that applies to your setup is working.</small></div>
            <div class="grow"></div>
            <div class="a-btn" id="t-cont">Continue</div>
          </div>

          <!-- 6 train -->
          <div class="ipm-scr s-train" data-s="train" id="t-train">
            <div class="t-top">
              <div class="a-mark"><svg viewBox="0 0 60 32"><use href="#ipm-inf"/></svg>IP2X</div>
              <span class="a-chip">Watch ready</span>
            </div>
            <div class="t-body">
              <div class="t-hi">
                <div class="greet"><h2 class="a-title">Hi sam</h2><p class="a-cap" style="font-size:15px">Nothing is recording. Tap an exercise to begin.</p></div>
                <div class="live" style="top:6px;bottom:auto"><span class="rd"></span><span class="t" id="t-livet">Recording · 00:00</span><span class="n" id="t-sets">1 set</span><span class="end" id="t-end">End</span></div>
              </div>
              <div class="tiles">
                <div class="a-tile">Chest</div><div class="a-tile">Back</div>
                <div class="a-tile">Legs</div><div class="a-tile" id="t-biceps">Biceps<span class="bdg" id="t-bdg">×1</span></div>
                <div class="a-tile">Shoulders</div><div class="a-tile">Triceps</div>
                <div class="a-tile">Abs</div><div class="a-tile other">Other ›</div>
              </div>
              <div class="a-link" style="padding-top:4px">Just trying it out? Practice a set</div>
            </div>
            <div class="t-report">Report a problem</div>
            <div class="tabbar">
              <div class="on" id="tab-train"><svg viewBox="0 0 24 24"><path d="M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12"/></svg>Train</div>
              <div id="tab-act"><svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>Activity</div>
              <div><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>You</div>
            </div>
            <div class="ovl mid" id="t-dlg">
              <div class="dlg">
                <h2 class="a-h" style="font-size:19px">End the session?</h2>
                <p class="a-cap">1 set · Bicep Curls</p>
                <div class="a-btn" id="t-endsave">End session, save it</div>
                <div class="a-link" style="padding:6px 0">Keep going</div>
              </div>
            </div>
          </div>

          <!-- 7 exercise -->
          <div class="ipm-scr s-ex" data-s="ex" id="t-ex">
            <div class="ex-nav"><span class="back">‹ Train</span><span class="tchip" id="t-chip">00:04</span></div>
            <div><h2 class="a-title">Bicep Curls</h2><p class="a-cap">Set 1 this session · Arms</p></div>
            <div class="demo" id="t-demo">
              <!-- Pep, our avatar, demonstrating the curl (the site's own clip).
                   Muted: the clip carries voice prompts. src is set at mount
                   from the page's data-base so any page depth works. -->
              <video id="t-vid" muted loop playsinline preload="metadata" aria-hidden="true"></video>
              <span class="pill">Watch demo ▶</span>
            </div>
            <div class="ex-idle">
              <div class="a-card wcard"><div class="a-cap"><span class="lbl">Watch</span><br><span class="w">Left wrist · crown toward your hand</span></div><span class="a-link" style="font-size:14px">Change</span></div>
              <p class="a-cap">Start when you are in position. Tap Done after your last rep.</p>
              <div class="a-btn" id="t-start">Start</div>
            </div>
            <div class="ex-run">
              <div class="bigt" id="t-bigt">0:00</div>
              <p class="a-cap">The watch is recording your movement</p>
              <div class="a-btn" id="t-done" style="margin-top:6px">Done</div>
              <div class="a-link" style="font-size:14px">Cancel this set</div>
            </div>
            <div class="ovl" id="t-reps">
              <div class="rsheet">
                <p class="a-cap">Set 1 · Bicep Curls · <span id="t-dur">0:38</span></p>
                <h2 class="a-h" style="font-size:20px">How many reps did you manage?</h2>
                <div class="stepper"><b id="t-minus">−</b><span id="t-n">10</span><b id="t-plus">+</b></div>
                <p class="a-cap" style="text-align:center">Count what you managed. 0 counts too.</p>
                <div class="lbl" style="padding-top:2px">Was this a real set?</div>
                <div class="a-seg"><div id="t-real">Real set</div><div>Spoof</div></div>
                <div class="a-btn dis" id="t-save">Save set</div>
              </div>
            </div>
            <div class="toast" id="t-toast">Set saved · 12 reps</div>
          </div>

          <!-- 9 activity -->
          <div class="ipm-scr s-act" data-s="act">
            <div class="in">
              <h2 class="a-title">Activity</h2>
              <div class="a-card col" style="gap:6px">
                <div class="up" id="t-up"><span class="spin"></span><span id="t-upt">Uploading 214 records</span></div>
                <p class="a-cap">Watch ready · Health access allowed</p>
              </div>
              <div class="lbl">Today</div>
              <div class="a-card col" style="gap:4px">
                <div class="srow"><b style="font-size:16px;color:var(--a-ink)">18:04 · 4 min · 1 set</b><span class="a-chip">watch</span></div>
                <p class="a-cap">Bicep Curls ×1</p>
              </div>
              <div class="lbl">This week</div>
              <div class="a-card wk"><div><b>1</b><span>sessions</span></div><div><b>1</b><span>sets</span></div><div><b>4m</b><span>recorded</span></div></div>
              <div class="grow"></div>
            </div>
            <div class="tabbar">
              <div><svg viewBox="0 0 24 24"><path d="M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12"/></svg>Train</div>
              <div class="on"><svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>Activity</div>
              <div><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.5-6 8-6s7 2 8 6"/></svg>You</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ipm-watch" aria-hidden="true" id="ipm-watch">
      <div class="strap"></div>
      <div class="case"><div class="wface" id="w-face">
        <div class="wm"><svg viewBox="0 0 60 32"><use href="#ipm-inf"/></svg></div>
        <div class="wl" id="w-l">IP2X</div>
        <div class="wt" id="w-t" hidden>0:00</div>
        <div class="hr" id="w-hr" hidden>♥ 96</div>
      </div></div>
      <div class="strap"></div>
      <div class="lab" id="w-lab">Apple Watch, left wrist</div>
    </div>
  </div>

  <div class="ipm-cap" aria-live="polite">
    <div class="eb" id="c-eb">Step 1 of 9</div>
    <h3 id="c-h">Open IP2X</h3>
    <p id="c-p">Install it from your TestFlight invite, then tap the icon.</p>
  </div>
  <div class="ipm-bar">
    <button class="ipm-play" id="ipm-play" type="button" aria-label="Pause"><svg viewBox="0 0 16 16" id="ipm-play-i"><path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z"/></svg></button>
    <div class="ipm-chaps" id="ipm-chaps"></div>
  </div>

  <div class="ipm-end" id="ipm-end">
    <svg viewBox="0 0 60 32" aria-hidden="true"><use href="#ipm-inf"/></svg>
    <h3>Train. Count. <em>Save.</em></h3>
    <p>That's a whole session. Your watch recorded the movement and heart rate, you told us the reps, and it's uploaded.</p>
    <div class="row"><a href="/guides/apple/" id="ipm-guide">Read the setup guide</a><button type="button" id="ipm-again">Watch again</button></div>
  </div>

  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <defs>
      <!-- the logo's infinity: blue left loop, pink right loop -->
      <g id="ipm-inf" fill="none" stroke-width="6" stroke-linecap="round">
        <path d="M30 16C24 8 19 5 13.5 5A11 11 0 0 0 13.5 27C19 27 24 24 30 16" stroke="#bfe4f9"/>
        <path d="M30 16C36 24 41 27 46.5 27A11 11 0 0 0 46.5 5C41 5 36 8 30 16" stroke="#ffd1ea"/>
      </g>
    </defs>
  </svg>
</div>
`;

(function () {
  var mount = document.querySelector('.ipm-mount');
  if (!mount) return;
  mount.innerHTML = MARKUP;
  var root = document.getElementById('ipm');
  // the closing card's call to action is the host page's choice
  var cta = document.getElementById('ipm-guide');
  if (mount.dataset.ctaHref) cta.setAttribute('href', mount.dataset.ctaHref);
  if (mount.dataset.ctaLabel) cta.textContent = mount.dataset.ctaLabel;
  var base = mount.dataset.base || '';
  var vid = document.getElementById('t-vid');
  vid.poster = base + 'assets/img/video-posters/pep-curls.jpg';
  vid.src = base + 'assets/video/pep-curls.mp4';
  // Pep moves only while a set is running, and only while the movie plays.
  var curling = false;
  function pep(on) {
    curling = on;
    if (on && !paused) { var p = vid.play(); if (p && p.catch) p.catch(function () {}); }
    else vid.pause();
    if (!on) { try { vid.currentTime = 0; } catch (e) {} }
  }
  var $ = function (id) { return document.getElementById(id); };
  var screen = $('ipm-screen'), tap = $('ipm-tap'), pbox = $('ipm-pbox');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- fit the phone to the space it has ----
  function fit() {
    var avail = root.clientWidth - 32;
    var k = Math.min(1, avail / 340, (window.innerHeight * 0.72) / 696);
    k = Math.max(0.55, k);
    pbox.style.setProperty('--k', k.toFixed(3));
    pbox.firstElementChild.style.setProperty('--k', k.toFixed(3));
  }
  fit(); window.addEventListener('resize', fit);

  // ---- a pausable clock: wait() only counts time while playing ----
  var paused = false, run = 0, rate = reduce ? 0.6 : 1;
  function wait(ms, token) {
    return new Promise(function (res, rej) {
      var left = ms * rate, last = performance.now();
      function tick(now) {
        if (token !== run) return rej('cancel');
        if (!paused) left -= now - last;
        last = now;
        if (left <= 0) res(); else requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  function show(name) {
    root.querySelectorAll('.ipm-scr').forEach(function (s) {
      var on = s.getAttribute('data-s') === name;
      if (s.classList.contains('on') && !on) { s.classList.add('off'); }
      if (on) s.classList.remove('off');
      s.classList.toggle('on', on);
    });
    $('ipm-status').classList.toggle('light', name === 'home');
    tap.classList.toggle('light', name === 'home');
  }
  function k() { return parseFloat(pbox.style.getPropertyValue('--k')) || 1; }
  async function press(el, t, extraMs) {
    var r = el.getBoundingClientRect(), s = screen.getBoundingClientRect(), kk = k();
    tap.style.left = ((r.left + r.width / 2 - s.left) / kk) + 'px';
    tap.style.top = ((r.top + r.height / 2 - s.top) / kk) + 'px';
    tap.classList.add('show');
    await wait(650, t);
    tap.classList.add('down'); el.classList.add('press');
    await wait(180, t);
    tap.classList.remove('down'); el.classList.remove('press');
    await wait(extraMs || 250, t);
  }
  function hideTap() { tap.classList.remove('show'); }
  function mmss(sec) { var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
  function mmss2(sec) { var m = Math.floor(sec / 60), s = sec % 60; return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s; }

  function watch(state, sec, hr) {
    $('w-l').textContent = state === 'run' ? 'Recording' : state === 'ready' ? 'Ready' : 'IP2X';
    $('w-t').hidden = state !== 'run'; $('w-hr').hidden = state !== 'run';
    if (sec != null) $('w-t').textContent = mmss(sec);
    if (hr != null) $('w-hr').textContent = '♥ ' + hr;
  }

  // Reset every piece of state, so any chapter can start cold.
  function reset() {
    hideTap();
    $('ios-zoom').classList.remove('go');
    $('t-name').textContent = ''; $('t-free').classList.remove('on'); $('t-setup').classList.add('dis');
    root.querySelectorAll('.tog').forEach(function (x) { x.classList.remove('on'); });
    $('t-allow').classList.remove('ok');
    root.querySelectorAll('#t-q > div').forEach(function (x) { x.classList.remove('on', 'gone'); });
    root.querySelectorAll('.a-opt').forEach(function (x) { x.classList.remove('sel'); });
    root.querySelectorAll('#t-dots i').forEach(function (x) { x.classList.remove('on'); });
    root.querySelectorAll('.chk').forEach(function (x) { x.classList.remove('on'); });
    $('t-verdict').classList.remove('on');
    $('t-train').classList.remove('rec'); $('t-bdg').classList.remove('on'); $('t-dlg').classList.remove('on');
    $('tab-train').classList.add('on'); $('tab-act').classList.remove('on');
    $('t-ex').classList.remove('running'); pep(false);
    $('t-reps').classList.remove('on'); $('t-real').classList.remove('sel'); $('t-save').classList.add('dis');
    $('t-n').textContent = '10'; $('t-toast').classList.remove('on');
    $('t-up').classList.remove('done'); $('t-upt').textContent = 'Uploading 214 records';
    $('ipm-end').classList.remove('on');
    watch('idle');
  }

  var CH = [
    { id: 'open', chip: 'Open', h: 'Open IP2X', p: 'Install it from your TestFlight invite, then tap the icon.', run: async function (t) {
      show('home'); await wait(900, t);
      await press($('t-icon'), t, 100); hideTap();
      $('ios-zoom').classList.add('go'); await wait(700, t);
    } },
    { id: 'name', chip: 'Name', h: 'Choose your name', p: 'It keeps all your sessions together. The app checks it is free while you type.', run: async function (t) {
      show('welcome'); await wait(700, t);
      var name = 'sam';
      for (var i = 1; i <= name.length; i++) { $('t-name').textContent = name.slice(0, i); await wait(260, t); }
      await wait(400, t); $('t-free').classList.add('on'); $('t-setup').classList.remove('dis');
      await wait(700, t); await press($('t-setup'), t); hideTap(); await wait(300, t);
    } },
    { id: 'health', chip: 'Health', h: 'Allow Health access', p: 'Turn everything on. IP2X reads your heart rate and workouts from Health; it never writes to it.', run: async function (t) {
      show('health'); await wait(900, t);
      await press($('t-allon'), t, 100);
      var tg = root.querySelectorAll('.tog');
      for (var i = 0; i < tg.length; i++) { tg[i].classList.add('on'); await wait(90, t); }
      $('t-allow').classList.add('ok'); await wait(400, t);
      await press($('t-allow'), t); hideTap(); await wait(200, t);
    } },
    { id: 'you', chip: 'About you', h: 'A few questions about you', p: 'Eight quick cards, one per swipe: birthday, sex, height, weight, wrist, hand, training and medication.', run: async function (t) {
      show('cards');
      var q = root.querySelectorAll('#t-q > div'), d = root.querySelectorAll('#t-dots i');
      q[0].classList.add('on'); d[0].classList.add('on'); await wait(1600, t);
      await press($('t-agree'), t, 100);
      q[0].classList.add('gone'); q[1].classList.add('on'); d[1].classList.add('on'); hideTap(); await wait(900, t);
      await press($('t-left'), t, 50); $('t-left').classList.add('sel'); await wait(500, t);
      q[1].classList.add('gone'); q[2].classList.add('on');
      for (var i = 2; i < 7; i++) { d[i].classList.add('on'); await wait(110, t); }
      hideTap(); await wait(600, t);
      await press($('t-34'), t, 50); $('t-34').classList.add('sel'); d[7].classList.add('on'); await wait(700, t); hideTap();
    } },
    { id: 'check', chip: 'Setup', h: 'Check my setup', p: 'One look at the phone, the watch and the connection. Green across the board means you are ready to record.', run: async function (t) {
      show('check'); watch('ready'); await wait(700, t);
      var c = root.querySelectorAll('.chk');
      for (var i = 0; i < c.length; i++) { c[i].classList.add('on'); await wait(520, t); }
      $('t-verdict').classList.add('on'); await wait(1200, t);
      await press($('t-cont'), t); hideTap();
    } },
    { id: 'pick', chip: 'Pick', h: 'Tap an exercise to begin', p: 'Train is home. There is no start button: your first exercise starts the session.', run: async function (t) {
      show('train'); watch('ready'); await wait(1800, t);
      await press($('t-biceps'), t); hideTap();
    } },
    { id: 'set', chip: 'Set', h: 'Start, lift, tap Done', p: 'Check how the watch is worn, tap Start and do your reps. The watch records your movement and heart rate.', run: async function (t) {
      show('ex'); watch('ready'); $('t-chip').textContent = '00:04'; await wait(1500, t);
      await press($('t-start'), t); hideTap();
      $('t-ex').classList.add('running'); pep(true);
      var hr = 96;
      for (var s = 0; s <= 38; s += 2) {
        $('t-bigt').textContent = mmss(s); $('t-chip').textContent = mmss2(s + 6);
        hr = Math.min(132, hr + (s < 30 ? 2 : 0)); watch('run', s, hr);
        await wait(s === 38 ? 250 : 210, t);
      }
      await press($('t-done'), t); hideTap(); vid.pause(); watch('ready');
    } },
    { id: 'reps', chip: 'Reps', h: 'Count your reps, mark it real', p: 'Say how many you managed. Then choose Real set or Spoof; nothing is picked for you, so a fake never slips in as real.', run: async function (t) {
      show('ex'); watch('ready'); $('t-ex').classList.add('running'); $('t-reps').classList.add('on'); await wait(1300, t);
      await press($('t-plus'), t, 80); $('t-n').textContent = '11';
      await press($('t-plus'), t, 80); $('t-n').textContent = '12'; await wait(300, t);
      await press($('t-real'), t, 80); $('t-real').classList.add('sel'); $('t-save').classList.remove('dis'); await wait(500, t);
      await press($('t-save'), t); hideTap();
      $('t-reps').classList.remove('on'); $('t-toast').classList.add('on'); await wait(1300, t);
    } },
    { id: 'end', chip: 'End', h: 'End the session and save it', p: 'Do more sets, or tap End. Everything you recorded uploads on its own.', run: async function (t) {
      show('train'); watch('ready'); $('t-train').classList.add('rec'); $('t-bdg').classList.add('on');
      for (var s = 48; s <= 54; s++) { $('t-livet').textContent = 'Recording · ' + mmss2(s); await wait(s === 48 ? 600 : 280, t); }
      await press($('t-end'), t); $('t-dlg').classList.add('on'); hideTap(); await wait(1000, t);
      await press($('t-endsave'), t); hideTap();
      $('t-dlg').classList.remove('on'); $('t-train').classList.remove('rec'); await wait(500, t);
      show('act'); await wait(1600, t);
      $('t-up').classList.add('done'); $('t-upt').textContent = 'Everything is uploaded'; await wait(2200, t);
      $('ipm-end').classList.add('on');
    } }
  ];

  // chapter chips double as the progress bar
  var chaps = $('ipm-chaps');
  CH.forEach(function (c, i) {
    var b = document.createElement('button'); b.type = 'button';
    b.innerHTML = c.chip + '<i></i>';
    b.setAttribute('aria-label', 'Step ' + (i + 1) + ': ' + c.h);
    b.addEventListener('click', function () { playFrom(i); });
    chaps.appendChild(b);
  });

  function caption(i) {
    $('c-eb').textContent = 'Step ' + (i + 1) + ' of ' + CH.length;
    $('c-h').textContent = CH[i].h; $('c-p').textContent = CH[i].p;
    chaps.querySelectorAll('button').forEach(function (b, j) { b.classList.toggle('on', j === i); b.classList.toggle('done', j < i); });
  }

  async function playFrom(i) {
    var t = ++run; paused = false; setPlayIcon();
    reset();
    // put the train screen in its recording state when jumping straight to End
    try {
      for (var j = i; j < CH.length; j++) {
        caption(j);
        if (j > 0 && j === i) prime(j);
        await CH[j].run(t);
        await wait(500, t);
      }
    } catch (e) { if (e !== 'cancel') throw e; }
  }
  function prime(j) {
    if (CH[j].id === 'reps') $('t-bigt').textContent = '0:38';
  }

  function setPlayIcon() {
    $('ipm-play-i').innerHTML = paused ? '<path d="M4 2l10 6-10 6z"/>' : '<path d="M3 2h3.5v12H3zM9.5 2H13v12H9.5z"/>';
    $('ipm-play').setAttribute('aria-label', paused ? 'Play' : 'Pause');
  }
  $('ipm-play').addEventListener('click', function () {
    if ($('ipm-end').classList.contains('on')) { playFrom(0); return; }
    paused = !paused; setPlayIcon();
    if (curling) { if (paused) vid.pause(); else vid.play().catch(function () {}); }
  });
  $('ipm-again').addEventListener('click', function () { playFrom(0); });

  // Start when the movie scrolls into view; pause when it leaves.
  var started = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !started) { started = true; playFrom(0); }
        else if (!e.isIntersecting && started && !paused) { paused = true; setPlayIcon(); vid.pause(); }
      });
    }, { threshold: 0.35 }).observe(root);
  } else { started = true; playFrom(0); }
  // the resting frame before playback: the Train home, which is what the app is
  show('train'); caption(5); chaps.querySelectorAll('button').forEach(function (b) { b.classList.remove('on', 'done'); });
  $('c-eb').textContent = 'The IP2X app, start to finish'; $('c-h').textContent = 'From install to a saved session'; $('c-p').textContent = 'Nine short steps. Press play, or jump to any step.';
})();
