---
date: 2025-03-01
title: Plantilla para escribir Notas de Cambios (Changelog)
description: Esta guía ofrece unha estrutura recomendada para as notas de cambios no proxecto.
tags:
  - guía
  - frontend
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Estrutura básica do frontmatter

```yaml
---
date: AAAA-MM-DD
title: Título corto # o do enlace é o nome do arquivo no repositorio
description: Breve resumo
tags: # exemplos
  - commit
  - web
  - frontend
  - backend
  - autenticación
  - deseño
  - contido
  - corrección
  - mellora
authors:
  - name: nome_usuario
    link: https://github.com/nome_usuario
    image: https://github.com/nome_usuario.png?size=40
toc: true #table of content - depende da nota pode ser útil tela ou non
excludeSearch: true #as notas non deberían indexarse na búsqueda
sidebar:
  exclude: true #para que non afecte ao menú lateral en teléfonos
---
```

## Seccións recomendadas

### 1. Resumo xeral (opcional)

Breve parágrafo que ofrece unha visión xeral das modificacións realizadas.

```markdown
## Resumo das modificacións

Nesta actualización centrámonos en mellorar o deseño responsivo da páxina principal e resolver problemas de autenticación que afectaban a algúns usuarios.
```

### 2. Melloras implementadas

Describe as principais melloras agrupadas por categorías.

```markdown
## Melloras implementadas

### Deseño e interface
- **Descrición do cambio**: Explicación detallada
- **Razón**: Por que se fixo este cambio
- **Detalles técnicos** (opcional): Código ou explicación técnica se é relevante

### Funcionalidades
- ...

### Contido
- ...
```

### 3. Correccións de erros

Documenta os erros resoltos.

```markdown
## Correccións de erros

### Problema de autenticación
- **Problema**: Descrición clara do erro
- **Causa**: Que causaba o problema
- **Solución**: Como se resolveu
- **Código** (opcional): Fragmento de código relevante
```

### 4. Cambios técnicos

Para modificacións máis técnicas ou de infraestrutura.

```markdown
## Cambios técnicos

### Optimización de rendemento
- **Cambio**: Descrición da optimización
- **Impacto**: En que mellora a funcionalidade ou rendemento
- **Detalles técnicos**: Explicación técnica ou código
```

### 5. Próximos pasos

Mencionar as tarefas pendentes ou planificadas para futuras actualizacións.

```markdown
## Próximos pasos

- Implementar sistema de busca avanzada
- Mellorar a compatibilidade con dispositivos móbiles
- Engadir novas funcionalidades para usuarios rexistrados
```

## Recomendacións de estilo

1. **Ser específico** é mellor que poñer "mellora_4" ou "melloras varias".
2. **Usar listas**. Son máis fáciles de ler que párrafos longos.
3. **Incluír código** cando sexa relevante.
4. **Mantér a consistencia**. Para eso existe este arquivo.
5. **Explicar o "por que"** dos cambios.
6. (Opcional) Utilizar os **shortcodes** do tema como `steps` ou `callout`, documentados na [páxina de Hextra](https://imfing.github.io/hextra/docs/guide/shortcodes/)

## Exemplo de estrutura completa

`````markdown
---
date: 2025-03-13
title: Melloras no deseño responsivo e autenticación
description: Implementación de interface adaptativa e corrección de erros de login
tags:
  - commit
  - frontend
  - autenticación
authors:
  - name: pisco
    link: https://github.com/piscolabi
    image: https://github.com/piscolabi.png?size=40
toc: true
excludeSearch: true
sidebar:
  exclude: true
---

## Resumo das modificacións

Nesta actualización centrámonos en mellorar a experiencia de usuario en dispositivos móbiles e resolver varios problemas de autenticación.

## Melloras implementadas

### Deseño responsivo
- **Optimización móbil**: Axustouse o layout para pantallas pequenas
- **Espazo entre elementos**: Aumentouse a separación entre seccións para mellorar a lexibilidade
- **Exemplo de código**:
  ```css
  .custom-subtitle {
    max-width: 350px;
    /* Móbil */
    text-align: center;
  }
  
  @media (min-width: 768px) {
    /* Escritorio */
    .custom-subtitle {
      max-width: 430px;
      text-align: left;
    }
  }
  ```

### Contido
- **Refinamento de textos**: Mellorouse a redacción de varios elementos da páxina

## Correccións de erros

### Autenticación
- **Problema**: O borde vermello no input de contrasinal non se mostraba correctamente
- **Solución**: Implementouse un sistema de intervalo para manter o estilo durante a animación

## Cambios técnicos

### Caché de imaxes
- **Problema**: As imaxes actualizadas non se mostraban en desenvolvemento local
- **Solución**: Implementáronse técnicas para forzar a recarga de recursos estáticos

## Próximos pasos

- Implementar máis funcionalidades para a comunidade
- Refinar a paleta de cores para o modo escuro
- Optimizar os tempos de carga
`````
<br><br>
Con esta estrutura tense un formato claro e consistente e axuda á documentación do proxecto, así as contribucións son máis entendibles e accesibles para todos.