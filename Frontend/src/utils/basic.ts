export function basic() {
  (window as Window & { basic_script?: boolean }).basic_script = true;

  function attachEvent(
    selector: string | NodeListOf<Element> | Element[] ,
    event: string,
    fn: (e: Event, elem: Element) => void
  ): void {
    const matches =
      typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList
        ? Array.from(selector)
        : selector;

    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.addEventListener(event, (e) => fn(e, elem), false);
      });
    }
  }

  const onLoad = (): void => {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = false;  // Cambié a false para evitar que el evento se dispare demasiado rápido.

    attachEvent('#header nav', 'click', () => {
      const header = document.getElementById('header');
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      header?.classList.remove('h-screen', 'expanded', 'bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    attachEvent('[data-aw-toggle-menu]', 'click', (_, elem) => {
      elem.classList.toggle('expanded');
      document.body.classList.toggle('overflow-hidden');
      const header = document.getElementById('header');
      header?.classList.toggle('h-screen');
      header?.classList.toggle('expanded');
      header?.classList.toggle('bg-page');
      document.querySelector('#header nav')?.classList.toggle('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');
    });

    const screenSize = window.matchMedia('(max-width: 767px)');
    screenSize.addEventListener('change', () => {
      const header = document.getElementById('header');
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      header?.classList.remove('h-screen', 'expanded', 'bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    const applyHeaderStylesOnScroll = (): void => {
      const header = document.getElementById('header');
      if (!header) return;

      // Si el desplazamiento es mayor a 60px, añade la clase scroll
      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
        header.classList.add('scroll');
      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
        header.classList.remove('scroll');
      }
      ticking = false;  // Reestablecer ticking
    };

    // Aplica el estilo en el primer load
    applyHeaderStylesOnScroll();

    // Evento de scroll de la ventana
    window.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          applyHeaderStylesOnScroll();
        });
        ticking = true;  // Marcar como que está "en proceso" para optimizar
      }
    });
  };

  const onPageShow = (): void => {
    document.documentElement.classList.add('motion-safe:scroll-smooth');
    const elem = document.querySelector('[data-aw-toggle-menu]');
    if (elem) {
      elem.classList.remove('expanded');
    }
    document.body.classList.remove('overflow-hidden');
    const header = document.getElementById('header');
    header?.classList.remove('h-screen', 'expanded');
    document.querySelector('#header nav')?.classList.add('hidden');
  };

  window.onload = onLoad;
  window.onpageshow = onPageShow;

  document.addEventListener('astro:after-swap', () => {
    onLoad();
    onPageShow();
  });

  const Observer = {
    observer: null as IntersectionObserver | null,
    delayBetweenAnimations: 100,
    animationCounter: 0,

    start(): void {
      const selectors = [
        '[class*=" intersect:"]',
        '[class*=":intersect:"]',
        '[class^="intersect:"]',
        '[class="intersect"]',
        '[class*=" intersect "]',
        '[class^="intersect "]',
        '[class$=" intersect"]',
      ];

      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors.join(',')));

      const getThreshold = (element: HTMLElement): number => {
        if (element.classList.contains('intersect-full')) return 0.99;
        if (element.classList.contains('intersect-half')) return 0.5;
        if (element.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      elements.forEach((el) => {
        el.setAttribute('no-intersect', '');
        (el as HTMLElement & { _intersectionThreshold: number })._intersectionThreshold = getThreshold(el);
      });

      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            const target = entry.target as HTMLElement & { _intersectionThreshold?: number };
            const intersectionRatio = entry.intersectionRatio;
            const threshold = target._intersectionThreshold || 0;

            if (target.classList.contains('intersect-no-queue')) {
              if (entry.isIntersecting) {
                target.removeAttribute('no-intersect');
                if (target.classList.contains('intersect-once')) {
                  this.observer?.unobserve(target);
                }
              } else {
                target.setAttribute('no-intersect', '');
              }
              return;
            }

            if (intersectionRatio >= threshold) {
              if (!target.hasAttribute('data-animated')) {
                target.removeAttribute('no-intersect');
                target.setAttribute('data-animated', 'true');

                const delay = this.animationCounter * this.delayBetweenAnimations;
                this.animationCounter++;

                target.style.transitionDelay = `${delay}ms`;
                target.style.animationDelay = `${delay}ms`;

                if (target.classList.contains('intersect-once')) {
                  this.observer?.unobserve(target);
                }
              }
            } else {
              target.setAttribute('no-intersect', '');
              target.removeAttribute('data-animated');
              target.style.transitionDelay = '';
              target.style.animationDelay = '';

              this.animationCounter = 0;
            }
          });
        });
      };

      this.observer = new IntersectionObserver(callback.bind(this), { threshold: [0, 0.25, 0.5, 0.99] });

      elements.forEach((el) => {
        this.observer?.observe(el);
      });
    },
  };

  Observer.start();

  document.addEventListener('astro:after-swap', () => {
    Observer.start();
  });
}
