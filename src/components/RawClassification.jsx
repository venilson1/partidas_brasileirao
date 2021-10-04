import formatName from "../function/formatName";

export default function RawClassification({
  clube,
  pontos,
  vitorias,
  empates,
  derrotas,
  gols_marcados,
  gols_sofridos,
  partidas_jogadas,
  saldo,
  ultimo_colocado,
  posicao
}) {
  let champion;
  let demoted;
  if (posicao === 1) champion = 'bg-green-200'
  if (
    posicao === ultimo_colocado ||
    posicao === ultimo_colocado - 1 ||
    posicao === ultimo_colocado - 2 ||
    posicao === ultimo_colocado - 3
  ) demoted = 'bg-red-200'


  return (
    <tr className={`h-10 ${champion} ${demoted} border-b-2`}>
      <th>{posicao}</th>
      <th>
        <img src={`/assets/images/${formatName(clube)}.png`} alt={formatName(clube)} className="h-6" />
      </th>
      <th>{clube}</th>
      <th>{pontos}</th>
      {/* <th className="font-thin text-sm">{partidas_jogadas}</th> */}
      <th className="font-light text-sm">{vitorias}</th>
      <th className="font-light text-sm">{empates}</th>
      <th className="font-light text-sm">{derrotas}</th>
      <th className="font-light text-sm">{gols_marcados}</th>
      <th className="font-light text-sm">{gols_sofridos}</th>
      <th className="font-light text-sm">{saldo}</th>
    </tr>
  )
}
