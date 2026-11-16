import React from 'react';

// ---- Tokens ----
export const LT = {
  ink: '#0d0d0d', paper: '#fafaf7', line: '#e2ded4', lineDk: '#0d0d0d',
  mute: '#8a857c', hot: '#FF1F8F', cyan: '#5BC4D1', cyanInk: '#0d3a40',
};

// ---- Buttons ----
export const Btn = ({ children, kind = 'primary', size = 'md', onClick, full }) => {
  const pad = size === 'lg' ? '18px 34px' : size === 'sm' ? '10px 18px' : '15px 28px';
  const fs = size === 'lg' ? 16 : size === 'sm' ? 13 : 14;
  const base = {
    border: 'none', cursor: 'pointer', padding: pad, fontSize: fs, fontWeight: 700,
    letterSpacing: '-.01em', borderRadius: 999, fontFamily: 'Inter,sans-serif',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    width: full ? '100%' : 'auto', transition: 'transform .15s, box-shadow .15s',
  };
  const kinds = {
    primary: { background: LT.hot, color: '#fff' },
    dark: { background: LT.ink, color: '#fff' },
    cyan: { background: LT.cyan, color: LT.cyanInk },
    ghost: { background: 'transparent', color: 'currentColor', border: '1.5px solid currentColor' },
    ghostLight: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.35)' },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...kinds[kind] }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>{children} <span style={{ fontSize: '1.05em' }}>→</span></button>
  );
};

export const Chip = ({ children, tone = 'ink' }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999,
    fontSize: 13, fontWeight: 600, fontFamily: 'JetBrains Mono, monospace',
    border: tone === 'light' ? '1px solid rgba(255,255,255,.25)' : '1px solid ' + LT.ink,
    color: tone === 'light' ? '#fff' : LT.ink,
  }}>{children}</span>
);

export const Eyebrow = ({ num, children, accent = LT.hot, light }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: accent, fontWeight: 500 }}>{num}</span>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: light ? 'rgba(255,255,255,.6)' : LT.mute }}>{children}</span>
    <span style={{ flex: 1, height: 1, background: light ? 'rgba(255,255,255,.15)' : LT.line }} />
  </div>
);

export const Marquee = ({ items, bg = LT.hot, color = '#fff', big, sep = '✦' }) => (
  <div style={{ padding: big ? '22px 0' : '16px 0', background: bg, color, overflow: 'hidden' }}>
    <div className="marq-track" style={{ fontSize: big ? 34 : 18, fontWeight: big ? 800 : 600, letterSpacing: '-.01em' }}>
      {Array.from({ length: 2 }).map((_, k) => (
        <div key={k} style={{ display: 'flex', gap: 28, alignItems: 'center', paddingRight: 28 }}>
          {items.map((it, i) => (<React.Fragment key={i}><span>{it}</span><span style={{ opacity: .45 }}>{sep}</span></React.Fragment>))}
        </div>
      ))}
    </div>
  </div>
);

// ---- Feature icon (line glyphs) ----
export const FIcon = ({ name, color = LT.hot }) => {
  const common = { width: 32, height: 32, viewBox: '0 0 32 32', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    water: <><path d="M16 4C16 4 7 14 7 20a9 9 0 0 0 18 0c0-6-9-16-9-16Z" /><path d="M12 20a4 4 0 0 0 4 4" /></>,
    shield: <><path d="M16 4l10 4v6c0 7-4.5 11-10 14C10.5 25 6 21 6 14V8l10-4Z" /><path d="M12 15l3 3 5-6" /></>,
    grip: <><rect x="7" y="7" width="18" height="18" rx="3" /><path d="M12 12v8M16 12v8M20 12v8" /></>,
    relief: <><path d="M4 20l8-8 6 6 10-10" /><path d="M4 26l8-8 6 6 10-10" opacity=".5" /></>,
    color: <><circle cx="16" cy="16" r="11" /><path d="M16 5a11 11 0 0 1 0 22 5.5 5.5 0 0 1 0-11 2.75 2.75 0 0 0 0-5.5Z" fill={color} stroke="none" /></>,
    crown: <><path d="M5 22h22M6 22l-2-12 7 5 5-9 5 9 7-5-2 12" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
};

// ---- Data ----
export const FEATURES = [
  { ic: 'water', t: 'Водостойкость', d: 'мойте, трите — наклейка не повредится' },
  { ic: 'shield', t: 'Устойчивость', d: 'не царапаются, не выгорают на солнце' },
  { ic: 'grip', t: 'Адгезия', d: 'держится годами без отслаивания' },
  { ic: 'relief', t: 'Объём', d: 'приятный рельеф, тактильный контакт повышает ценность продукта' },
  { ic: 'color', t: 'Полный цвет + фольга', d: 'яркие цвета, металлик, матовый/глянцевый лак' },
  { ic: 'crown', t: 'Премиум-эффект', d: 'запоминается, повышает уровень восприятия бренда' },
];

export const GALLERY = [
  { img: 'CHEKHOL ZAMSHA', t: 'Чехол телефона (замша)', d: 'логотип компании' },
  { img: 'TERMOKRUZHKA', t: 'Термокружка', d: 'брендирование для конференции' },
  { img: 'GORSHOK KERAMIKA', t: 'Горшок для цветов', d: 'керамика, индивидуальный дизайн' },
  { img: 'RAMKA DEREVO', t: 'Деревянная рамка', d: 'тактильный элемент декора' },
  { img: 'FLESHKA METALL', t: 'Металлическая флешка', d: 'корпоративный мерч' },
  { img: 'AVTO RAMKA', t: 'Автомобильная рамка', d: 'антивандальность' },
  { img: 'STEKLO OFIS', t: 'Стеклянная перегородка', d: 'прозрачная основа' },
];

export const AUDIENCE = [
  { tag: 'B2B · РЕКЛАМА', t: 'Маркетологам и\u00a0агентствам', items: ['Корпоративный мерч с премиальным тактильным эффектом', 'Сувенирка под задачи клиента', 'Короткий срок печати'], img: 'MERCH KORPORATIV' },
  { tag: 'DESIGN', t: 'Дизайнерам и\u00a0бренд-менеджерам', items: ['Любая форма, векторная точность', 'Полная цветопередача + ламинация глянец/мат', 'Нестандартные макеты: тонкие линии, QR-коды, мелкий текст'], img: 'VECTOR PRECISION' },
  { tag: 'EVENTS · DECOR', t: 'Организаторам и\u00a0декораторам', items: ['Персонализация подарков, фото-зон, указателей', 'Декор интерьера: зеркала, мебель', 'Монтаж временный или постоянный — снимается без следа'], img: 'EVENT DECOR' },
];

export const STEPS = [
  { n: '01', t: 'Заявка', d: 'Присылаете макет, техзадание или просто идею.' },
  { n: '02', t: 'Согласование', d: 'Расчёт за 20 минут. Подбираем материал, размер, финишную обработку.' },
  { n: '03', t: 'Печать и отгрузка', d: 'Готовность от 1 дня. Забираете в Перми или отправляем СДЭКом по РФ.' },
];

export const FAQS = [
  { q: 'Можно заказать 1 наклейку?', a: 'Да. Минимальной партии нет.' },
  { q: 'Какой максимальный размер?', a: 'Ширина — 27,5 см. Длина — любая.' },
  { q: 'Есть ли золотая/серебряная фольга?', a: 'Да. Любой цвет, металлик, голографика.' },
  { q: 'Срок печати?', a: 'От 1 дня под rush-заказ. Стандарт — 2–3 дня.' },
  { q: 'Вы работаете только с Пермью?', a: 'Печать в Перми, отправка — в любой регион РФ через СДЭК.' },
  { q: 'Мой дизайн подойдёт?', a: 'Да. Принимаем AI, EPS, PDF, PNG с прозрачностью. Сами подберём траекторию обрезки.' },
  { q: 'Будет ли образец перед тиражом?', a: 'Да. Печатаем один макет на утверждение.' },
];

// ---- FAQ accordion ----
export const Faq = ({ mobile }) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: '1px solid ' + LT.line }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              padding: mobile ? '18px 0' : '24px 0', fontFamily: 'Inter,sans-serif',
            }}>
              <span style={{ fontSize: mobile ? 16 : 21, fontWeight: 600, color: LT.ink, letterSpacing: '-.01em' }}>{f.q}</span>
              <span style={{
                flexShrink: 0, width: 30, height: 30, borderRadius: 15, border: '1.5px solid ' + LT.ink,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                background: isOpen ? LT.hot : 'transparent', color: isOpen ? '#fff' : LT.ink, borderColor: isOpen ? LT.hot : LT.ink,
                transition: 'all .2s',
              }}>{isOpen ? '−' : '+'}</span>
            </button>
            <div style={{ maxHeight: isOpen ? 200 : 0, overflow: 'hidden', transition: 'max-height .3s ease, opacity .25s', opacity: isOpen ? 1 : 0 }}>
              <div style={{ paddingBottom: mobile ? 18 : 24, fontSize: mobile ? 14 : 16, color: LT.mute, lineHeight: 1.5, maxWidth: 620 }}>{f.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---- Tech-details popup ----
export const TechDetails = ({ onClose }) => (
  <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(13,13,13,.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
    <div onClick={e => e.stopPropagation()} style={{ background: LT.paper, maxWidth: 560, width: '100%', padding: '40px 40px 36px', position: 'relative', borderRadius: 24 }}>
      <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, width: 34, height: 34, borderRadius: 17, border: '1px solid ' + LT.line, background: '#fff', cursor: 'pointer', fontSize: 18, color: LT.mute }}>×</button>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '.16em', color: LT.hot, textTransform: 'uppercase', marginBottom: 10 }}>Технические подробности</div>
      <h3 style={{ fontSize: 26, fontWeight: 700, margin: '0 0 24px', letterSpacing: '-.02em' }}>Что мы поддерживаем</h3>
      {[
        { t: 'Поддерживаемые форматы', d: 'AI, EPS, PDF, CDR, PNG (300 dpi)' },
        { t: 'Форма наклейки', d: 'вырубка по контуру / прямоугольник / капля' },
        { t: 'Поверхности монтажа', d: 'стекло, пластик, металл, дерево, керамика, ткань, кожа' },
        { t: 'Снятие', d: 'не оставляет следов на гладких поверхностях' },
      ].map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, padding: '14px 0', borderTop: '1px solid ' + LT.line }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: LT.ink }}>{r.t}</div>
          <div style={{ fontSize: 14, color: LT.mute, lineHeight: 1.45 }}>{r.d}</div>
        </div>
      ))}
    </div>
  </div>
);

// ---- Live calculator ----
export function calcPrice(w, l, lam, sheets) {
  const area = w * l;
  const lamMult = lam === 'глянцевая' ? 1.25 : lam === 'матовая' ? 1.18 : 1.0;
  const perSheet = area * 7.5 * lamMult;
  const raw = perSheet * sheets;
  return Math.max(1500, Math.round(raw / 10) * 10);
}

export const Calc = ({ mobile }) => {
  const [w, setW] = React.useState(20);
  const [l, setL] = React.useState(10);
  const [lam, setLam] = React.useState('матовая');
  const [sheets, setSheets] = React.useState(1);
  const total = calcPrice(w, l, lam, sheets);

  const Slider = ({ label, val, set, min, max, step = 0.5, unit }) => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.6)', letterSpacing: '.06em', textTransform: 'uppercase' }}>{label}</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>{val}<span style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginLeft: 4 }}>{unit}</span></span>
      </div>
      <input type="range" min={min} max={max} step={step} value={val} onChange={e => set(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: LT.hot, height: 4, cursor: 'pointer' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 6 }}>
        <span>{min}</span><span>{max}</span>
      </div>
    </div>
  );

  return (
    <div style={{ background: LT.ink, color: '#fff', padding: mobile ? 22 : 40, borderRadius: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 22 : 28, marginBottom: 28 }}>
        <Slider label="Ширина" val={w} set={setW} min={3} max={27.5} unit="см" />
        <Slider label="Длина" val={l} set={setL} min={3} max={100} step={1} unit="см" />
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.6)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>Ламинация</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {['без', 'матовая', 'глянцевая'].map(o => (
            <button key={o} onClick={() => setLam(o)} style={{
              padding: '11px 8px', border: '1px solid ' + (lam === o ? LT.hot : 'rgba(255,255,255,.18)'),
              background: lam === o ? LT.hot : 'transparent', color: '#fff', fontSize: 13, fontWeight: 600,
              cursor: 'pointer', borderRadius: 6, fontFamily: 'Inter,sans-serif', textTransform: 'capitalize',
            }}>{o}</button>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.6)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 10 }}>Количество листов</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setSheets(Math.max(1, sheets - 1))} style={{ width: 42, height: 42, borderRadius: 21, border: '1px solid rgba(255,255,255,.2)', background: 'transparent', color: '#fff', fontSize: 22, cursor: 'pointer' }}>−</button>
          <span style={{ fontSize: 26, fontWeight: 700, minWidth: 50, textAlign: 'center' }}>{sheets}</span>
          <button onClick={() => setSheets(Math.min(100, sheets + 1))} style={{ width: 42, height: 42, borderRadius: 21, border: '1px solid rgba(255,255,255,.2)', background: 'transparent', color: '#fff', fontSize: 22, cursor: 'pointer' }}>+</button>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Итого</span>
          <span style={{ fontSize: mobile ? 40 : 52, fontWeight: 800, color: LT.hot, letterSpacing: '-.02em', lineHeight: 1 }}>{total.toLocaleString('ru-RU')} ₽</span>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>
          Ш{w} + Д{l} + Ламинация {lam} + {sheets}шт
        </div>
        <Btn kind="primary" full>Отправить заявку с этими параметрами</Btn>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginTop: 14, lineHeight: 1.5 }}>
          Минимальный заказ 1\u00a0500 ₽ · цена за шт от 250 ₽ в зависимости от размера и покрытия
        </div>
      </div>
    </div>
  );
};
