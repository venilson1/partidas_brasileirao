import Matche from "./Matche";

export default function Matches({ partidas }) {
  console.log(partidas);
  return (
    <div className=" flex flex-wrap mx-auto p-4">
      {
        partidas.map(({
          mandante,
          placar_mandante,
          visitante,
          placar_visitante,
          estadio,
          hora_partida,
          data_partida
        }) => {
          return (
            <Matche
              mandante={mandante}
              placar_mandante={placar_mandante}
              visitante={visitante}
              placar_visitante={placar_visitante}
              estadio={estadio}
              hora_partida={hora_partida}
              data_partida={data_partida}
            />
          )
        })
      }
    </div>
  )
}