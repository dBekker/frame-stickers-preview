import React from 'react';
import { FAQS, calcPrice } from './data.js';

export const Btn = ({ children, kind = 'primary', size, href, type, full, onClick }) => {
  const cls = `btn btn-${kind}${size ? ' btn-' + size : ''}${full ? ' btn-full' : ''}`;
  if (href) return <a className={cls} href={href}>{children}</a>;
  return <button className={cls} type={type || 'button'} onClick={onClick}>{children}</button>;
};

export const SecHead = ({ label, title, lead, light }) => (
  <div className={'sec-head' + (light ? ' light' : '')}>
    <div className="label">{label}</div>
    <h2>{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

// Зацикленное видео без звука: играет только в зоне видимости,
// при prefers-reduced-motion остаётся постером.
export const LoopVideo = ({ name, mobile, eager, className, pos }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    }, { threshold: 0.15 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  const base = `/video/hero${name}`;
  return (
    <video ref={ref} className={className} muted loop playsInline preload={eager ? 'auto' : 'none'}
      poster={`${base}_poster_1920x1080.jpg`} style={pos ? { objectPosition: pos } : undefined}>
      {mobile && <source src={`${base}_720x1280.webm`} type="video/webm" media="(max-aspect-ratio: 3/4)" />}
      {mobile && <source src={`${base}_720x1280.mp4`} type="video/mp4" media="(max-aspect-ratio: 3/4)" />}
      <source src={`${base}_1920x1080.webm`} type="video/webm" />
      <source src={`${base}_1920x1080.mp4`} type="video/mp4" />
    </video>
  );
};

export const Photo = ({ img, alt, pos }) => (
  <img src={`/img/${img}.jpg`} alt={alt} loading="lazy" decoding="async" style={pos ? { objectPosition: pos } : undefined} />
);

export const FIcon = ({ name }) => {
  const paths = {
    water: <><path d="M16 4s-9 10-9 16a9 9 0 0 0 18 0c0-6-9-16-9-16Z" /><path d="M12 20a4 4 0 0 0 4 4" /></>,
    shield: <><path d="M16 4l10 4v6c0 7-4.5 11-10 14C10.500 25 6 21 6 14V8l10-4Z" /><path d="M12 15l3 3 5-6" /></>,
    grip: <><rect x="6" y="6" width="20" height="20" rx="3" /><path d="M11 16h10M16 11v10" /></>,
    relief: <><path d="M4 22h6l3-8h6l3 8h6" /><path d="M4 27h24" opacity=".45" /></>,
    color: <><circle cx="12" cy="13" r="7" /><circle cx="20" cy="13" r="7" /><circle cx="16" cy="20" r="7" /></>,
    cut: <><circle cx="9" cy="23" r="3.5" /><circle cx="23" cy="23" r="3.5" /><path d="M11.500 20.500 24 5M20.500 20.500 8 5" /></>,
  };
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

export const Faq = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="faq">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={'faq-item' + (isOpen ? ' open' : '')}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span>{f.q}</span>
              <span className="faq-sign" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="faq-body"><p>{f.a}</p></div>
          </div>
        );
      })}
    </div>
  );
};

const Slider = ({ label, val, set, min, max, step = 0.5, unit }) => (
  <label className="slider">
    <span className="slider-top">
      <span className="label">{label}</span>
      <span className="slider-val">{val}<small>{unit}</small></span>
    </span>
    <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(parseFloat(e.target.value))} />
    <span className="slider-range"><span>{min}</span><span>{max}</span></span>
  </label>
);

export const Calc = () => {
  const [w, setW] = React.useState(20);
  const [l, setL] = React.useState(10);
  const [lam, setLam] = React.useState('матовый');
  const [sheets, setSheets] = React.useState(1);
  const total = calcPrice(w, l, lam, sheets);
  return (
    <div className="calc">
      <div className="calc-sliders">
        <Slider label="Ширина" val={w} set={setW} min={3} max={27.5} unit="см" />
        <Slider label="Длина" val={l} set={setL} min={3} max={100} step={1} unit="см" />
      </div>
      <div className="calc-row">
        <div className="label">Лак</div>
        <div className="seg">
          {['без лака', 'матовый', 'глянцевый'].map(o => (
            <button key={o} className={lam === o ? 'on' : ''} onClick={() => setLam(o)}>{o}</button>
          ))}
        </div>
      </div>
      <div className="calc-row">
        <div className="label">Количество листов</div>
        <div className="qty">
          <button onClick={() => setSheets(Math.max(1, sheets - 1))} aria-label="Меньше">−</button>
          <span>{sheets}</span>
          <button onClick={() => setSheets(Math.min(100, sheets + 1))} aria-label="Больше">+</button>
        </div>
      </div>
      <div className="calc-total">
        <div>
          <div className="label">Ориентировочно</div>
          <div className="calc-sum">{total.toLocaleString('ru-RU')} ₽</div>
        </div>
        <Btn href="#contact">Отправить на расчёт</Btn>
      </div>
      <p className="calc-note">{w} × {l} см · {lam} · {sheets} л. Точную стоимость подтвердит менеджер после проверки макета.</p>
    </div>
  );
};
