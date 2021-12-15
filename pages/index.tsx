import Layout from "../components/layout";
import Image from "next/image";
import ProfPic from "../public/images/madara.jpg"
import styles from "../styles/main.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className={styles.centerPic}>
        <Image
          className={styles.borderCircle}
          src={ProfPic}
          alt="Picture"
          width={200}
          height={200}
        />
      </div>
      <h1 className={styles.textName}>Boburbek Kosimov</h1>
      <p className={styles.text}>
        My name is Boburbek.
        I am from Tashkent, Uzbekistan.
        I was born in 29.03.1998.
        I studied in Tashkent Professional College of Information Technologies
        since 2014 until 2017 and after thad i decided to study continiue my
        study and entered to Transport and Telecommincation instittute and studied
        there from 2017 to 2021. Recently I am back to Tashkent.
        I work in State Unitary Enterprise Unicon.uz as QA Engeneer
      </p>
      <Link href={'cv'}><a className={styles.link}>More Information</a></Link>
    </Layout>
  )
}