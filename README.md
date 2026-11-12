# Seekphase Studios

Primeiro esboço do site institucional e portfólio da **Seekphase Studios**.

> Identidade visual exploratória; logotipo e textos ainda não são definitivos. Este site não é um marketplace, launcher ou painel administrativo.

## Proposta

- Estúdio independente de desenvolvimento e publicação de games e software.
- Site de apresentação com foco nos projetos **STONEWEALD**, **Obsidrel**, **UltimateClans** e **UltimateRaids**.
- Visual *Editorial Tech*: hero grafite, verde mineral, seção de portfólio clara, progressão `Seek → Discover → Create → Evolve`.
- HTML, CSS e JavaScript sem framework, sem build obrigatório.
- **Journal inicialmente estático.** PHP poderá ser adicionado *somente* ao Journal se surgir necessidade real; GitHub Pages não executa PHP.
- Nenhum login, cadastro, download, loja, banco de dados ou painel.

## Árvore planejada (primeiro esboço)

```text
Seekphase/
├── index.html                  # Home
├── projects.html               # Portfólio
├── studio.html                 # Sobre o estúdio
├── journal.html                # Journal (versão estática)
├── contact.html                # Contato e canais
├── 404.html                    # Página não encontrada
├── projects/
│   ├── stoneweald.html
│   ├── obsidrel.html
│   ├── ultimateclans.html
│   └── ultimateraids.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── animations.css
│   ├── js/
│   │   └── main.js
│   ├── icons/
│   │   └── seekphase-mark.svg  # Símbolo conceitual, não final
│   └── images/
│       ├── stoneweald.svg
│       ├── obsidrel.svg
│       ├── ultimateclans.svg
│       └── ultimateraids.svg
├── journal/
│   └── posts/
│       └── README.md          # Espaço reservado para publicações
├── .nojekyll
└── README.md
```

## Teste local

Abra `index.html` em um navegador ou rode um servidor estático simples:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000/Seekphase/` se a pasta for servida pelo diretório pai, ou `http://localhost:8000/` se executar o comando dentro do repositório.

## GitHub Pages

No repositório: **Settings → Pages → Deploy from a branch → main → /(root)**. A publicação dependerá de o plano e a visibilidade do repositório permitirem GitHub Pages. O repositório pode ser mantido privado durante a elaboração.

As URLs e assets usam caminhos relativos para funcionar tanto no domínio personalizado quanto em um site de projeto `/<repositorio>/`.

## Próximas decisões

1. Revisar a identidade visual e aprovar o logotipo.
2. Substituir artes SVG ilustrativas por materiais oficiais de cada projeto.
3. Revisar textos, status e links públicos antes do lançamento.
4. Definir formato e frequência do Journal; decidir se permanece estático ou se migra para PHP em hospedagem compatível.
5. Adicionar metadados finais (canonical, Open Graph, sitemap e domínio) após escolher a URL pública.
