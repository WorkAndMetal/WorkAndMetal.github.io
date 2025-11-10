import Link from "next/link";
import { ArrowRight, Building2, Hand, ShieldCheck } from "lucide-react";
import { ContactCard } from "@/components/contact-card";

const team = [
  {
    name: "Mustafa Cesur Timuçin",
    email: "cesur@renovagayrimenkul.com",
    phone: "+90 541 712 26 13",
    description: "Portföy yönetimi ve yatırım danışmanlığı alanında uzman, süreç boyunca tüm aşamalarda yanınızda."
  },
  {
    name: "Mehmet Fatih Öztürk",
    email: "fatih@renovagayrimenkul.com",
    phone: "+90 533 217 86 36",
    description: "Satış ve kiralama işlemlerinde çözüm odaklı yaklaşım ile ihtiyaçlarınıza uygun seçenekler sunar."
  }
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Güven Önceliğimiz",
    description: "Şeffaf süreçler, doğru değerleme ve güncel piyasa bilgileriyle riskleri azaltıyor, kararları rahatlatıyoruz."
  },
  {
    icon: Building2,
    title: "Seçkin Portföy",
    description: "İstanbul ve çevresinde özenle seçtiğimiz konut, ticari ve yatırım fırsatlarını tek platformda topluyoruz."
  },
  {
    icon: Hand,
    title: "Sonuç Odaklı Hizmet",
    description: "İlk görüşmeden tapu teslimine kadar ihtiyaç odaklı, çözüm sağlayan adımlarla süreci sizin için yönetiyoruz."
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-6 py-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
          <div className="md:w-7/12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Renova Gayrimenkul</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              İstanbul&apos;da güvenilir emlak danışmanlığı ve seçili portföyler
            </h1>
            <p className="mt-6 text-base text-brand-50 md:text-lg">
              Renova Gayrimenkul olarak, sizin için doğru taşınmazı bulma sürecine değer katıyoruz. Deneyimli ekibimiz
              ile piyasanın dinamiklerini takip ediyor, süreç boyunca şeffaf iletişim kuruyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://renovagayrimenkulsisli.sahibinden.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-sm transition hover:bg-brand-100"
              >
                İlanlara Git
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="#iletisim"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ekibimizle Tanışın
              </Link>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">Neden Renova?</p>
              <ul className="mt-6 space-y-4 text-sm text-brand-50">
                <li>• Güncel piyasa analizi ile hızlı sonuçlar</li>
                <li>• Her portföy için detaylı ön değerlendirme</li>
                <li>• Tapu ve resmi süreçlerde profesyonel rehberlik</li>
              </ul>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-xs text-brand-50">
                Renova Gayrimenkul, müşterilerine güvenilir, şeffaf ve sonuç odaklı bir hizmet sunmak için kuruldu. Önce
                ihtiyaçları dinler, sonra çözüm geliştiririz.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="hakkimizda">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="section-title">Danışmanlığın her adımında yanınızdayız</h2>
            <p className="section-subtitle">
              Portföylerimizi değerli kılan; doğru analiz, sürdürülebilir ilişkiler ve sahadaki güçlü iş ağımızdır. Renova
              ile her işlem, planlı ve kontrol edilebilir bir sürece dönüşür.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
              >
                <item.icon className="h-10 w-10 text-brand-600" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20" id="yaklasim">
        <div className="mx-auto max-w-5xl text-white">
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Doğru taşınmaz, doğru süreç</h2>
              <p className="mt-4 text-base text-slate-200 md:text-lg">
                Renova Gayrimenkul, güvenilir portföylerden oluşan seçkimizi sahibinden.com üzerinden yayınlar. İlanlarımıza
                göz atmak için yönlendirme bağlantısını takip edebilir, detaylar için bizimle iletişime geçebilirsiniz.
              </p>
              <p className="mt-6 text-sm text-slate-300">
                Saha ekiplerimizle birlikte çalışarak portföyleri yerinde inceler, gerekli belgeleri hazırlar ve tüm süreci
                şeffaf şekilde yönetiriz. Banka kredi süreçleri, ekspertiz ve hukuki danışmanlık gibi kritik adımlarda da
                çözüm ortaklarımızla birlikte yanınızdayız.
              </p>
              <div className="mt-8">
                <Link
                  href="https://renovagayrimenkulsisli.sahibinden.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-400"
                >
                  Sahibinden Profilimiz
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-100">
              <h3 className="text-2xl font-semibold text-white">Nasıl çalışıyoruz?</h3>
              <ol className="space-y-4">
                <li>
                  <span className="font-semibold text-brand-200">1. İhtiyaç Analizi</span>
                  <p className="mt-1 text-slate-200">
                    Hedeflerinizi, bütçenizi ve zaman planınızı dinleyerek doğru stratejiyi belirliyoruz.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-brand-200">2. Portföy Seçimi</span>
                  <p className="mt-1 text-slate-200">Filtrelenmiş portföyler arasından en uygun alternatifleri birlikte değerlendiriyoruz.</p>
                </li>
                <li>
                  <span className="font-semibold text-brand-200">3. Resmi Süreç Yönetimi</span>
                  <p className="mt-1 text-slate-200">
                    Tekliften tapu teslimine kadar tüm belgeler, randevular ve resmi işlemleri organize ediyoruz.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="iletisim">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="section-title">Uzmanlarımızla iletişime geçin</h2>
            <p className="section-subtitle">
              İlk görüşme için bize e-posta gönderebilir veya sahibinden.com üzerinden randevu talep edebilirsiniz. En kısa
              sürede geri dönüş sağlarız.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {team.map((person) => (
              <ContactCard
                key={person.email}
                name={person.name}
                email={person.email}
                phone={person.phone}
                description={person.description}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-sm text-slate-500">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Renova Gayrimenkul. Tüm hakları saklıdır.</p>
          <Link
            href="https://renovagayrimenkul.com"
            className="font-medium text-slate-600 transition hover:text-brand-600"
          >
            renovagayrimenkul.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
