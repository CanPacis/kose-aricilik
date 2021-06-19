import styles from "./layout.module.css";
import Image from "next/image";

export default function Layout() {
  const logoHeight = 24;

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <Image height={logoHeight} width={(2281 * logoHeight) / 512} src="/images/logo.png" />
        <h1 className={styles.title}>Hizmet Dışıyız</h1>
        <p className={styles.desc}>
          Sitemiz şu anda hizmet dışı.
          <br /> Bal ve arıcılık ürünleri alışverişleriniz için en yakın zamanda tekrardan
          hizmetindeyiz!
        </p>
        <div className={styles.action}>
          <span className={styles.socialIcon}>
            <a href="https://instagram.com/kosearicilik" target="_blank">
              <Image src="/images/instagram.svg" height={20} width={20} alt="instagram" />
            </a>
          </span>
          <span className={styles.socialIcon}>
            <a href="https://www.facebook.com/kosearicilik" target="_blank">
              <Image src="/images/facebook.svg" height={20} width={20} alt="instagram" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
