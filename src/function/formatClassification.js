export default function formatClassification(partidas) {

  let classificacao = [];
  partidas.map(({ visitante, pontuacao_geral_visitante, mandante, pontuacao_geral_mandante }) => {
    return (
      classificacao.push({
        clube: visitante,
        partidas_jogadas: pontuacao_geral_visitante.total_jogos,
        pontos: pontuacao_geral_visitante.total_pontos,
        vitorias: pontuacao_geral_visitante.total_vitorias,
        empates: pontuacao_geral_visitante.total_empates,
        derrotas: pontuacao_geral_visitante.total_derrotas,
        gols_marcados: pontuacao_geral_visitante.total_gols_marcados,
        gols_sofridos: pontuacao_geral_visitante.total_gols_sofridos,
        saldo: pontuacao_geral_visitante.total_gols_marcados - pontuacao_geral_visitante.total_gols_sofridos
      }),
      classificacao.push({
        clube: mandante,
        partidas_jogadas: pontuacao_geral_mandante.total_jogos,
        pontos: pontuacao_geral_mandante.total_pontos,
        vitorias: pontuacao_geral_mandante.total_vitorias,
        empates: pontuacao_geral_mandante.total_empates,
        derrotas: pontuacao_geral_mandante.total_derrotas,
        gols_marcados: pontuacao_geral_mandante.total_gols_marcados,
        gols_sofridos: pontuacao_geral_mandante.total_gols_sofridos,
        saldo: pontuacao_geral_mandante.total_gols_marcados - pontuacao_geral_mandante.total_gols_sofridos
      })
    )
  })

  classificacao.sort((a, b) => {
    return (
      b.pontos - a.pontos
    )
  })

  // eslint-disable-next-line array-callback-return
  classificacao.sort((a, b) => {
    if(b.pontos === a.pontos){
      return b.vitorias - a.vitorias
    }
  })

  // eslint-disable-next-line array-callback-return
  classificacao.sort((a, b) => {
    if(b.pontos === a.pontos && b.vitorias === a.vitorias){
      return b.saldo - a.saldo
    }
  })

  return classificacao;
}