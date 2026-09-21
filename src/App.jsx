import { Children, cloneElement, isValidElement, useEffect, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = {
  id: [['Cara kerja', 'how-it-works'], ['Untuk perusahaan', 'employers'], ['Dampak kami', 'impact']],
  en: [['How it works', 'how-it-works'], ['For employers', 'employers'], ['Our impact', 'impact']],
}

const english = {
  'Kesejahteraan finansial untuk semua': 'Financial wellbeing, built for everyone',
  'Gajimu.': 'Your money.',
  'Waktumu.': 'Your moment.',
  'Berikan karyawan akses ke gaji yang sudah mereka peroleh—kapan pun dibutuhkan. Tanpa biaya bagi perusahaan, dengan rasa tenang yang berarti bagi tim.': 'Give your people access to the pay they’ve already earned—whenever they need it. Zero cost to employers, priceless peace of mind for teams.',
  'Hadirkan GetPaid di perusahaan': 'Bring GetPaid to your team',
  'Lihat cara kerjanya': 'See how it works',
  '60+ perusahaan': '60+ enterprises',
  'telah mengutamakan kesejahteraan karyawan': 'already putting people first',
  'BUKAN PINJAMAN': 'NO LOANS',
  'TANPA BUNGA': 'NO INTEREST',
  'GAJIMU, KAPAN PUN DIBUTUHKAN': 'YOUR PAY, WHEN YOU NEED IT',
  'TANPA BIAYA BAGI PERUSAHAAN': 'ZERO COST TO EMPLOYERS',
  'Kebutuhan tidak menunggu': 'Life doesn’t wait',
  'tanggal gajian.': 'for payday.',
  'Pengeluaran tak terduga dapat memicu tekanan finansial. Siklus gaji tradisional belum berubah, sementara cara kita hidup dan bekerja terus berkembang.': 'Unexpected costs can create very real stress. Traditional salary cycles haven’t changed, but the way people live and work has.',
  'Cara lama': 'The old way',
  'Karyawan harus menunggu berminggu-minggu untuk menerima upah yang sudah diperoleh, dan sering beralih ke kredit mahal untuk menutup kebutuhan.': 'Employees wait weeks for money they’ve already earned, often turning to expensive credit just to bridge the gap.',
  'Tekanan finansial': 'Financial stress',
  'Tinggi': 'High',
  'Cara GetPaid': 'The GetPaid way',
  'Karyawan dapat melihat upah yang sudah diperoleh dan memilih kapan mengaksesnya—mudah, pribadi, dan tanpa menambah utang.': 'Employees see what they’ve earned and choose when to access it—simply, privately and without taking on debt.',
  'Kendali finansial': 'Financial control',
  'Gajian, kini lebih fleksibel.': 'Payday, reimagined.',
  'GetPaid terintegrasi dengan sistem payroll Anda. Tanpa gangguan dan tanpa menambah pekerjaan.': 'GetPaid fits around your existing payroll. No disruption, no added workload.',
  'hari kerja': 'days worked',
  'Bekerja seperti biasa': 'Work as usual',
  'Karyawan terus memperoleh upah setiap hari. GetPaid mencatat akumulasi upah dengan aman.': 'Employees continue earning every day. GetPaid securely tracks accrued wages.',
  'Dapat diakses': 'Available now',
  'Rp4,2 jt': '$420',
  'Lihat gaji terkumpul': 'See what’s earned',
  'Tampilan real-time menunjukkan jumlah gaji yang sudah dapat diakses.': 'A clear, real-time view shows how much pay is available to access.',
  'Cair dalam hitungan menit': 'Access in moments',
  'Pilih nominal dan terima langsung. Satu biaya tetap, tanpa biaya tersembunyi.': 'Choose an amount and receive it directly. One flat fee, no hidden surprises.',
  'Jelajahi GetPaid untuk perusahaan': 'Explore GetPaid for business',
  'Mengapa GetPaid': 'Why GetPaid',
  'Baik untuk karyawan.': 'Good for people.',
  'Hebat untuk bisnis.': 'Great for business.',
  'Benefit yang benar-benar digunakan oleh tim—dan dapat diberikan tanpa biaya bagi perusahaan.': 'A benefit your team will genuinely use—and one that costs employers nothing to offer.',
  'Bukan pinjaman': 'Not a loan',
  'Tanpa bunga, tanpa denda, dan tanpa utang. Karyawan hanya mengakses upah yang sudah mereka hasilkan.': 'No interest, no late fees and no debt. Employees access only the wages they have already earned.',
  'Kapan pun dibutuhkan': 'On demand',
  'Permintaan diproses dalam hitungan menit, memberi karyawan jaring pengaman finansial yang bermartabat.': 'Requests are processed in moments, giving employees a dignified financial safety net when it matters.',
  'Kesejahteraan meningkat': 'Better wellbeing',
  'Kurangi tekanan finansial dan bangun tim yang lebih fokus, produktif, dan loyal.': 'Reduce financial stress and build a more focused, productive and loyal workforce.',
  'Dibangun untuk': 'Built for the',
  'dunia kerja.': 'working world.',
  'Dari tim yang sedang berkembang hingga perusahaan besar, GetPaid membantu bisnis menciptakan pengalaman kerja yang lebih baik.': 'From growing teams to large enterprises, GetPaid is helping businesses create a stronger employee experience.',
  'Klien perusahaan': 'Enterprise clients',
  'US$': '$',
  '18 jt': '18m',
  'Gaji yang dikelola': 'Salaries under management',
  'Saya bisa menangani tagihan tak terduga tanpa berutang atau menunggu sampai akhir bulan.': 'I can handle unexpected bills without borrowing or waiting until the end of the month.',
  'Staf Administrasi': 'Admin Executive',
  'GetPaid memberi saya jaring pengaman yang praktis. Keuangan lebih terkendali dan saya lebih tenang saat bekerja.': 'GetPaid gave me a simple safety net. I feel more in control of my finances and less stressed at work.',
  'Staf Pemasaran': 'Marketing Executive',
  'Gajian kapan saja': 'Your pay, on your time',
  'Siap membuat hari gajian': 'Ready to make payday',
  'jadi lebih baik?': 'work better?',
  'Mari ciptakan tenaga kerja yang lebih percaya diri secara finansial, fokus, dan termotivasi—bersama.': 'Let’s create a more financially confident, focused and motivated workforce—together.',
  'Bicara dengan tim kami': 'Talk to our team',
  'Kesejahteraan finansial untuk semua melalui akses gaji fleksibel.': 'Financial wellbeing for all, through earned wage access.',
  'Jelajahi': 'Explore',
  'Dapatkan kabar terbaru': 'Stay in the loop',
  '© 2026 GetPaid. Hak cipta dilindungi.': '© 2026 GetPaid. All rights reserved.',
  'Privasi · Ketentuan': 'Privacy · Terms',
}

function translateTree(node, language) {
  if (language === 'id') return node
  if (typeof node === 'string') {
    const trimmed = node.trim()
    return trimmed && english[trimmed] ? node.replace(trimmed, english[trimmed]) : node
  }
  if (Array.isArray(node)) return node.map((child) => translateTree(child, language))
  if (!isValidElement(node) || !node.props.children) return node
  return cloneElement(node, {}, Children.map(node.props.children, (child) => translateTree(child, language)))
}

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Bukan pinjaman',
    text: 'Tanpa bunga, tanpa denda, dan tanpa utang. Karyawan hanya mengakses upah yang sudah mereka hasilkan.',
    tone: 'mint',
  },
  {
    icon: Clock3,
    title: 'Kapan pun dibutuhkan',
    text: 'Permintaan diproses dalam hitungan menit, memberi karyawan jaring pengaman finansial yang bermartabat.',
    tone: 'peach',
  },
  {
    icon: HeartHandshake,
    title: 'Kesejahteraan meningkat',
    text: 'Kurangi tekanan finansial dan bangun tim yang lebih fokus, produktif, dan loyal.',
    tone: 'lilac',
  },
]

const testimonials = [
  {
    quote: 'Saya bisa menangani tagihan tak terduga tanpa berutang atau menunggu sampai akhir bulan.',
    name: 'Anne',
    role: 'Staf Administrasi',
    initials: 'AN',
  },
  {
    quote: 'GetPaid memberi saya jaring pengaman yang praktis. Keuangan lebih terkendali dan saya lebih tenang saat bekerja.',
    name: 'John',
    role: 'Staf Pemasaran',
    initials: 'JO',
  },
]

function Brand({ light = false, language = 'id' }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label={language === 'id' ? 'Beranda GetPaid' : 'GetPaid home'}>
      <span className="brand-mark"><i /><i /><i /></span>
      <span>get<span>paid</span></span>
    </a>
  )
}

function Header({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="nav-shell">
        <Brand language={language} />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label={language === 'id' ? 'Navigasi utama' : 'Main navigation'}>
          {navItems[language].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="language-selector">
            <Globe2 size={15} aria-hidden="true" />
            <label className="sr-only" htmlFor="language">{language === 'id' ? 'Pilih bahasa' : 'Choose language'}</label>
            <select id="language" value={language} onChange={(event) => onLanguageChange(event.target.value)}>
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </div>
          <a className="button button-small mobile-cta" href="#connect" onClick={() => setOpen(false)}>{language === 'id' ? 'Hubungi kami' : 'Get connected'}</a>
        </nav>
        <a className="button button-small desktop-cta" href="#connect">{language === 'id' ? 'Hubungi kami' : 'Get connected'} <ArrowRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={language === 'id' ? 'Buka atau tutup menu' : 'Toggle menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function PayCard({ language }) {
  const isIndonesian = language === 'id'
  return (
    <div className="hero-visual" aria-label={isIndonesian ? 'Pratinjau aplikasi akses gaji GetPaid' : 'GetPaid wage access app preview'}>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="float-pill float-left"><Sparkles size={15} /> {isIndonesian ? 'Tanpa bunga' : 'Zero interest'}</div>
      <div className="float-pill float-right"><Check size={15} /> {isIndonesian ? 'Cair dalam menit' : 'Ready in minutes'}</div>
      <div className="phone">
        <div className="phone-top"><span /><span /></div>
        <div className="phone-content">
          <div className="phone-greeting"><span>{isIndonesian ? 'Selamat pagi, Maya' : 'Good morning, Maya'}</span><i>MP</i></div>
          <p>{isIndonesian ? 'Gaji yang dapat diakses' : 'Available to withdraw'}</p>
          <h3>{isIndonesian ? 'Rp4.200.000' : '$420.00'}</h3>
          <div className="progress"><span /></div>
          <div className="progress-meta"><span>{isIndonesian ? 'Sudah diperoleh' : 'Earned so far'}</span><strong>{isIndonesian ? '12 dari 20 hari' : '12 of 20 days'}</strong></div>
          <button>{isIndonesian ? 'Akses gaji saya' : 'Access my pay'} <ArrowRight size={16} /></button>
          <div className="mini-panel">
            <div className="mini-icon"><Banknote size={18} /></div>
            <div><span>{isIndonesian ? 'Gajian berikutnya' : 'Next payday'}</span><strong>28 September</strong></div>
            <span>{isIndonesian ? '8 hari' : '8 days'}</span>
          </div>
        </div>
      </div>
      <div className="payday-badge"><span>{isIndonesian ? 'TANGGAL' : 'PAY'}</span><strong>{isIndonesian ? 'GAJIAN' : 'DAY'}</strong><i>28</i></div>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('getpaid-language') || 'id')

  useEffect(() => {
    localStorage.setItem('getpaid-language', language)
    document.documentElement.lang = language
    document.title = language === 'id' ? 'GetPaid — Gajian kapan saja' : 'GetPaid — Your pay, on your time'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      language === 'id'
        ? 'GetPaid memberi karyawan akses fleksibel ke gaji yang sudah mereka peroleh — tanpa biaya bagi perusahaan.'
        : 'GetPaid gives employees flexible access to wages they have already earned — at zero cost to employers.',
    )
  }, [language])

  const page = (
    <>
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <section className="hero" id="top">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Kesejahteraan finansial untuk semua</div>
              <h1>Gajimu.<br /><em>Waktumu.</em></h1>
              <p className="hero-lead">Berikan karyawan akses ke gaji yang sudah mereka peroleh—kapan pun dibutuhkan. Tanpa biaya bagi perusahaan, dengan rasa tenang yang berarti bagi tim.</p>
              <div className="hero-actions">
                <a className="button" href="#connect">Hadirkan GetPaid di perusahaan <ArrowRight size={18} /></a>
                <a className="text-link" href="#how-it-works">Lihat cara kerjanya <span>↓</span></a>
              </div>
              <div className="hero-note"><span className="avatars"><i>AN</i><i>JO</i><i>+</i></span><strong>60+ perusahaan</strong> telah mengutamakan kesejahteraan karyawan</div>
            </div>
            <PayCard language={language} />
          </div>
          <div className="hero-ticker"><div>BUKAN PINJAMAN <i>✦</i> TANPA BUNGA <i>✦</i> GAJIMU, KAPAN PUN DIBUTUHKAN <i>✦</i> TANPA BIAYA BAGI PERUSAHAAN <i>✦</i></div></div>
        </section>

        <section className="problem-section section" id="employers">
          <div className="page-shell">
            <div className="section-heading split-heading">
              <div><h2>Kebutuhan tidak menunggu<br />tanggal gajian.</h2></div>
              <p>Pengeluaran tak terduga dapat memicu tekanan finansial. Siklus gaji tradisional belum berubah, sementara cara kita hidup dan bekerja terus berkembang.</p>
            </div>
            <div className="story-grid">
              <article className="story-card story-dark">
                <div className="story-icon"><Banknote /></div>
                <h3>Cara lama</h3>
                <p>Karyawan harus menunggu berminggu-minggu untuk menerima upah yang sudah diperoleh, dan sering beralih ke kredit mahal untuk menutup kebutuhan.</p>
                <div className="stress-meter"><span>Tekanan finansial</span><div><i /></div><strong>Tinggi</strong></div>
              </article>
              <div className="story-bridge"><ArrowRight /></div>
              <article className="story-card story-light">
                <div className="story-icon"><Sparkles /></div>
                <h3>Cara GetPaid</h3>
                <p>Karyawan dapat melihat upah yang sudah diperoleh dan memilih kapan mengaksesnya—mudah, pribadi, dan tanpa menambah utang.</p>
                <div className="stress-meter calm"><span>Kendali finansial</span><div><i /></div><strong>Tinggi</strong></div>
              </article>
            </div>
          </div>
        </section>

        <section className="steps-section section" id="how-it-works">
          <div className="page-shell">
            <div className="section-heading centered">
              <h2>Gajian, kini lebih fleksibel.</h2>
              <p>GetPaid terintegrasi dengan sistem payroll Anda. Tanpa gangguan dan tanpa menambah pekerjaan.</p>
            </div>
            <div className="steps">
              <article><span className="step-index">1</span><div className="step-visual calendar"><div className="cal-top"><i /><i /></div><strong>12</strong><span>hari kerja</span></div><h3>Bekerja seperti biasa</h3><p>Karyawan terus memperoleh upah setiap hari. GetPaid mencatat akumulasi upah dengan aman.</p></article>
              <article><span className="step-index">2</span><div className="step-visual amount"><span>Dapat diakses</span><strong>Rp4,2 jt</strong><div><i /></div></div><h3>Lihat gaji terkumpul</h3><p>Tampilan real-time menunjukkan jumlah gaji yang sudah dapat diakses.</p></article>
              <article><span className="step-index">3</span><div className="step-visual transfer"><i><Banknote /></i><span className="transfer-line" /><i><Check /></i></div><h3>Cair dalam hitungan menit</h3><p>Pilih nominal dan terima langsung. Satu biaya tetap, tanpa biaya tersembunyi.</p></article>
            </div>
            <div className="center-action"><a className="button button-dark" href="#connect">Jelajahi GetPaid untuk perusahaan <ArrowRight size={18} /></a></div>
          </div>
        </section>

        <section className="benefits-section section">
          <div className="page-shell benefits-shell">
            <div className="benefits-intro"><h2>Baik untuk karyawan.<br /><em>Hebat untuk bisnis.</em></h2><p>Benefit yang benar-benar digunakan oleh tim—dan dapat diberikan tanpa biaya bagi perusahaan.</p></div>
            <div className="benefit-list">
              {benefits.map(({ icon: Icon, title, text, tone }) => (
                <article key={title} className={`benefit ${tone}`}><div className="benefit-icon"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section section" id="impact">
          <div className="page-shell">
            <div className="section-heading split-heading impact-heading">
              <div><h2>Dibangun untuk<br />dunia kerja.</h2></div>
              <p>Dari tim yang sedang berkembang hingga perusahaan besar, GetPaid membantu bisnis menciptakan pengalaman kerja yang lebih baik.</p>
            </div>
            <div className="stats-grid">
              <div><strong>60<span>+</span></strong><p>Klien perusahaan</p></div>
              <div><strong><span>US$</span>18 jt</strong><p>Gaji yang dikelola</p></div>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item, i) => <article key={item.name}><div className="quote-mark">“</div><blockquote>{item.quote}</blockquote><footer><span className={`person person-${i}`}>{item.initials}</span><div><strong>{item.name}</strong><span>{item.role}</span></div></footer></article>)}
            </div>
          </div>
        </section>

        <section className="cta-section section" id="connect">
          <div className="page-shell cta-card">
            <div className="cta-orb" />
            <h2>Siap membuat hari gajian<br /><em>jadi lebih baik?</em></h2>
            <p>Mari ciptakan tenaga kerja yang lebih percaya diri secara finansial, fokus, dan termotivasi—bersama.</p>
            <a className="button button-light" href="mailto:admin@getpaid.id">Bicara dengan tim kami <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand"><Brand light language={language} /><p className="footer-company">PT Digital Gaji Asia</p><p>Kesejahteraan finansial untuk semua melalui akses gaji fleksibel.</p><a href="mailto:admin@getpaid.id">admin@getpaid.id</a></div>
          <div><h4>Jelajahi</h4>{navItems[language].slice(0, 3).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <div><h4>Dapatkan kabar terbaru</h4><form onSubmit={(e) => e.preventDefault()}><input type="email" aria-label={language === 'id' ? 'Alamat email' : 'Email address'} placeholder={language === 'id' ? 'Alamat email Anda' : 'Your email address'} /><button aria-label={language === 'id' ? 'Berlangganan' : 'Subscribe'}><ArrowRight size={17} /></button></form></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 GetPaid. Hak cipta dilindungi.</span><span>Privasi · Ketentuan</span></div>
      </footer>
    </>
  )

  return translateTree(page, language)
}

export default App
