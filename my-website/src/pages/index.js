import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout       
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        
      <HomepageHeader />
      <>
  {/* saved from url=(0038)https://sambatya1.github.io/github.io/ */}
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Логопедическая студия SLOVOLET</title>
  <link href="./index_files/logosStyle.css" rel="stylesheet" type="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="yandex-verification" content="4b43de1a790aa067" />
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <div id="content" className="shadow">
    <div id="up">
      <div className="sam">
        <img src="./index_files/logo.png" width="300px" height="100px" />{" "}
      </div>
      {/*<img class="round" src="./index_files/samohova.t.n_small.jpg" width="200px" height="200px">	*/}
      <p>&nbsp;</p>
      <p id="fio">Логопедическая студия </p> &nbsp;
      <p id="logoped">S L O V O L Ё T</p>
      <div className="col2">
        <img className="header_img" src="./index_files/phone.png" />
        +7 (909) 990-86-58
      </div>
      <div className="col2">
        <img className="header_img" src="./index_files/phone.png" />
        +7 (916) 174-06-90
      </div>
      <div className="col2">
        <img className="header_img" src="./index_files/mail.png" />
        samohova.t.n@yandex.ru
      </div>
      <div className="col2">
        <img className="header_img" src="./index_files/geo.png" />
        г. Москва, ЖК "Остафьево"
      </div>
    </div>
    <div id="data">
      <h3>Наши сотрудники:</h3>
      <div>
        <img
          className="round"
          src="./index_files/samohova.t.n_small.jpg"
          width="200px"
          height="200px"
        />
      </div>
      <h3>Образование - высшее</h3>
      <p>
        <b>
          Федеральное государственное бюджетное образовательное учреждение
          высшего профессионального образования <br /> «Брянский государственный
          университет имени академика И.Г. Петровского» <br /> г. Брянск{" "}
        </b>
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          <b> 2009 г.</b> - учитель русского языка и литературы по специальности
          «Русский язык и литература»
        </li>
        <li>
          <b> 2014 г.</b> - присвоена квалификация БАКАЛАВР с отличием по
          направлению программы ЛОГОПЕДИЯ.
        </li>
      </ul>
      <h3>Опыт работы:</h3>
      <ul className="ul_1">
        {/*<li><b>2008-2010 г.</b> 
						Детский сад № 336 «Незабудка» войсковой части № 61608 (г. Москва).
						Младший воспитатель.
					</li>*/}
        <li>
          <b>2013 г. - 2018 г.</b>
          Государственное бюджетное учреждение здравоохранения города Москвы
          «Щербинская больница Департамента здравоохранения города Москвы».
          Детское поликлиническое отделение. Логопед
        </li>
        <li>
          <b>2010 г. - 2014 г.</b> НДОУ ЦРР Детский сад № 33 «Ромашка» (г.
          Щербинка). Воспитатель, логопед (по совместительству)
        </li>
      </ul>
      <h3>Направление работы</h3>
      <ul className="ul_2">
        <li>
          {" "}
          диагностика, коррекция, профилактика речевых нарушений у дошкольников
          и школьников с различными видами речевой паталогии: дислалия,
          дизартрия, задержка речевого развития, общее недоразвитие речи,
          алалия, ринолалия, заикание, дислексия, дисграфия
        </li>
        <li>
          {" "}
          развитие фонематического восприятия, звукобуквенный анализ и синтез;
        </li>
        <li>
          {" "}
          коррекция звукопроизношения, развитие словарного запаса, работа над
          лексико-грамматическими категориями;
        </li>
        <li> развитие памяти, внимания, мышления;</li>
        <li> развитие связной речи;</li>
        <li> логопедический массаж.</li>
      </ul>
      <h3>Обязанности:</h3>
      <ol className="ul_1">
        <li> индивидуальные и групповые занятия с детьми;</li>
        <li>
          {" "}
          работа, направленная на максимальную коррекцию отклонений в развитии;
        </li>
        <li>
          {" "}
          обследование детей, определение структуры и степени выраженности
          имеющегося у них дефекта;
        </li>
        <li>
          {" "}
          групповые и индивидуальные занятия по исправлению отклонений в
          развитии, восстановлению нарушенных функций;
        </li>
        <li>
          {" "}
          консультирование медицинских работников и родителей по применению
          специальных методов и приемов оказания помощи детям, имеющим
          отклонения в развитии.
        </li>
      </ol>
      <h3>Профессиональные навыки:</h3>
      <ul className="ul_2">
        <li> умение налаживать контакт с детьми;</li>
        <li> знание новейших методик коррекции нарушений речи;</li>
        <li>
          {" "}
          умение составлять индивидуальный план занятий для каждого ребёнка,
          учитывая особенности его физического и психического развития;
        </li>
        <li> опыт работы с детьми разного речевого уровня;</li>
        <li> знание основ психологии, дефектологии;</li>
        <li>
          {" "}
          активное использование различных техник логопедического массажа в
          коррекционной работе.
        </li>
      </ul>
      <h3>О себе:</h3>
      <ul className="ul_1">
        <li> пунктуальность;</li>
        <li> ответственность;</li>
        <li> коммуникабельность;</li>
        <li> грамотная речь;</li>
        <li> не имею вредных привычек.</li>
      </ul>
      <p>
        Мы находимся по адресу: г. Москва, поселение Рязановское, ул. Логинова,
        д.7
      </p>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Москва
        </a>
        <a
          href="https://yandex.ru/maps/213/moscow/house/ulitsa_loginova_7k1/Z04YcwZjTU0CQFtvfXh4dH5mZQ==/?ll=37.513485%2C55.495252&utm_medium=mapframe&utm_source=maps&z=17"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Улица Логинова, 7к1 на карте Москвы — Яндекс&nbsp;Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.513485%2C55.495252&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=37.513485%2C55.495251&whatshere%5Bzoom%5D=17&z=17"
          width={560}
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
      </div>
      <p />
    </div>
    <hr />
    <div id="footer">Copyright@samohov.ru</div>
  </div>
</>

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
