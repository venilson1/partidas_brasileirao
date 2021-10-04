import formatName from "../function/formatName";

export default function Matche({
  mandante,
  placar_mandante,
  visitante,
  placar_visitante,
  estadio,
  hora_partida,
  data_partida,
  resultado
}) {
  let winHome;
  let loseAway

  let winAway;
  let loseHome;
  if (resultado === 'vitoria_mandante') {
    winHome = 'text-green-500'
    loseAway = 'text-gray-300'
  }
  if (resultado === 'derrota_mandante') {
    winAway = 'text-green-500'
    loseHome = 'text-gray-300'
  }

  return (
    <div className=" text-center flex m-2 p-2 min-w-full w-1/2">
      <table className="w-4/6">
        <tbody>
          <tr>
            <td className="w-1/6">
              <img src={`/assets/images/${formatName(mandante)}.png`} alt={mandante} className="h-6" />
            </td>
            <td className={`w-4/6 ${winHome} ${loseHome}`}>{mandante}</td>
            <td className={`w-1/6 ${winHome} ${loseHome}`}>{placar_mandante}</td>
          </tr>
          <tr>
            <td className="w-1/6">
              <img src={`/assets/images/${formatName(visitante)}.png`} alt={visitante} className="h-6" />
            </td>
            <td className={`w-4/6 ${winAway} ${loseAway}`}>{visitante}</td>
            <td className={`w-1/6 ${winAway} ${loseAway}`}>{placar_visitante}</td>
          </tr>
        </tbody>
      </table>
      <div className="w-3/6 border-l-2 border-gray-200">
        <p className="font-mono text-sm">{hora_partida}</p>
        <p className="text-gray-700 text-sm">{data_partida}</p>
        <p className="font-semibold">{estadio}</p>
      </div>
    </div>
  )
}
