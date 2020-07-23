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

}

new toggleDarkmode()
