import React from 'react';
import { StickerLips, StickerCircle, StickerStar, VideoFrame } from './stickers.jsx';
import { Btn, Chip, Eyebrow, Marquee, FIcon, FEATURES, GALLERY, AUDIENCE, STEPS, Calc, Faq, TechDetails } from './ui.jsx';

function useIsMobile(bp = 980) {
  const [m, setM] = React.useState(typeof window !== 'undefined' ? window.innerWidth < bp : false);
  React.useEffect(() => {
    const on = () => setM(window.innerWidth < bp);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

export default function App() {
  const [tech, setTech] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const isMobile = useIsMobile(980);

  const tints = ['#fff1f8', '#eefafc', '#fff8ec'];
  const rots = [-1.5, 1, -0.5, 1.2, -1, 0.6];

  return (
    <div className="fp">
      {tech && <TechDetails onClose={() => setTech(false)} />}

      {/* HERO */}
      <section className="hero">
        <div className="hero-video"><VideoFrame label="ПРОЦЕСС ПЕЧАТИ → НАКЛЕЙКА НА ПАЛЬЦАХ → МОНТАЖ → ФИНАЛ" /></div>
        <div className="hero-scrim" />

        <header className="hdr">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 800, fontSize: 22, letterSpacing: '-.02em', color: '#fff' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, border: '2.5px solid #fff', borderRadius: 9, transform: 'rotate(-6deg)' }}>
                <span style={{ width: 10, height: 10, background: 'var(--hot)', borderRadius: 3 }} />
              </span>
              фрейм
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', letterSpacing: '.12em', borderLeft: '1px solid rgba(255,255,255,.25)', paddingLeft: 12 }}>UV DTF ПЕЧАТЬ</span>
          </div>
          <nav className="nav" style={{ color: 'rgba(255,255,255,.85)' }}>
            {['Технология', 'Галерея', 'Для кого', 'Как работаем', 'Калькулятор', 'FAQ', 'Клиенты'].map(n => <span key={n} style={{ cursor: 'pointer' }}>{n}</span>)}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className="hdr-phone" style={{ color: '#fff' }}>+7 342 206 43 26</span>
            <span className="hdr-cta"><Btn kind="cyan" size="sm">Заказать звонок</Btn></span>
            <button className="burger" onClick={() => setMenu(!menu)}><span /><span /><span /></button>
          </div>
          {menu && (
            <div className="mmenu">
              {['Технология', 'Галерея', 'Для кого', 'Как работаем', 'Калькулятор', 'FAQ', 'Клиенты'].map(n => <div key={n}>{n}</div>)}
              <div className="mono" style={{ borderBottom: 'none', marginTop: 8 }}>+7 342 206 43 26</div>
            </div>
          )}
        </header>

        <div className="stickwrap">
          <div className="fa" style={{ position: 'absolute', top: '24%', right: '9%' }}><StickerLips size={isMobile ? 56 : 92} /></div>
          {!isMobile && <div className="fb" style={{ position: 'absolute', top: '40%', right: '6%' }}><StickerCircle size={72} label="UV DTF" /></div>}
          <div className="fa" style={{ position: 'absolute', bottom: '30%', right: '18%' }}><StickerStar size={isMobile ? 40 : 58} color="#5BC4D1" /></div>
        </div>

        <div className="hero-in">
          <div style={{ display: 'flex', gap: 10, marginBottom: 'clamp(14px,2vw,24px)', flexWrap: 'wrap' }}>
            <Chip tone="light">UV DTF · ОБЪЁМ ДО 0,5 ММ</Chip>
            <Chip tone="light">ПЕРМЬ · СДЭК ПО РФ</Chip>
          </div>
          <h1>Объёмные УФ-ДТФ<br /><span style={{ color: 'var(--hot)' }}>наклейки</span> <span className="it">на заказ</span></h1>
          <div className="hero-row">
            <div>
              <p className="hero-sub">Крепятся к чему угодно. Не выцветают. Не отклеиваются.</p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,.7)', margin: 0, maxWidth: 520, lineHeight: 1.5 }}>Современная технология объёмной тактильной печати.</p>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 28, flexWrap: 'wrap' }}>
                <Btn kind="primary" size="lg">Заказать</Btn>
                <Btn kind="ghostLight" size="lg">Рассчитать стоимость</Btn>
              </div>
            </div>
            <div className="hero-stats">
              <div><div className="num">от 1 500 ₽</div><div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 2 }}>минимальный заказ</div></div>
              <div style={{ width: 1, background: 'rgba(255,255,255,.2)' }} />
              <div><div className="num">от 1 дня</div><div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 2 }}>срок изготовления</div></div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={['объёмные наклейки до 0,5 мм', 'полная цветопередача', 'защита от воды и солнца', 'любая форма и дизайн', 'доставка по всей России']} />

      {/* ТЕХНОЛОГИЯ */}
      <section className="sec wrap">
        <Eyebrow num="01">Технология</Eyebrow>
        <h2 className="h" style={{ maxWidth: 900, marginBottom: 'clamp(28px,4vw,52px)' }}>
          UV DTF — печать стойких полноцветных наклеек для <span style={{ color: 'var(--hot)' }}>любых поверхностей</span>
        </h2>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="peel" style={{ background: tints[i % 3], padding: 'clamp(20px,2.4vw,34px) clamp(16px,2vw,30px)', minHeight: 190, borderRadius: 22, border: '1.5px solid var(--ink)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 18, transform: `rotate(${rots[i]}deg)` }}>
              <div style={{ width: 52, height: 52, borderRadius: 15, background: '#fff', border: '1.5px solid var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FIcon name={f.ic} color={i % 2 ? '#5BC4D1' : '#FF1F8F'} />
              </div>
              <div>
                <div style={{ fontSize: 'clamp(17px,1.6vw,21px)', fontWeight: 700, letterSpacing: '-.01em', marginBottom: 7 }}>{f.t}</div>
                <div style={{ fontSize: 14, color: 'var(--mute)', lineHeight: 1.45 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}><Btn kind="dark" size="lg">Обсудить проект</Btn></div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="sec wrap" style={{ background: 'var(--ink)', color: '#fff' }}>
        <Eyebrow num="02" light>Галерея образцов</Eyebrow>
        <h2 className="h" style={{ marginBottom: 'clamp(24px,3vw,40px)' }}>Более <span style={{ color: 'var(--cyan)' }}>500</span> готовых работ</h2>
        <div className="gal-grid">
          {[
            { ...GALLERY[0], col: 'span 5', row: 'span 2', mcol: 'span 2' },
            { ...GALLERY[1], col: 'span 4', row: 'span 2' },
            { ...GALLERY[2], col: 'span 3' },
            { ...GALLERY[4], col: 'span 3' },
            { ...GALLERY[3], col: 'span 4' },
            { ...GALLERY[5], col: 'span 4' },
            { ...GALLERY[6], col: 'span 4' },
          ].map((g, i) => (
            <div key={i} className="ph dark peel" style={{ gridColumn: isMobile ? (g.mcol || 'span 1') : g.col, gridRow: isMobile ? 'span 1' : (g.row || 'span 1'), position: 'relative', alignItems: 'flex-end', justifyContent: 'flex-start', padding: 0, borderRadius: 20, overflow: 'hidden', border: 'none' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: .5, fontSize: 11 }}>{g.img}</div>
              <div style={{ position: 'relative', padding: 14, background: 'linear-gradient(transparent, rgba(0,0,0,.75))', width: '100%' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{g.t}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)' }}>{g.d}</div>
              </div>
              {i === 0 && <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2 }}><StickerLips size={46} /></div>}
              {i === 3 && <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}><StickerStar size={38} color="#5BC4D1" /></div>}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}><Btn kind="cyan" size="lg">Запросить образец</Btn></div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="sec wrap">
        <Eyebrow num="03">Для кого это</Eyebrow>
        <h2 className="h" style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>Три типа задач, одна <span style={{ fontStyle: 'italic', fontWeight: 400 }}>технология</span></h2>
        <div className="aud-grid">
          {AUDIENCE.map((a, i) => (
            <div key={i} className="peel" style={{ border: '1.5px solid var(--ink)', background: 'var(--paper)', display: 'flex', flexDirection: 'column', borderRadius: 24, overflow: 'hidden', transform: `rotate(${[-1, 0.8, -0.6][i]}deg)` }}>
              <div className="ph" style={{ aspectRatio: '3/2', border: 'none' }}>{a.img}</div>
              <div style={{ padding: '26px 26px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--hot)', letterSpacing: '.12em', marginBottom: 12 }}>{a.tag}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 18px', letterSpacing: '-.01em', lineHeight: 1.1 }}>{a.t}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {a.items.map((it, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#3a3a3a', lineHeight: 1.4 }}>
                      <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 3, background: 'var(--hot)', marginTop: 7 }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}><Btn kind="dark" size="lg">Рассчитать стоимость</Btn></div>
      </section>

      {/* КАК РАБОТАЕМ */}
      <section className="sec wrap" style={{ background: 'var(--cyan)', color: 'var(--cyanInk)' }}>
        <Eyebrow num="04" accent="#0d3a40">Как мы работаем</Eyebrow>
        <h2 className="h" style={{ marginBottom: 'clamp(28px,4vw,52px)' }}>Как выглядит ваша работа с нами</h2>
        <div className="step-grid" style={{ marginBottom: 40 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ background: 'var(--paper)', padding: '32px 28px', borderRadius: 22, transform: `rotate(${[-1.2, 0.8, -0.6][i]}deg)` }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 22, background: 'var(--hot)', color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: 15, fontWeight: 700, marginBottom: 18 }}>{s.n}</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-.02em' }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: 'var(--mute)', margin: 0, lineHeight: 1.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap', background: 'var(--cyanInk)', color: '#fff', padding: '24px 30px', borderRadius: 18 }}>
          <div style={{ display: 'flex', gap: 'clamp(16px,3vw,32px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15 }}><span style={{ color: 'var(--cyan)', fontSize: 18 }}>✓</span> Предлагаем монтаж под ключ</div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15 }}><span style={{ color: 'var(--cyan)', fontSize: 18 }}>✓</span> Сделаем дизайн, если нет готового макета</div>
          </div>
          <button onClick={() => setTech(true)} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,.4)', color: '#fff', padding: '12px 22px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter,sans-serif', whiteSpace: 'nowrap' }}>Технические подробности →</button>
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section className="sec wrap">
        <Eyebrow num="05">Калькулятор</Eyebrow>
        <div className="calc-grid">
          <div>
            <h2 className="h" style={{ marginBottom: 24 }}>Посчитайте заказ <span style={{ color: 'var(--hot)', fontStyle: 'italic', fontWeight: 400 }}>сами</span></h2>
            <p className="lead" style={{ marginBottom: 24, maxWidth: 380 }}>Минимальный заказ — 1 500 ₽. Размеры: любая длина, ширина до 27,5 см. Цена за штуку от 250 ₽ в зависимости от размера и покрытия.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Ширина', 'до 27,5 см'], ['Длина', 'любая'], ['Ламинация', 'мат / глянец / без'], ['Фольга', 'золото, серебро, голографика']].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--line)', paddingBottom: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{r[0]}</span>
                  <span className="mono" style={{ fontSize: 14, color: 'var(--mute)' }}>{r[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <Calc mobile={isMobile} />
        </div>
      </section>

      {/* FAQ */}
      <section className="sec wrap">
        <Eyebrow num="06">Частые вопросы</Eyebrow>
        <div className="faq-grid">
          <h2 className="h">Коротко о главном</h2>
          <Faq mobile={isMobile} />
        </div>
      </section>

      {/* КЛИЕНТЫ */}
      <section className="sec wrap" style={{ background: 'var(--ink)', color: '#fff', paddingBottom: 'clamp(40px,5vw,70px)' }}>
        <Eyebrow num="07" light>Клиенты и отзывы</Eyebrow>
        <h2 className="h" style={{ marginBottom: 'clamp(28px,4vw,48px)', maxWidth: 780, fontSize: 'clamp(26px,4vw,48px)' }}>Компании, которые выбрали объёмные наклейки для своего бренда</h2>
        <div className="cta-grid" style={{ marginBottom: 'clamp(28px,4vw,56px)' }}>
          <div>
            <div style={{ fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.4, letterSpacing: '-.01em', marginBottom: 24 }}>
              «Заказывали тактильные наклейки для брендирования блокнотов на конференцию. Объёмный логотип смотрелся привлекательно, клиенты реально тянулись руками. Все блокноты участники забрали себе — обычно много оставалось. Рекомендуем как типографию с высоким качеством».
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 23, background: 'var(--hot)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>Мария</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>руководитель отдела маркетинга, Эсквайр (ресторанный холдинг)</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Btn kind="primary" size="lg">Отправить заявку на расчёт</Btn></div>
        </div>
      </section>
      <Marquee bg="#fafaf7" color="#0d0d0d" big items={['САЯ', 'Оперный театр', 'Автомое', 'Эпоха', 'Сатурн-Р', 'Пермглавснаб', 'Груз-сервис', 'Скейтинг', 'ДМШ']} sep="·" />

      {/* ФИНАЛ CTA */}
      <section className="sec wrap" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="fa" style={{ position: 'absolute', top: 60, right: '9%', zIndex: 1 }}><StickerLips size={isMobile ? 70 : 110} /></div>
        {!isMobile && <div className="fb" style={{ position: 'absolute', bottom: 80, right: '24%', zIndex: 1 }}><StickerStar size={64} color="#5BC4D1" /></div>}
        <div className="cta-grid" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <h2 className="h" style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: .92 }}>У вас остались вопросы? <span style={{ color: 'var(--hot)' }}>Мы ответим!</span></h2>
            <p className="lead" style={{ fontSize: 'clamp(15px,1.6vw,18px)', marginTop: 20, maxWidth: 440 }}>Наш менеджер перезвонит вам и проконсультирует по любым вопросам.</p>
          </div>
          <div style={{ background: 'var(--paper)', border: '1.5px solid var(--ink)', padding: 'clamp(22px,3vw,36px)', borderRadius: 24 }}>
            {[['Ваше имя', 'Имя'], ['Номер телефона', '+7 ___ ___-__-__']].map((f, i) => (
              <div key={i} style={{ marginBottom: 22 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>{f[0]}</div>
                <div style={{ borderBottom: '1.5px solid var(--ink)', height: 34, color: 'var(--mute)', fontSize: 15, display: 'flex', alignItems: 'center' }}>{f[1]}</div>
              </div>
            ))}
            <Btn kind="primary" full>Отправить заявку на консультацию</Btn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 'clamp(36px,5vw,48px) max(clamp(18px,4vw,56px), calc((100% - 1320px) / 2)) 36px', background: 'var(--ink)', color: '#fff' }}>
        <div className="foot-grid" style={{ paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,.12)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 800, fontSize: 22, marginBottom: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, border: '2.5px solid #fff', borderRadius: 8, transform: 'rotate(-6deg)' }}><span style={{ width: 10, height: 10, background: 'var(--hot)', borderRadius: 3 }} /></span>
              фрейм
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, maxWidth: 240 }}>Пермь, бульвар Гагарина, 86 Б, 2 этаж</div>
          </div>
          {[['Контакты', '+7 342 206 43 26\nhello@frameprint.ru'], ['Соцсети', 'Telegram\nВКонтакте\nWhatsApp'], ['Режим работы', 'Пн–Пт 9:00–19:00\nСб 10:00–16:00']].map((c, i) => (
            <div key={i}>
              <div className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 14 }}>{c[0]}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{c[1]}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingTop: 20, fontSize: 12, color: 'rgba(255,255,255,.4)', flexWrap: 'wrap' }}>
          <span>© 2025 Фрейм · UV DTF печать</span>
          <span className="mono">stiker.frameprint.ru</span>
          <span style={{ cursor: 'pointer' }}>Политика конфиденциальности</span>
        </div>
      </footer>
    </div>
  );
}
