import Matche from "./Matche";
import { v4 as uuidv4 } from 'uuid'

export default function Matches({ partidas }) {
  return (
    <div className=" flex flex-wrap mx-auto p-4 max-w-lg">
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
              key={uuidv4()}
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