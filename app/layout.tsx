import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Flex } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto_Flex({ 
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Orbitta Digital | Criamos aplicativos para infoprodutores',
  description: 'Transforme seu infoproduto em um aplicativo. Aumente os resultados dos seus alunos e crie uma nova receita recorrente para seu negócio.',
  keywords: 'infoproduto, aplicativo, desenvolvimento, software, infoprodutor',
  openGraph: {
    title: 'Orbitta Digital | Criamos aplicativos para infoprodutores',
    description: 'Transforme seu infoproduto em um aplicativo. Aumente os resultados dos seus alunos e crie uma nova receita recorrente para seu negócio.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://orbitta.digital',
    images: [
      {
        url: 'https://orbitta.digital/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Orbitta Digital Logo',
      }
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-[#131313] text-[#f1f1f1]" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NQL6VWBT');
            `
          }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F2Z0ZMXQKE"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2Z0ZMXQKE');
            `
          }}
        />

        {/* Hotjar Tracking Code */}
        <Script
          id="hotjar-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5317689,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1039284119994871');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1039284119994871&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${roboto.variable}`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQL6VWBT"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {children}
        
        {/* Neurolead Script */}
        <Script
          id="neurolead-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,b,c,d){
                try{
                  var e=b.head||b.getElementsByTagName("head")[0];
                  var f=b.createElement("script");
                  f.setAttribute("src",c);
                  f.setAttribute("charset","UTF-8");
                  f.defer=true;
                  a.neuroleadId=d;
                  e.appendChild(f)
                }catch(g){}
              })(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js","AmByeCy4Vb2d9r5bb7HyhadXe");
            `
          }}
        />
      </body>
    </html>
  );
}