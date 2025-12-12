"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface StudentData {
  name: string;
  courseTitle: string;
  period: string;
  coefficient: string;
  code: string;
  validity: string;
  photo: string;
}

const todayDate = new Date();
const date6MonthsLater = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth() + 6,
  todayDate.getDate()
);
const formattedDate = date6MonthsLater.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const students: StudentData[] = [
  {
    name: "FELIPPE NEGRAO DE OLIVEIRA",
    courseTitle: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
    period: "6º PERÍODO",
    coefficient: "COEFICIENTE: 0.9083",
    code: "02372517",
    validity: `Validade: ${formattedDate}`,
    photo: "/student-photo.png",
  },
  {
    name: "AMANDA GABRIELLE DA SILVA SANTOS",
    courseTitle: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
    period: "6º PERÍODO",
    coefficient: "COEFICIENTE: 0.9083",
    code: "02372532",
    validity: `Validade: ${formattedDate}`,
    photo: "/student-photo2.jpg",
  },
];

const DEFAULT_CODE = "02372517";

export default function Home() {
  const searchParams = useSearchParams();

  const student = useMemo(() => {
    const code = searchParams.get("student") || DEFAULT_CODE;
    return students.find((s) => s.code === code) ?? students[0];
  }, [searchParams]);

  return (
    <main className="page-root">
      <div className="phone-frame">
        <header className="app-header">
          <div className="app-header-logo">
            <img src="/utfpr-logo.png" alt="UTFPR" />
          </div>
        </header>

        <div className="app-content">
          <div className="app-content-inner">
            <section className="student-card">
              <div className="card-top">
                <img
                  src="/brazil-coat.png"
                  alt="Brasão da República Federativa do Brasil"
                  className="coat"
                />
                <div className="card-top-title">
                  <div className="card-top-title-line1">
                    Ministério da Educação
                  </div>
                  <div className="card-top-title-line2">
                    Universidade Tecnológica Federal do Paraná
                  </div>
                </div>
              </div>

              <div className="card-middle">
                <div className="card-photo-wrapper">
                  <img src={student.photo} alt="Foto do estudante" />
                </div>
              </div>

              <div className="card-info">
                <div className="card-name">{student.name}</div>
                <div className="card-course">{student.courseTitle}</div>
                <div className="card-details">
                  {student.period}
                  <br />
                  {student.coefficient}
                </div>
              </div>

              <div className="card-barcode">
                <img src="/barcode.png" alt="Código de barras" />
                <div className="card-code">{student.code}</div>
                <div className="card-validity">{student.validity}</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
