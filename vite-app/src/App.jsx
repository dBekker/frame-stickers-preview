import React from 'react';
import { Btn, SecHead, LoopVideo, Photo, FIcon, Faq, Calc } from './ui.jsx';
import { PHONE, EMAIL, NAV, HERO_FACTS, CLIENTS, FEATURES, MATERIALS, USE_CASES, STEPS, APPLY_STEPS, SPECS, REVIEW } from './data.js';

const Logo = () => (
  <a className="logo" href="#top" aria-label="Фрейм">
    <span className="logo-mark" aria-hidden="true" />
    <span>фрейм</span>
    <small>UV DTF</small>
  </a>
);

export default function App() {
  const [menu, setMenu] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  return (
    <div className="fp" id="top">
      {/* HERO */}
      <section className="hero">
        <LoopVideo name="A" mobile eager className="hero-video" />
        <div className="hero-scrim" />

        <header className="hdr wrap">
          <Logo />
          <nav className="nav">
            {NAV.map(([t, id]) => <a key={id} href={'#' + id}>{t}</a>)}
          </nav>
          <div className="hdr-right">
            <a className="hdr-phone" href={'tel:' + PHONE.replace(/\s/g, '')}>{PHONE}</a>
            <Btn kind="light" size="sm" href="#contact">Запросить расчёт</Btn>
            <button className="burger" onClick={() => setMenu(!menu)} aria-label="Меню" aria-expanded={menu}><span /><span /><span /></button>
          </div>
          {menu && (
            <div className="mmenu" onClick={() => setMenu(false)}>
              {NAV.map(([t, id]) => <a key={id} href={'#' + id}>{t}</a>)}
              <a href={'tel:' + PHONE.replace(/\s/g, '')}>{PHONE}</a>
            </div>
          )}
        </header>

        <div className="hero-in wrap">
          <div className="label hero-label">UV DTF-печать · Пермь · доставка по России</div>
          <h1>Объёмные наклейки для мерча и&nbsp;брендирования</h1>
          <p className="hero-sub">Переносим логотип на готовые изделия из стекла, металла, дерева, текстиля и пластика. С рельефом, фольгой и точной вырубкой по контуру.</p>
          <div className="hero-cta">
            <Btn size="lg" href="#contact">Запросить расчёт</Btn>
            <Btn kind="ghost-light" size="lg" href="#materials">Смотреть образцы</Btn>
          </div>
          <dl className="facts">
            {HERO_FACTS.map(([v, k]) => <div key={k}><dt>{v}</dt><dd>{k}</dd></div>)}
          </dl>
        </div>
      </section>

      {/* КЛИЕНТЫ */}
      <section className="clients wrap" aria-label="Клиенты">
        <div className="label">Нам доверяют</div>
        <ul>{CLIENTS.map(c => <li key={c}>{c}</li>)}</ul>
      </section>

      {/* ТЕХНОЛОГИЯ */}
      <section className="sec wrap" id="tech">
        <div className="split">
          <figure className="media media-tall">
            <LoopVideo name="C" pos="38% 50%" />
            <figcaption>Золотая фольга на тканевой обложке</figcaption>
          </figure>
          <div>
            <SecHead label="Технология" title="UV DTF: печать, которая становится частью изделия"
              lead="Изображение печатается УФ-чернилами со слоем лака и переносится на поверхность без фона и подложки. Остаётся только сам логотип — объёмный и стойкий." />
            <div className="feat-grid">
              {FEATURES.map(f => (
                <div key={f.t} className="feat">
                  <FIcon name={f.ic} />
                  <h3>{f.t}</h3>
                  <p>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* МАТЕРИАЛЫ */}
      <section className="sec sec-dark wrap" id="materials">
        <SecHead light label="Материалы" title="Одна технология — любые поверхности"
          lead="Реальные изделия из нашей печати. Подберём параметры под ваш материал и сделаем тестовое нанесение на вашем образце." />
        <div className="mat-grid">
          <figure className="mat mat-wide">
            <LoopVideo name="D" />
            <figcaption><span>Экокожа</span>Блокнот, белый + цвет</figcaption>
          </figure>
          {MATERIALS.map(m => (
            <figure key={m.img} className="mat">
              <Photo img={m.img} alt={`${m.m}: ${m.t}`} pos={m.pos} />
              <figcaption><span>{m.m}</span>{m.t}</figcaption>
            </figure>
          ))}
          <div className="mat mat-cta">
            <h3>Нет вашего материала?</h3>
            <p>Пришлите изделие — сделаем пробное нанесение и покажем результат до запуска тиража.</p>
            <Btn kind="light" href="#contact">Заказать тест</Btn>
          </div>
        </div>
      </section>

      {/* ПРИМЕНЕНИЕ */}
      <section className="sec wrap" id="use">
        <SecHead label="Применение" title="Где это работает"
          lead="Брендируем готовые изделия малыми и средними тиражами — без минимальной партии и долгого производства." />
        <div className="use-grid">
          {USE_CASES.map(u => (
            <article key={u.t} className="use">
              <div className="use-img"><Photo img={u.img} alt={u.t} pos={u.pos} /></div>
              <div className="use-body">
                <div className="label">{u.tag}</div>
                <h3>{u.t}</h3>
                <ul>{u.items.map(it => <li key={it}>{it}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ПРОЦЕСС */}
      <section className="sec sec-tint wrap" id="process">
        <div className="split split-rev">
          <div>
            <SecHead label="Процесс" title="От заявки до готового тиража" />
            <ol className="steps">
              {STEPS.map(s => (
                <li key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div><h3>{s.t}</h3><p>{s.d}</p></div>
                </li>
              ))}
            </ol>
            <Btn kind="dark" href="#contact">Обсудить проект</Btn>
          </div>
          <figure className="media">
            <LoopVideo name="B" />
            <figcaption>Перенос на металл, стекло и экокожу</figcaption>
          </figure>
        </div>

        <div className="apply">
          <div className="apply-head">
            <div className="label">Нанесение</div>
            <p>Наклейки приходят на монтажной плёнке. Нанести можно самостоятельно за минуту — или мы сделаем это сами.</p>
          </div>
          {APPLY_STEPS.map((a, i) => (
            <figure key={a.img}>
              <Photo img={a.img} alt={a.t} />
              <figcaption><span>{i + 1}</span>{a.t}</figcaption>
            </figure>
          ))}
        </div>

        <div className="specs">
          <div className="label">Параметры и требования к макету</div>
          <dl>
            {SPECS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </div>
      </section>

      {/* РАСЧЁТ */}
      <section className="sec wrap" id="calc">
        <div className="split split-calc">
          <div>
            <SecHead label="Расчёт" title="Оцените бюджет заранее"
              lead="Калькулятор показывает ориентировочную стоимость печати. Минимальная сумма заказа — 1 500 ₽." />
            <dl className="plain">
              <div><dt>Ширина</dt><dd>до 27,5 см</dd></div>
              <div><dt>Длина</dt><dd>любая</dd></div>
              <div><dt>Лак</dt><dd>матовый / глянцевый</dd></div>
              <div><dt>Фольга</dt><dd>золото, серебро, голографика</dd></div>
            </dl>
          </div>
          <Calc />
        </div>
      </section>

      {/* ОТЗЫВ */}
      <section className="sec sec-dark wrap">
        <figure className="review">
          <div className="label">Отзыв клиента</div>
          <blockquote>«{REVIEW.text}»</blockquote>
          <figcaption><strong>{REVIEW.name}</strong>{REVIEW.role}</figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="sec wrap" id="faq">
        <div className="split split-faq">
          <SecHead label="FAQ" title="Частые вопросы" lead="Не нашли ответ — напишите, ответим в течение рабочего дня." />
          <Faq />
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="sec sec-tint wrap" id="contact">
        <div className="split split-form">
          <div>
            <SecHead label="Заявка" title="Рассчитаем ваш проект за 20 минут"
              lead="Опишите задачу или приложите макет. Менеджер уточнит детали, пришлёт расчёт и сроки." />
            <ul className="contact-list">
              <li><span className="label">Телефон</span><a href={'tel:' + PHONE.replace(/\s/g, '')}>{PHONE}</a></li>
              <li><span className="label">Почта</span><a href={'mailto:' + EMAIL}>{EMAIL}</a></li>
              <li><span className="label">Адрес</span>Пермь, бульвар Гагарина, 86 Б, 2 этаж</li>
            </ul>
          </div>
          <form className="form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
            <label><span className="label">Имя</span><input name="name" required autoComplete="name" /></label>
            <label><span className="label">Компания</span><input name="company" autoComplete="organization" /></label>
            <label><span className="label">Телефон или почта</span><input name="contact" required /></label>
            <label><span className="label">Задача</span><textarea name="task" rows="3" placeholder="Изделие, тираж, сроки" /></label>
            <Btn type="submit" full size="lg">Отправить заявку</Btn>
            {sent
              ? <p className="form-note ok">Форма пока не подключена к обработчику — заявка не отправлена.</p>
              : <p className="form-note">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot wrap">
        <div className="foot-grid">
          <div>
            <Logo />
            <p>Рекламное производство. Печатаем на всём.</p>
          </div>
          <div><div className="label">Контакты</div><p>{PHONE}<br />{EMAIL}</p></div>
          <div><div className="label">Адрес</div><p>Пермь, бульвар Гагарина, 86 Б,<br />2 этаж</p></div>
          <div><div className="label">Режим работы</div><p>Пн–Пт 9:00–19:00<br />Сб 10:00–16:00</p></div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} Фрейм</span>
          <a href="#top">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}
