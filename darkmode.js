class toggleDarkMode {
  constructor() {
    this.script = document.createElement('script');
    this.link = document.createElement('link');
    this.head = document.head;
    this.link.rel = 'stylesheet';
    this.link.type = 'text/css';
    this.link.href = 'style.css';
    this.script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/darkmode-js@1.5.6/lib/darkmode-js.min.js');
    this.head.appendChild(this.link);
    this.head.appendChild(this.script);
    this.addDark();
  }

  addDark() {
    const options = {
      bottom: '64px',
      right: 'unset',
      left: '32px',
      zIndex: '500'
    }
    const dark = new Darkmode(options);
    dark.showWidget();
    const wrap = document.createElement('div');
    wrap.classList.add('toggle');
    wrap.innerHTML = `<div class='theme-switch-wrapper'>
                        <label class='theme-switch' for='checkbox'>
                          <input id='checkbox' type='checkbox'>
                          <div class='slider round'></div>
                        </label>
                      </div>`;

  }

  runDark() {
    const toggleSwitch = document.querySelector("#checkbox");

    const switchTheme = () => {
      if (toggleSwitch.checked) {
        document.documentElement.setAttribute("data-theme", "dark-theme");
        
      } else {
        document.documentElement.setAttribute("data-theme", "light-theme");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);
  }
}

new toggleDarkmode()
