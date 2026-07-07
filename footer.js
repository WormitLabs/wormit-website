/* ── Universal Footer Component ─────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── CSS ── */
  var style = document.createElement('style');
  style.textContent = `
    footer {
      background: #0B0F1A;
      position: fixed; bottom: 0; left: 0; right: 0;
      z-index: 1;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
    }
    .f-inner {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .f-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 100px 120px 72px;
    }
    .f-logo-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      flex-shrink: 0;
    }
    .f-logo-link { display: inline-flex; text-decoration: none; }
    .f-logo-link svg { width: 300px; height: auto; display: block; }
    .f-tagline {
      font-family: 'Urbanist', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: #B7BFCC;
      text-align: center;
      letter-spacing: 0.01em;
      margin: 0;
    }
    .f-right-cols {
      display: flex;
      gap: 120px;
      align-items: flex-start;
    }
    .f-nav-col {
      list-style: none;
      padding: 0; margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 260px;
    }
    .f-nav-col a {
      font-family: 'Urbanist', sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: rgba(255,255,255,.50);
      text-decoration: none;
      letter-spacing: -0.03em;
      white-space: nowrap;
      transition: color .2s;
    }
    .f-nav-col a:hover { color: rgba(255,255,255,.85); }
    .f-contact {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 260px;
    }
    .f-contact-top {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .f-phone {
      font-family: 'Urbanist', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #FFC940;
      text-decoration: none;
      transition: opacity .2s;
    }
    .f-phone:hover { opacity: .75; }
    .f-email {
      font-family: 'Urbanist', sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      text-decoration: none;
      transition: opacity .2s;
    }
    .f-email:hover { opacity: .7; }
    .f-addr {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .f-addr p {
      font-family: 'Urbanist', sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: rgba(255,255,255,.60);
      margin: 0;
      line-height: 1.4;
    }
    .f-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255,255,255,.12);
      padding: 0 120px;
      height: 100px;
      flex-shrink: 0;
    }
    .f-copy {
      font-family: 'Urbanist', sans-serif;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255,255,255,.60);
      letter-spacing: -0.03em;
    }
    .f-socials {
      display: flex;
      gap: 36px;
      align-items: center;
    }
    .f-socials a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,.65);
      text-decoration: none;
      transition: color .2s;
    }
    .f-socials a:hover { color: #fff; }
    .f-socials svg { width: 18px; height: 18px; display: block; }

    @media (min-width: 769px) and (max-width: 1100px) {
      .f-top { padding: 72px 40px 56px; gap: 48px; flex-wrap: wrap; }
      .f-logo-col { align-items: flex-start; }
      .f-logo-link svg { width: 200px; }
      .f-tagline { font-size: 17px; text-align: left; }
      .f-nav-col { height: auto; justify-content: flex-start; gap: 24px; }
      .f-nav-col a { font-size: 18px; }
      .f-contact { height: auto; justify-content: flex-start; gap: 24px; }
      .f-phone, .f-email { font-size: 18px; }
      .f-addr p { font-size: 18px; }
      .f-bottom { padding: 0 40px; height: 88px; }
      .f-copy { font-size: 16px; }
    }

    @media (max-width: 768px) {
      .f-top { padding: 48px 24px 40px; flex-direction: column; gap: 40px; }
      .f-logo-col { align-items: flex-start; gap: 16px; }
      .f-logo-link svg { width: 150px; }
      .f-tagline { font-size: 15px; text-align: left; }
      .f-right-cols { flex-direction: column; gap: 32px; width: 100%; }
      .f-nav-col { height: auto; flex-direction: row; flex-wrap: wrap; gap: 14px 24px; justify-content: flex-start; }
      .f-nav-col a { font-size: 16px; }
      .f-contact { height: auto; gap: 20px; }
      .f-phone, .f-email { font-size: 16px; }
      .f-addr { gap: 8px; }
      .f-addr p { font-size: 15px; }
      .f-bottom { padding: 0 24px; height: 80px; }
      .f-copy { font-size: 14px; }
      .f-socials { gap: 24px; }
      .f-socials svg { width: 20px; height: 20px; }
    }
  `;
  document.head.appendChild(style);

  /* ── HTML ── */
  var ft = document.getElementById('site-footer');
  if (!ft) return;

  ft.innerHTML = `
    <div class="f-inner">
      <div class="f-top">
        <div class="f-logo-col">
          <a href="index.html" class="f-logo-link" aria-label="Wormit home">
            <svg width="419" height="78" viewBox="0 0 419 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M108.195 7.06216C108.195 10.962 105.058 14.1243 101.19 14.1243H92.6273V70.6216C92.6273 74.5215 89.4905 77.6838 85.6219 77.6838H64.6056C60.7371 77.6838 57.6002 74.5215 57.6002 70.6216V43.9423H50.5948V70.6216C50.5948 74.5215 47.4579 77.6838 43.5893 77.6838H22.5731C18.7045 77.6838 15.5676 74.5215 15.5676 70.6216V70.2607L16.2604 14.1243H7.00543C3.13688 14.1243 0 10.962 0 7.06216C0 3.16228 3.13688 0 7.00543 0H23.3514C27.22 0 30.3569 3.16228 30.3569 7.06216V7.42312L29.6641 63.5595H36.5839V36.8802C36.5839 32.9803 39.7208 29.818 43.5893 29.818H64.6056C68.4742 29.818 71.6111 32.9803 71.6111 36.8802V63.5595H78.6165V7.06216C78.6165 3.16228 81.7534 0 85.6219 0H101.19C105.058 0 108.195 3.16228 108.195 7.06216Z" fill="#125CFA"/>
              <path d="M352.606 23.5403C356.475 23.5403 359.611 20.3785 359.611 16.4782C359.611 12.5779 356.475 9.41602 352.606 9.41602C348.737 9.41602 345.601 12.5779 345.601 16.4782C345.601 20.3785 348.737 23.5403 352.606 23.5403Z" fill="#125CFA"/>
              <path d="M259.217 6.61426V7.5088C259.209 7.35971 259.201 7.21062 259.201 7.06153C259.201 6.91244 259.209 6.76335 259.217 6.61426Z" fill="#125CFA"/>
              <path d="M418.769 7.06216C418.769 10.962 415.632 14.1243 411.764 14.1243H402.073C402.182 30.5556 402.423 70.0017 402.423 70.6216C402.423 74.5215 399.286 77.6838 395.418 77.6838C391.549 77.6838 388.412 74.5215 388.412 70.6216L388.07 14.1243H378.294C374.425 14.1243 371.288 10.962 371.288 7.06216C371.288 3.16228 374.425 0 378.294 0H411.764C415.632 0 418.769 3.16228 418.769 7.06216Z" fill="#125CFA"/>
              <path d="M359.612 37.6649V70.6216C359.612 74.5215 356.475 77.6838 352.607 77.6838H319.136C315.268 77.6838 312.131 74.5215 312.131 70.6216V25.5179L298.073 41.3686L298.011 41.4392L297.739 41.7452L297.707 41.7845C296.431 43.1184 294.648 43.9423 292.671 43.9423C290.694 43.9423 288.912 43.1184 287.635 41.7845L287.604 41.7452L287.332 41.4392L287.269 41.3686L273.204 25.5258V70.6216C273.212 74.5215 270.075 77.6838 266.206 77.6838H236.986L236.869 77.6759C236.791 77.6838 236.706 77.6838 236.628 77.6838C234.301 77.6838 232.238 76.5381 230.961 74.7726L230.821 74.5686L207.695 41.1489L207.664 41.1018L207.376 40.678L207.337 40.6231C206.66 39.5403 206.271 38.2534 206.271 36.8802C206.271 32.9803 209.408 29.818 213.276 29.818H229.622V14.1243H200.044V70.6216C200.044 74.5215 196.907 77.6838 193.039 77.6838H163.46C159.592 77.6838 156.455 74.5215 156.455 70.6216V14.1243H132.325V63.5595H144.001C147.869 63.5595 151.006 66.7217 151.006 70.6216C151.006 74.5215 147.869 77.6838 144.001 77.6838H125.319C121.451 77.6838 118.314 74.5215 118.314 70.6216V7.06216C118.314 3.16228 121.451 0 125.319 0H163.46C167.329 0 170.465 3.16228 170.465 7.06216V63.5595H186.033V7.06216C186.033 3.16228 189.17 0 193.039 0H236.628C240.496 0 243.633 3.16228 243.633 7.06216V36.8802C243.633 40.7801 240.496 43.9423 236.628 43.9423H226.696L240.286 63.5673H259.201L259.216 7.50943V6.56781C259.473 2.89549 262.501 0 266.206 0C268.355 0 270.277 0.980856 271.562 2.51884H271.569L292.671 26.3026L313.734 2.57377L313.797 2.50314L314.069 2.19712L314.1 2.15788C315.377 0.823919 317.159 0 319.136 0C323.005 0 326.142 3.16228 326.142 7.06216C326.142 7.22695 326.134 7.39173 326.126 7.55651L326.142 63.5595H345.601V37.6649C345.601 33.765 348.738 30.6027 352.607 30.6027C356.475 30.6027 359.612 33.765 359.612 37.6649Z" fill="#125CFA"/>
            </svg>
          </a>
          <p class="f-tagline">We Dig. We test. We Make</p>
        </div>
        <div class="f-right-cols">
          <nav aria-label="Footer navigation">
            <ul class="f-nav-col">
              <li><a href="services.html">Services</a></li>
              <li><a href="index.html#about">About us</a></li>
              <li><a href="lab.html">The Lab</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </nav>
          <div class="f-contact">
            <div class="f-contact-top">
              <a href="tel:+916263068340" class="f-phone">+91 6263068340</a>
              <a href="mailto:business@wormit.co" class="f-email">business@wormit.co</a>
            </div>
            <div class="f-addr">
              <p>Raipur, Chhattisgarh, India</p>
              <p>Zenith co-working Raipur, 492001</p>
            </div>
          </div>
        </div>
      </div>
      <div class="f-bottom">
        <span class="f-copy">© wormit labs pvt ltd</span>
        <div class="f-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://wa.me/916263068340" target="_blank" rel="noopener" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;

  /* ── Sync body padding ── */
  var fInner = ft.querySelector('.f-inner');
  function sync() {
    var pb;
    if (window.innerWidth <= 1100) {
      pb = fInner.offsetHeight;
    } else {
      pb = Math.round(ft.offsetHeight * 0.8);
    }
    document.body.style.paddingBottom = pb + 'px';
  }
  if (document.readyState === 'complete') { sync(); }
  else { window.addEventListener('load', sync); }
  window.addEventListener('resize', sync, { passive: true });

}());
