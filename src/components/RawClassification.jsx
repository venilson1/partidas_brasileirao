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
    <tr className={`h-10 ${champion} ${demoted}`}>
      <th>{posicao}</th>
      <th>
        <img src={`/assets/images/${formatName(clube)}.png`} alt={formatName(clube)} className="h-6" />
      </th>
      <th>{clube}</th>
      <th>{pontos}</th>
      <th className="font-light">{partidas_jogadas}</th>
      <th className="font-light">{vitorias}</th>
      <th className="font-light">{empates}</th>
      <th className="font-light">{derrotas}</th>
      <th className="font-light">{gols_marcados}</th>
      <th className="font-light">{gols_sofridos}</th>
      <th className="font-light">{saldo}</th>
    </tr>
  )
}
