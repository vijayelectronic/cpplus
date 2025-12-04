;(function(){
  var html = document.documentElement
  var themeKey = 've_theme'
  var langKey = 've_lang'
  var theme = localStorage.getItem(themeKey) || 'light'
  var lang = localStorage.getItem(langKey) || 'hi'
  html.setAttribute('data-theme', theme)
  html.setAttribute('lang', lang)

  var t = {
    brandName: { hi: 'विजय इलेक्ट्रॉनिक्स', en: 'Vijay Electronics' },
    brandCity: { hi: 'उन्नाव', en: 'Unnao' },
    navHome: { hi: 'होम', en: 'Home' },
    navProducts: { hi: 'प्रोडक्ट्स', en: 'Products' },
    navServices: { hi: 'सर्विसेस', en: 'Services' },
    navContact: { hi: 'कॉन्टैक्ट', en: 'Contact' },
    whatsappChat: { hi: 'व्हाट्सएप', en: 'WhatsApp' },
    slide1: { hi: 'सीसीटीवी सिक्योरिटी सॉल्यूशंस', en: 'CCTV Security Solutions' },
    slide2: { hi: 'वायरलेस सीसीटीवी किट', en: 'Wireless CCTV Kit' },
    slide3: { hi: 'एलईडी टीवी मरम्मत और सर्विस', en: 'LED TV Repair & Service' },
    slide6: { hi: 'सीसीटीवी इंस्टॉलेशन और कॉन्फ़िगरेशन', en: 'CCTV Installation & Configuration' },
    slide7: { hi: 'साइट सर्वे और कैमरा प्लेसमेंट', en: 'Site Survey & Camera Placement' },
    slide8: { hi: 'मोबाइल रिमोट व्यू', en: 'Mobile Remote View' },
    slide9: { hi: 'फुल प्रोडक्ट रेंज', en: 'Full Product Range' },
    slide10:{ hi: 'विजय इलेक्ट्रॉनिक्स उन्नाव', en: 'Vijay Electronics Unnao' },
    featuresTitle: { hi: 'हमारी सेवाएं', en: 'Our Services' },
    featCctv: { hi: 'सीसीटीवी कैमरा', en: 'CCTV Cameras' },
    featCctvDesc: { hi: 'बुलेट, डोम, पीटीज़ेड, वायरलेस किट', en: 'Bullet, Dome, PTZ, Wireless kits' },
    featInstall: { hi: 'इंस्टॉलेशन', en: 'Installation' },
    featInstallDesc: { hi: 'कॉन्फ़िगरेशन, सर्विलांस सेटअप', en: 'Configuration, surveillance setup' },
    featRepair: { hi: 'रिपेयरिंग', en: 'Repairs' },
    featRepairDesc: { hi: 'एलईडी टीवी, लैपटॉप, डेस्कटॉप', en: 'LED TV, Laptop, Desktop' },
    featRemote: { hi: 'रिमोट व्यू', en: 'Remote View' },
    featRemoteDesc: { hi: 'मोबाइल के जरिए लाइव मॉनिटरिंग', en: 'Live monitoring on mobile' },
    viewProducts: { hi: 'प्रोडक्ट्स देखें', en: 'View Products' },
    viewServices: { hi: 'सर्विसेस देखें', en: 'View Services' },
    contactUs: { hi: 'संपर्क करें', en: 'Contact' },
    visitUs: { hi: 'लोकेशन', en: 'Location' },
    copyright: { hi: '© 2025 विजय इलेक्ट्रॉनिक्स, उन्नाव', en: '© 2025 Vijay Electronics, Unnao' },

    productsTitle: { hi: 'प्रोडक्ट्स – Vijay Electronics', en: 'Products – Vijay Electronics' },
    productsHeading: { hi: 'हमारे प्रोडक्ट्स', en: 'Our Products' },
    prodCctv: { hi: 'सीसीटीवी कैमरा रेंज', en: 'CCTV Camera Range' },
    prodCctvDesc: { hi: 'बुलेट, डोम, पीटीज़ेड, वायरलेस', en: 'Bullet, Dome, PTZ, Wireless' },
    prodWireless: { hi: 'वायरलेस किट', en: 'Wireless Kit' },
    prodWirelessDesc: { hi: 'आसान इंस्टॉलेशन, रिमोट व्यू', en: 'Easy install, remote view' },
    prodLed: { hi: 'एलईडी टीवी', en: 'LED TV' },
    prodLedDesc: { hi: 'सेल और सर्विस', en: 'Sale & Service' },
    prodComputers: { hi: 'लैपटॉप और डेस्कटॉप', en: 'Laptop & Desktop' },
    prodComputersDesc: { hi: 'रिपेयर और अपग्रेड', en: 'Repair & Upgrade' },
    getQuote: { hi: 'कोटेशन लें', en: 'Get Quote' },
    seeServices: { hi: 'सर्विसेस देखें', en: 'See Services' },

    servicesTitle: { hi: 'सर्विसेस – Vijay Electronics', en: 'Services – Vijay Electronics' },
    servicesHeading: { hi: 'हमारी सर्विसेस', en: 'Our Services' },
    svcInstall: { hi: 'सीसीटीवी इंस्टॉलेशन', en: 'CCTV Installation' },
    svcInstallDesc: { hi: 'कैमरा प्लेसमेंट, वायरिंग, डीवीआर सेटअप', en: 'Camera placement, wiring, DVR setup' },
    svcSurvey: { hi: 'साइट सर्वे', en: 'Site Survey' },
    svcSurveyDesc: { hi: 'बेहतर कवरेज के लिए प्लानिंग', en: 'Planning for better coverage' },
    svcRemote: { hi: 'रिमोट व्यू और मॉनिटरिंग', en: 'Remote View & Monitoring' },
    svcRemoteDesc: { hi: 'मोबाइल और वेब पर लाइव व्यू', en: 'Live view on mobile and web' },
    svcLed: { hi: 'एलईडी टीवी रिपेयर', en: 'LED TV Repair' },
    svcLedDesc: { hi: 'ऑन-साइट और वर्कशॉप सर्विस', en: 'On-site and workshop service' },
    svcLaptop: { hi: 'लैपटॉप/डेस्कटॉप रिपेयर', en: 'Laptop/Desktop Repair' },
    svcLaptopDesc: { hi: 'हार्डवेयर और सॉफ्टवेयर समाधान', en: 'Hardware and software solutions' },
    svcAmc: { hi: 'एएमसी', en: 'AMC' },
    svcAmcDesc: { hi: 'वार्षिक रखरखाव कॉन्ट्रैक्ट', en: 'Annual Maintenance Contract' },
    bookService: { hi: 'सर्विस बुक करें', en: 'Book Service' },
    chatWhatsapp: { hi: 'WhatsApp पर बात करें', en: 'Chat on WhatsApp' },

    contactTitle: { hi: 'कॉन्टैक्ट – Vijay Electronics', en: 'Contact – Vijay Electronics' },
    contactHeading: { hi: 'कॉन्टैक्ट फॉर्म', en: 'Contact Form' },
    labelName: { hi: 'नाम', en: 'Name' },
    labelPhone: { hi: 'मोबाइल', en: 'Phone' },
    labelEmail: { hi: 'ईमेल', en: 'Email' },
    labelService: { hi: 'सेवा', en: 'Service' },
    optCctv: { hi: 'सीसीटीवी', en: 'CCTV' },
    optLed: { hi: 'एलईडी टीवी', en: 'LED TV' },
    optLaptop: { hi: 'लैपटॉप/डेस्कटॉप', en: 'Laptop/Desktop' },
    optAmc: { hi: 'एएमसी', en: 'AMC' },
    labelMessage: { hi: 'मैसेज', en: 'Message' },
    submitBtn: { hi: 'सबमिट', en: 'Submit' },
    whatsappBtn: { hi: 'WhatsApp पर भेजें', en: 'Send on WhatsApp' }
  }

  function applyTranslations(){
    var nodes = document.querySelectorAll('[data-i18n]')
    nodes.forEach(function(el){
      var key = el.getAttribute('data-i18n')
      var entry = t[key]
      if (!entry) return
      el.textContent = entry[lang] || ''
      if (el.tagName === 'TITLE') document.title = entry[lang]
    })
  }

  function toggleTheme(){
    theme = theme === 'light' ? 'dark' : 'light'
    html.setAttribute('data-theme', theme)
    localStorage.setItem(themeKey, theme)
  }

  function toggleLang(){
    lang = lang === 'hi' ? 'en' : 'hi'
    html.setAttribute('lang', lang)
    localStorage.setItem(langKey, lang)
    applyTranslations()
  }

  var langBtn = document.getElementById('langToggle')
  var themeBtn = document.getElementById('themeToggle')
  if (langBtn) langBtn.addEventListener('click', toggleLang)
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme)
  applyTranslations()

  var slider = document.getElementById('slider')
  if (slider){
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.slide'))
    var i = 0
    setInterval(function(){
      slides[i].classList.remove('active')
      i = (i + 1) % slides.length
      slides[i].classList.add('active')
    }, 4000)
  }

  var contactForm = document.getElementById('contactForm')
  var statusEl = document.getElementById('formStatus')
  function buildWhatsAppMessage(data){
    var msg = 'Hello Vijay Electronics, I have an inquiry.'
    if (lang === 'hi') msg = 'नमस्ते विजय इलेक्ट्रॉनिक्स, मुझे सेवा चाहिए.'
    var parts = [msg, 'Name: ' + (data.get('name')||''), 'Phone: ' + (data.get('phone')||''), 'Service: ' + (data.get('service')||''), 'Message: ' + (data.get('message')||'')]
    return parts.join('\n')
  }
  function openWhatsApp(data){
    var text = encodeURIComponent(buildWhatsAppMessage(data))
    var url = 'https://wa.me/918090090051?text=' + text
    window.open(url, '_blank')
  }
  function submitToEmail(data){
    return fetch('https://formsubmit.co/ajax/vijayelectronic689@gmail.com', { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
  }
  if (contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault()
      var data = new FormData(contactForm)
      statusEl.textContent = lang === 'hi' ? 'सबमिट हो रहा है...' : 'Submitting...'
      submitToEmail(data).then(function(){
        statusEl.textContent = lang === 'hi' ? 'भेज दिया गया। धन्यवाद!' : 'Sent. Thank you!'
        openWhatsApp(data)
        contactForm.reset()
      }).catch(function(){
        statusEl.textContent = lang === 'hi' ? 'त्रुटि हुई, कृपया बाद में प्रयास करें।' : 'Error, please try later.'
      })
    })
    var waBtn = document.getElementById('whatsappBtn')
    if (waBtn){
      waBtn.addEventListener('click', function(){
        var data = new FormData(contactForm)
        openWhatsApp(data)
      })
    }
  }
})()
