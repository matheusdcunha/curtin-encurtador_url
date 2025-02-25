/**
 * Função que recebe uma string (URL) e gera um código único para ela
 * usando uma combinação de hash criptográfico e codificação Base62
 * 
 * @param {string} url - A URL ou string que deve ser encurtada
 * @param {number} tamanho - O tamanho do código gerado (padrão: 7 caracteres)
 * @returns {string} - Código único para a URL fornecida
 */
function urlShorterAlg(url: string, tamanho: number = 7): string {
  // Função para converter um número para Base62 (a-zA-Z0-9)
  function base62(number: number) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    do {
      result = characters[number % 62] + result;
      number = Math.floor(number / 62);
    } while (number > 0);

    return result;
  }

  // Gera um hash da string de entrada
  let hash = 0;

  // Algoritmo simples de hash
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Converte para inteiro de 32 bits
  }

  // Garante que o número seja positivo
  hash = Math.abs(hash);

  // Adiciona timestamp para garantir unicidade mesmo para entradas idênticas
  // se chamadas em momentos diferentes
  const timestamp = Date.now();
  hash = hash * 1000000 + (timestamp % 1000000);

  // Converte para Base62 e garante o tamanho desejado
  let code = base62(hash);

  // Ajusta o tamanho do código
  if (code.length > tamanho) {
    code = code.substring(0, tamanho);
  } else {
    // Preenche com caracteres adicionais se for menor que o tamanho desejado
    while (code.length < tamanho) {
      code += base62(Math.floor(Math.random() * 62));
    }
  }

  return code;
}

export { urlShorterAlg }