import formatClassification from "../function/formatClassification";
import formatName from "../function/formatName";

export default function Classification({ partidas }) {

  let classificacao = formatClassification(partidas);

  return (
    <div className="mx-auto w-2/3 p-4 text-sm font-light mt-8">
      <table className="table-auto w-full">
        <thead className="h-10 bg-gray-200">
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th className="w-3/6">&nbsp;</th>
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
                <tr className="bg-gray-100 h-10" key={i}>
                  <th>{i}</th>
                  <th>
                    <img src={`/assets/images/${formatName(clube)}.png`} alt={clube} className="h-6" />
                  </th>
                  <th>{clube}</th>
                  <th>{pontos}</th>
                  <th>{partidas_jogadas}</th>
                  <th>{vitorias}</th>
                  <th>{empates}</th>
                  <th>{derrotas}</th>
                  <th>{gols_marcados}</th>
                  <th>{gols_sofridos}</th>
                  <th>{saldo}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
