// Breath Animation Letter Splitting
const span = (text, index) => {
  const node = document.createElement("span");

  node.textContent = text;
  node.style.setProperty("--index", index);

  return node;
};

const byLetter = (text) => {
    let idx = 0;
    return text.split(' ').map((word) => {
        const wordWrap = document.createElement('span');
        wordWrap.className = 'wort';
        [...word].forEach(char => wordWrap.appendChild(span(char, idx++)));
        return wordWrap;
    });
};

const byWord = (text) => text.split(" ").map(span);

// Split text on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const splitTargets = document.querySelectorAll("[split-by]");

  splitTargets.forEach((node) => {
    const type = node.getAttribute("split-by");
    let nodes = null;

    if (type === "letter") nodes = byLetter(node.innerText);
    else if (type === "word") nodes = byWord(node.innerText);

    if (nodes && node.firstChild) {
      node.replaceChildren(...nodes);
    }
  });
});

// Create the observer
const observer = new IntersectionObserver(entries => {
      // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animation');
    }
  });
}/*, { threshold: 0.2 }*/);
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('#projekttitel'));
  observer.observe(document.querySelector('.boxen'));
  observer.observe(document.querySelector('#vitatitel'));
  observer.observe(document.querySelector('#vitabox'));



  /*window.onscroll = function() { scrollFunction(); };

  function scrollFunction() {
      var header = document.getElementById("header");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          // Box-Shadow hinzufügen
          header.style.boxShadow = "inset 20px 0 80px hsl(182, 76.20%, 32.90%), inset -20px 0 80px hsl(180, 100%, 50%), inset 20px 0 300px hsl(182, 76.20%, 32.90%), inset -20px 0 300px rgb(117, 99, 255), -10px 0 10px hsl(182, 76.20%, 32.90%), 10px 0 10px hsl(180, 100%, 50%) !important";
          // Hintergrundbild ändern
          header.style.background = "linear-gradient(180deg, hsl(182, 78.20%, 44.90%), hsl(210, 59.00%, 44.90%))  !important"; // Pfad zum neuen Bild
      } else {
          // Box-Shadow entfernen
          header.style.boxShadow = "inset 20px 0 80px rgb(149, 1, 255), inset -20px 0 80px hsl(180, 100%, 50%), inset 20px 0 300px rgb(144, 0, 255), inset -20px 0 300px rgb(117, 99, 255), -10px 0 10px rgb(149, 0, 255), 10px 0 10px hsl(180, 100%, 50%) !important";
          // Ursprüngliches Hintergrundbild wiederherstellen
          header.style.background = "linear-gradient(180deg, hsl(255, 80%, 51%), hsl(255, 59%, 45%))  !important"; // Pfad zum ursprünglichen Bild
      }
  }*/

/*
// Create the observer
const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
entries.forEach(entry => {
  // If the element is visible
  if (entry.isIntersecting) {
    // Add the animation class
    entry.target.classList.add('leuchten');
  }
});
}, { threshold: 0.2 });

// Tell the observer which elements to track
observer.observe(document.querySelector('#header'));*/


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const nav = document.getElementById('header');
      if (window.scrollY > 300) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const nav = document.getElementById('header');
      if (window.scrollY > 1200) {
        nav.classList.add('scrolled2');
      } else {
        nav.classList.remove('scrolled2');
      }
    });
  });

// Projektbox als klickbarer Link
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.projektbox').forEach(function(box) {
        const link = box.querySelector('.box-bild a');
        if (!link) return;
        box.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                window.open(link.href, '_blank');
            }
        });
    });
});

// Mobiles Dropdown-Menü
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown) return;

    dropdown.querySelector('p').addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('offen');
    });

    dropdown.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            dropdown.classList.remove('offen');
        });
    });

    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('offen');
        }
    });
});

// Suchfunktion
document.addEventListener('DOMContentLoaded', function() {
    const suchsymbol = document.getElementById('suchsymbol');
    const sucheingabe = document.getElementById('sucheingabe');
    const navSuche = document.getElementById('nav-suche');

    const suchListe = document.createElement('div');
    suchListe.id = 'such-liste';
    navSuche.appendChild(suchListe);

    const originalHTML = new Map();

    suchsymbol.addEventListener('click', function() {
        navSuche.classList.toggle('aktiv');
        if (navSuche.classList.contains('aktiv')) {
            sucheingabe.focus();
        } else {
            sucheingabe.value = '';
            resetSuche();
        }
    });

    sucheingabe.addEventListener('input', function() {
        const query = sucheingabe.value.toLowerCase().trim();
        if (query.length >= 2) {
            sucheAktualisieren(query);
        } else {
            resetSuche();
        }
    });

    sucheingabe.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navSuche.classList.remove('aktiv');
            sucheingabe.value = '';
            resetSuche();
        }
    });

    function sucheAktualisieren(query) {
        suchListe.innerHTML = '';
        entferneAlleMarkierungen();

        document.querySelectorAll('.box-wrapper').forEach(wrapper => {
            const texte = ['h3', 'h4', 'p'].map(sel => {
                const el = wrapper.querySelector(sel);
                return el ? el.textContent : '';
            }).join(' ').toLowerCase();

            if (!texte.includes(query)) return;

            const titel = wrapper.querySelector('h3');
            const item = document.createElement('div');
            item.classList.add('such-item');
            item.textContent = titel ? titel.textContent : '–';
            item.addEventListener('click', function() {
                wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
                markiereText(wrapper, query);
            });
            suchListe.appendChild(item);
        });

        if (suchListe.children.length === 0) {
            const leer = document.createElement('div');
            leer.classList.add('such-leer');
            leer.textContent = document.documentElement.lang === 'en' ? 'No results' : 'Keine Ergebnisse';
            suchListe.appendChild(leer);
        }
    }

    function markiereText(wrapper, query) {
        ['h3', 'p'].forEach(sel => {
            const el = wrapper.querySelector(sel);
            if (!el) return;
            if (!originalHTML.has(el)) originalHTML.set(el, el.innerHTML);
            const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            el.innerHTML = originalHTML.get(el).replace(
                new RegExp(`(${escaped})`, 'gi'),
                '<mark class="such-markierung">$1</mark>'
            );
        });
    }

    function entferneAlleMarkierungen() {
        originalHTML.forEach((html, el) => { el.innerHTML = html; });
        originalHTML.clear();
    }

    function resetSuche() {
        suchListe.innerHTML = '';
        entferneAlleMarkierungen();
    }
});