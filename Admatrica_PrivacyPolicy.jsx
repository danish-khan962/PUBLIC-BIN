import React from 'react'
import Image from 'next/image'
import admatrica_logo from "../../../public/logo.png"
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className='relative w-full flex justify-center items-center flex-col px-[16px] lg:px-[0px]'>

      <div className='flex flex-col w-full justify-center items-center'>
        <Link href={'/'}><Image src={admatrica_logo} alt='' width={1000} height={1000} className='w-[135.4px] h-[16px] mt-[72px] md:mt-[16px]' /></Link>
        <hr className='w-screen border-t-1 border-[#A49AC4]/50  mt-[21.5px] lg:hidden' />
      </div>

      <p className='text-[28px] leading-[32px] font-semibold text-center mt-[52px] md:text-[48px] md:leading-[54px] md:mt-[120px]'>Datenschutzerklärung</p>

      <div className='max-w-[788px] w-[100%]'>

        <div className='w-full flex flex-col mt-[52px] md:mt-[120px] gap-y-[15px] md:gap-y-[20px] lg:pl-[5px]'>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px]'>Durch die Nutzung der Website erklären Sie sich mit diesen Bestimmungen zum Datenschutz einverstanden. Betreiber der Website ist die ADMATRICA DIGITAL GmbH mit Sitz in Österreich, 9815 Reißeck, Zandlach 134.</p>

          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px]'> Diese Datenschutzerklärung gilt unabhängig davon von welchem Endgerät (z.B. PC, Tablet, Handy) die Website admatrica.at aufgerufen wird und in gleicher Weise für alle zugehörigen Websites, die von der ADMATRICA DIGITAL GmbH betrieben werden. <br /> Wir freuen uns über Ihr Interesse an der Nutzung unserer Website und der auf der Website angebotenen Leistungen und Dienste. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Der Zweck dieser Datenschutzerklärung besteht darin, Sie im Detail darüber zu informieren, wie wir mit Ihren Daten umgehen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, Datenschutz-Anpassungsgesetz 2018).
          </p>
        </div>

        {/* First section */}
        <div className='w-full flex flex-col mt-[32px] md:mt-[40px]'>
          <h2 className='text-[28px] leading-[32px] font-semibold text-left md:text-[40px] md:leading-[52px]'>1) Haftungsausschuss</h2>
          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Datenschutz</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>Alle auf dieser Website aufgenommenen persönlichen Daten dienen ausschließlich zur individuellen Beratung des jeweiligen Kunden. ADMATRICA DIGITAL GmbH versichert, dass alle damit im Zusammenhang angegebenen Daten gemäß der geltenden datenschutzrechtlichen Bestimmungen streng vertraulich behandelt werden.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Urheberrechte</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>Inhalt und Struktur dieser Website sind urheberrechtlich geschützt. Bezüglich jeglicher geistigen Eigentumsrechte wird keiner Person eine Lizenz oder ein sonstiges Recht eingeräumt. Die Vervielfältigung von Informationen oder Daten, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial ist nur für den persönlichen und informativen Gebrauch gestattet. Jede sonstige Vervielfältigung sowie jeder sonstige Gebrauch von Informationen oder Daten ist ausdrücklich untersagt und ist nur mit unserer vorherigen Zustimmung zulässig. Die Erstellung und Verwendung von Kopien der kompletten Internet-Präsentation in elektronischer oder ausgedruckter Form sind erlaubt, wenn der Inhalt (einschließlich der Angaben zu Autoren und Copyright) unverändert bleibt. Die Informationen werden von ADMATRICA DIGITAL GmbH bereitgestellt.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Verweise und Links</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>ADMATRICA DIGITAL GmbH übernimmt keinerlei Haftung für unrichtige wie fehlende Informationen auf der Website. Alle Entscheidungen, die auf der Website von ADMATRICA DIGITAL GmbH bereit gestellten Informationen beruhen, liegen einzig und alleine im Verantwortungsbereich des Benutzers. Ebenso lehnt ADMATRICA DIGITAL GmbH jegliche Haftung im Zusammenhang mit den zur Verfügung gestellten Beiträgen sowie jegliche Haftung für unmittelbare, konkrete oder Folgeschäden, oder sonstige Schäden jeglicher Art, die im Zusammenhang mit dem indirekten oder direkten Gebrauch der auf der Website www.admatrica.at bereit gestellten Informationen entstanden sind, ab. Gleiches gilt auch für alle anderen Websites, auf die mittels Hyperlink verwiesen wird. ADMATRICA DIGITAL GmbH ist für den Inhalt der Websites, die auf Grund einer solchen Verbindung erreicht werden, nicht verantwortlich.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Inhalte des Online-Angebots</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>Die auf der Website enthaltenen Texte und Abbildungen sind sehr sorgfältig zusammengestellt; die darin enthaltenen Angaben dienen dennoch lediglich der unverbindlichen Information der Kunden und basieren auf dem Wissensstand und der Markteinschätzung der mit der Erstellung dieser Informationen betrauten Mitarbeiter zum jeweiligen Zeitpunkt der Veröffentlichung. Die veröffentlichten Daten werden einer laufenden Aktualisierung unterzogen, ohne Gewähr für taggleiche Aktualität geben zu können (auch ohne Gewähr eventueller Eingabefehler). ADMATRICA DIGITAL GmbH behält sich das Recht auf Änderungen oder Ergänzungen der bereit gestellten Informationen vor.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Anwendbares Recht</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>ADMATRICA DIGITAL GmbH wurde nach österreichischem Recht gegründet; dieser Beitrag unterliegt daher ausschließlich Österreichischem Recht. Ansprüche, die sich auf die Nichteinhaltung von gesetzlichen Bestimmungen in Drittstaaten stützen, sind daher ausgeschlossen.</p>
        </div>

        {/* Second section */}
        <div className='w-full flex flex-col mt-[40px]'>
          <h2 className='text-[28px] leading-[32px] font-semibold text-left md:text-[40px] md:leading-[52px]'>2) Erklärung zur Informationspflicht (Datenschutzerklärung)</h2>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[32px] md:mt-[40px]'>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Kontakt mit uns</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

          <h3 className='text-[20px] leading-[32px] font-semibold mt-[32px] md:text-[24px] md:leading-[32px]'>Cookies</h3>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[24px]'>Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unserer Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben. Des Weiteren findet eine Verarbeitung und Verwendung der Cookies durch Drittanbieter in den USA statt. Es liegt kein Beschluss der Europäischen Kommission und keine Bescheinigung vom EuGH vor, dass es in den USA ein angemessenes Datenschutzniveau gibt. Darüber hinaus wird von den USA keine Sicherheit für den Schutz personenbezogener Daten garantiert. Daher besteht die Möglichkeit, dass personenbezogene Daten zu Kontroll- und Überwachungszwecken durch Behörden herangezogen werden. Gegen diesen Datenzugriff gibt es keine wirksamen rechtlichen Mittel. </p>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[20px]'> Ihr aktueller Zustand: abgelehnt <br /> Ihre Einwilligungs-ID: a305d0852a88a652 <br /> Einwilligungsdatum: 2.6.2025, 11:00:44</p>
          <p className='text-[12px] leading-[16px] font-medium md:text-[14px] md:leading-[20px] mt-[20px] text-[#8C3EFF]'><Link href={"#"}>Zustimmung ändern</Link></p>
        </div>


        {/* Third */}
        <div className='w-full flex flex-col mt-[40px]'>
          <h2 className='text-[28px] leading-[32px] font-semibold text-left md:text-[40px] md:leading-[52px]'>Technisch notwendig</h2>
          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Herausgeber</h3>
          <p className='font-medium text-[14px] leading-[20px] mt-[24px]'>Cloudflare Inc.</p>

          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Beschreibung</h3>
          <p className=' font-medium text-[14px] leading-[20px] mt-[24px]'>Das Bots-Produkt von Cloudflare identifiziert und mindert automatisierten Datenverkehr, um Ihre Website vor böswilligen Bots zu schützen. Cloudflare platziert das __cf_bm-Cookie auf Endbenutzergeräten, die Kundenwebsites besuchen, die durch Bot Management oder Bot Fight Mode geschützt sind. Diese Roboterlösungen erfordern das __cf_bm-Cookie, um ordnungsgemäß zu funktionieren.</p>

          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Link zur Datenschutzerklärung</h3>
          <p className=' font-medium text-[14px] leading-[20px] mt-[24px] text-[#8C3EFF]'><Link href={"#"}>https://www.cloudflare.com/privacypolicy/</Link></p>

          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Welche Daten werden erhoben?</h3>
          <p className=' font-medium text-[14px] leading-[20px] mt-[24px]'><Link href={"#"}>IP-Adresse; Gerätebestriebssystem; Referrer URL; Name der Website; Gerätetyp; Datum und Uhrzeit der Anfrage; Anfordernder Anbieter; Informationen zur Systemkonfiguration; Name und URL der abgerufenen Datei; Übertragene Datenmenge; Statusinformationen; Zeitpunkt der Serveranfrage</Link></p>

          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Zweck der Datenerhebung</h3>
          <p className=' font-medium text-[14px] leading-[20px] mt-[24px]'><Link href={"#"}>Optimierung; Optimierung; Verbesserung des Dienstes; Reduzieren der Bandbreitennutzung; Reduzieren der Bandbreitennutzung; Tag-Verwaltung; Cloud Computing; Website-Sicherheit; Website-Sicherheit; Speichern und Laden von Anzeigeninhalten; Aktivieren von Downloads; Remarketing; Einholen von Lizenzgebühren; Beantwortung von Benutzeranfragen; Anruf-Conversions; Dienst leisten; Produktsuche; Produktsuche; Push-Benachrichtigungen; Push-Benachrichtigungen</Link></p>

          <h3 className=' font-semibold mt-[32px] text-[24px] leading-[32px]'>Cookies:</h3>
        </div>

      </div>

      <div className=' max-w-[1250px] w-[100%] flex flex-col justify-start items-start sm:flex-row sm:justify-between sm:items-center mt-[630px] sm:mb-[80px] md:mt-[1953px] '>
        <Image src={admatrica_logo} alt='' width={1000} height={1000} className='w-[135.5px] h-[16px]' />
        <hr className='w-screen ml-[-16px] border-t-1 border-[#A49AC4]/50  mt-[52px] sm:hidden' />
        <p className='text-[10px]  leading-[16px] text-[#A49AC4] font-medium my-[12px] sm:my-[0px]'>© 2025 ADMATRICA. Alle Rechte vorbehalten.</p>
      </div>

    </div>
  )
}

export default PrivacyPolicy
