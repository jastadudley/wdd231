const gearData = {
  Headset: [
    { name: "My Favorite Headset", url: "https://www.logitech.com/en-us/shop/p/g733-rgb-wireless-headset.981-000882" },
    { name: "Budget Headset", url: "https://a.co/d/4l3BUMT" }
  ],
  Controller: [
    { name: "My Favorite Controller", url: "https://a.co/d/2NPy5oa" },
    { name: "Budget Controller", url: "https://a.co/d/cNVp6GV" }
  ],
  Monitor: [ 
    { name: "My Favorite Gaming Monitor", url: "https://starforgesystems.com/products/mag-321upx-qd-oled?variant=45860614209750&_gsid=tUVSy6GfrPLN&utm_source=chatgpt.com" },
    { name: "Budget Monitor", url: "https://www.bestbuy.com/site/aoc-c27g4x-27-va-curved-gaming-monitor-fhd-1920x1080-180hz-0-5ms-freesync-hdr10-black/6582195.p?skuId=6582195&utm_source=chatgpt.com" } ],
  RAM: [
    { name: "My Reccomended RAM", url: "https://www.newegg.com/corsair-vengeance-32gb-ddr5-5200-cas-latency-cl40-desktop-memory-black/p/N82E16820236827?item=N82E16820236827&nm_mc=knc-googleadwords&cm_mmc=knc-googleadwords-_-memory+%28desktop+memory%29-_-corsair-_-20236827&source=region&utm_source=chatgpt.com" },
    { name: "Budget RAM", url: "https://sp-siliconpower.com/products/silicon-power-zenith-gaming-ddr5-6000mhz-pc5-48000-32gb16gbx2-dual-pack-1-35v-desktop-unbuffered-dimm-black?variant=44324894114047&_gsid=5GFm6M5A9j8S&utm_source=chatgpt.com" } ]
};

document.querySelectorAll('.button-row .cta-button').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const type = btn.dataset.title;
    const modal = document.getElementById('gear-modal');
    modal.querySelector('#gear-modal-title').textContent = type;
    const container = modal.querySelector('.gear-options');
    container.innerHTML = gearData[type].map(item =>
      `<a href="${item.url}" target="_blank">${item.name}</a>`
    ).join('');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelector('.modal-close').addEventListener('click', () => {
  const modal = document.getElementById('gear-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
});
