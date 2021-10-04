import formatClassification from "../function/formatClassification";
import formatName from "../function/formatName";

export default function Classification({ partidas }) {

  let classificacao = formatClassification(partidas);

  return (
    <div className="mx-auto p-4 text-sm mt-8">
      <table className="table-auto w-full">
        <thead className="h-10">
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>pts</th>
            <th>PJ</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>
        <tbody>
          {
            classificacao.map(({
              clube,
              pontos,
              vitorias,
              empates,
              derrotas,
              gols_marcados,
              gols_sofridos,
              partidas_jogadas,
              saldo
            }, i) => {
              i++
              return (
                <tr className="h-10" key={i}>
                  <th>{i}</th>
                  <th>
                    <img src={`/assets/images/${formatName(clube)}.png`} alt={formatName(clube)} className="h-6" />
                  </th>
                  <th>{clube}</th>
                  <th className="font-light">{pontos}</th>
                  <th className="font-light">{partidas_jogadas}</th>
                  <th className="font-light">{vitorias}</th>
                  <th className="font-light">{empates}</th>
                  <th className="font-light">{derrotas}</th>
                  <th className="font-light">{gols_marcados}</th>
                  <th className="font-light">{gols_sofridos}</th>
                  <th className="font-light">{saldo}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
