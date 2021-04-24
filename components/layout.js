import styles from "./layout.module.css";
import Image from "next/image";

export default function Layout() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Yakında Geliyoruz.</h1>
          <p className={styles.desc}>
            Uzun zamandır planladığımız web sitemiz şu anda hazırlanmaktadır.
            <br /> Bal ve arıcılık ürünleri alışverişleriniz için Ramazan
            Bayramı’nda hizmetindeyiz!
          </p>
        </div>
        <div className={styles.action}>
          <span className="socialIcon">
            <a href="https://instagram.com/kosearicilik" target="_blank">
              <Image
                src="/images/instagram.svg"
                height={20}
                width={20}
                alt="instagram"
              />
            </a>
          </span>
          <span className="socialIcon">
            <a href="https://www.facebook.com/kosearicilik" target="_blank">
              <Image
                src="/images/facebook.svg"
                height={20}
                width={20}
                alt="instagram"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}