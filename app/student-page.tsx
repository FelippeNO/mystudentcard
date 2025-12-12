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

export default function StudentPage() {
  const searchParams = useSearchParams();

  const student = useMemo(() => {
    const code = searchParams.get("student") || DEFAULT_CODE;
    return students.find((s) => s.code === code) ?? students[0];
  }, [searchParams]);

  return (
    <main className="page-root">
      {/* TODO: seu JSX inteiro aqui, usando `student` */}
      <div className="card-name">{student.name}</div>
    </main>
  );
}
