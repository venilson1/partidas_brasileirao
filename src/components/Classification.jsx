import formatClassification from "../function/formatClassification";
import RawClassification from "./RawClassification";

export default function Classification({ partidas }) {

  let classificacao = formatClassification(partidas);

  return (
    <div className="text-sm mt-8">
      <table className="table-auto w-full">
        <thead className="h-10">
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>pts</th>
            {/* <th>PJ</th> */}
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
                <RawClassification
                  key={i}
                  clube={clube}
                  pontos={pontos}
                  vitorias={vitorias}
                  empates={empates}
                  derrotas={derrotas}
                  gols_marcados={gols_marcados}
                  gols_sofridos={gols_sofridos}
                  partidas_jogadas={partidas_jogadas}
                  saldo={saldo}
                  ultimo_colocado={classificacao.length}
                  posicao={i}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
