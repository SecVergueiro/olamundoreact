import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/isaquefoto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Isaque!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Isaque Vergueiro"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Isaque Vergueiro, mas pode me chamar de Sec, sou
        Desenvolvedor Full Statck Jr e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no em 2029 quando comecei a me
        interessar pro programaçao de Jogos. Eu aprendi lógica de programação e
        o básico de várias linguagens, como Python, Java e C+ mas sem aprofundar
        muito em cada uma delas. Eu gostava muito de estudar programação, mas na
        época não fazia ideia de que trabalharia com isso hoje.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Análise e desenvolvimento de Sistemas
        na FAMETRO. Lá eu consegui entrar desenvolver minhas habilidades em
        projetos pessoais e profissionais como o SisVac que foi meu primeiro
        grande projeto profissional para a Fundação Cecon da minha cidade. O
        SisVac é um sistema de Gerenciamento de Férias de RH
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>
      <p className={styles.paragrafo}>
        E foi enquanto eu estava desenvolvendo o SisVac que decidi que estava na
        hora de me apronfundar mais em desenvolvimento web, e foi aí que eu
        conheci a Alura. que tem me ajudado muito a crescer como dev.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Alura é uma escola não só para seus alunos e alunas, mas também para os
        colaboradores e colaboradoras. Hoje sou muito feliz de ter a
        oportunidade de ter esses conteúdos ricos e encantadores para nós.
        Espero que aprenda bastante!
      </p>
    </PostModelo>
  );
}
