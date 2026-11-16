// Sticker SVGs + hero video placeholder frame.

export const StickerLips = ({ size = 60, color = '#FF1F8F' }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 60 42" style={{ display: 'block' }}>
    <path d="M5 18 Q15 5 30 14 Q45 5 55 18 Q50 32 30 30 Q10 32 5 18 Z" fill={color} stroke="#fff" strokeWidth="3" />
    <path d="M14 19 Q22 22 30 21 Q38 22 46 19 Q42 25 30 25 Q18 25 14 19 Z" fill="#000" opacity=".55" />
  </svg>
);

export const StickerCircle = ({ size = 60, color = '#5BC4D1', label = 'STICKER' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ display: 'block' }}>
    <circle cx="30" cy="30" r="26" fill={color} stroke="#fff" strokeWidth="3" />
    <text x="30" y="34" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0d3a40">{label}</text>
  </svg>
);

export const StickerStar = ({ size = 60, color = '#FF1F8F' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60">
    <path d="M30 4 L37 22 L56 24 L42 36 L46 55 L30 45 L14 55 L18 36 L4 24 L23 22 Z" fill={color} stroke="#fff" strokeWidth="3" />
  </svg>
);

export const VideoFrame = ({ label = 'HERO VIDEO · loop', dark = true, ratio }) => (
  <div className={'ph ' + (dark ? 'dark' : '')} style={{ position: 'relative', width: '100%', height: '100%', ...ratio }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <svg width="42" height="42" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 13 L30 21 L16 29 Z" fill="currentColor" />
      </svg>
      <div style={{ fontSize: 10, letterSpacing: '.1em' }}>{label}</div>
    </div>
    <div className="mono" style={{ position: 'absolute', top: 10, left: 10, fontSize: 9, opacity: .6 }}>● REC 00:12 / 00:24</div>
    <div className="mono" style={{ position: 'absolute', bottom: 10, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', fontSize: 9, opacity: .5 }}>
      <span>VERTICAL · 9:16 · LOOP</span><span>MUTED · AUTOPLAY</span>
    </div>
  </div>
);
