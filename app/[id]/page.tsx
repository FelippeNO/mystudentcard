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
const formattedDate = date6MonthsLater.toLocaleDateString("pt-BR");

const student1: StudentData = {
  name: "FELIPPE NEGRAO DE OLIVEIRA",
  courseTitle: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
  period: "6º PERÍODO",
  coefficient: "COEFICIENTE: 0.9083",
  code: "02372517",
  validity: `Validade: ${formattedDate}`,
  photo: "/student-photo1.png",
};

const student2: StudentData = {
  name: "AMANDA GABRIELLE DA SILVA SANTOS",
  courseTitle: "BACHARELADO EM ENGENHARIA DE SOFTWARE",
  period: "6º PERÍODO",
  coefficient: "COEFICIENTE: 0.9083",
  code: "02372517",
  validity: `Validade: ${formattedDate}`,
  photo: "/student-photo2.jpg",
};

export default function StudentPage({ params }: { params: { id: string } }) {
  const student = params.id === "2" ? student2 : student1; // fallback automático

  return (
    <main className="page-root">
      <div className="phone-frame">
        <header className="app-header">
          <img src="/utfpr-logo.png" alt="UTFPR" />
        </header>

        <div className="app-content">
          <section className="student-card">
            <div className="card-middle">
              <img src={student.photo} alt="Foto do estudante" />
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
              <img src="/barcode.png" />
              <div>{student.code}</div>
              <div>{student.validity}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
