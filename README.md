# Efeito typewriter: CSS puro e JavaScript

Material do vídeo **"Efeito Typewriter"** do canal da [Digital Lift](https://digitallift.com.br).

| Versão | Quando usar | Arquivo |
|---|---|---|
| **CSS** (`steps()` + `border-right`) | uma frase fixa, zero JavaScript | `typewriter.css` |
| **JavaScript** | várias frases, deletar e redigitar, frases de uma API | `typewriter.js` |

## Como usar (passo a passo)
1. Baixe o repositório: botão verde **Code → Download ZIP** e descompacte.
2. Dê dois cliques no `index.html`: as duas versões aparecem funcionando.
3. **Versão CSS:** troque o texto e ajuste o `30` em `steps(30)` e `30ch` para o número de caracteres da sua frase.
4. **Versão JavaScript:** troque o array `frases` no `typewriter.js`.

## Detalhes que fazem diferença
- Digitar (100ms) é mais lento que apagar (50ms), como uma pessoa real.
- Pausa de 1,5s no fim de cada frase.
- `aria-label` no título: o leitor de tela lê a frase inteira em vez de letra por letra.
- `prefers-reduced-motion`: quem pediu menos movimento vê o texto pronto.

Veja `QUANDO-USAR.md` para escolher entre as duas versões.
