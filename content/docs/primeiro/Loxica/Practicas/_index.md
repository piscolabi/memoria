---
linkTitle: "Practicas"
title: "Prácticas de Lóxica"
description: ""
toc: false
geekdocCollapseSection: true
# cascade:
#   type: boletin
---

## Tema 1 Lóxica proposicional
{{< cards >}}
    {{< card link="P1" title="P1 - Táboas da verdade" icon="table">}}
    {{< card link="P2" title="P2 - Árbores semánticas" icon="folder-tree">}}
    {{< card link="P3" title="P3 - Normalización / Equivalencias" icon="document-duplicate">}}
    {{< card link="deducion_natural" title="P4 - Dedución natural" icon="template">}}
    {{< card link="deducion_natural" title="P5 - Dedución natural (continuación)" icon="template">}}
{{< /cards >}}

## Tema 2 Lóxica de Primeira Orde

{{< cards >}}
    {{< card link="P6" title="P6 - Introdución á formalización" icon="translate">}}
    {{< card link="deducion_natural" title="P7 - Dedución natural Primeiro Orde" icon="template">}}
{{< /cards >}}

<!-- 
    {{< card link="P1" title="P1 - Táboas da verdade / Fórmulas atómicas / Fórmulas equivalentes" icon="table">}}
    {{< card link="P2" title="P2 - Árbores semánticas (regras)" icon="folder-tree">}}
    {{< card link="P3" title="P3 - Normalización / Equivalencias / FND / Fórmula de Horn" icon="document-duplicate">}}
    {{< card link="P4" title="P4 - Introdución e regras de dedución natural" icon="academic-cap">}}
    {{< card link="P5" title="P5 - Dedución natural (continuación)" icon="puzzle">}}
    {{< card link="P6" title="P6 - TEMA 2 - Introdución á formalización" icon="translate">}}
    {{< card link="P7" title="P7 - Dedución natural mesturada ca formalización" icon="template">}}
 -->

<!-- 
## Tema 3 Programación Lóxica


 -->

<br><br><br><br>

## División da Lóxica

A lóxica é a ciencia do razoamento, e divídese en varias ramas. As dúas principais son:

### 1. Lóxica Proposicional (Propositional Logic)

*   É a forma máis básica da lóxica.
*   Céntrase nas relacións entre **proposicións completas** (afirmacións que son verdadeiras ou falsas).
*   Non analiza a estrutura interna das proposicións.
*   Usa **conectores lóxicos** para combinar proposicións:
    *   ¬ (Negación): "Non"
    *   ∧ (Conxunción): "E"
    *   ∨ (Disxunción): "Ou"
    *   → (Implicación): "Se... entón..."
    *   ↔ (Bicondicional): "...se e só se..."

**Exemplo:**

*   p: "Está chovendo"
*   q: "O chan está mollado"
*   p → q: "Se está chovendo, entón o chan está mollado"

### 2. Lóxica de Primeira Orde (First-Order Logic) ou Lóxica de Predicados (Predicate Logic)

*   Analiza a **estrutura interna** das proposicións.
*   Introduce os seguintes conceptos:
    *   **Obxectos:** As "cousas" sobre as que falamos.
    *   **Predicados:** Propiedades dos obxectos ou relacións entre eles.
    *   **Funcións:** Operacións que toman obxectos como entrada e devolven outros obxectos.
    *   **Cuantificadores:**
        *   ∀ (Universal): "Para todo..."
        *   ∃ (Existencial): "Existe polo menos un..."

**Exemplo:**

*   Obxectos: Xoán, María
*   Predicado: H(x) = "x é humano"
*   H(Xoán): "Xoán é humano"
*   ∀x H(x): "Todos son humanos"
*   ∃x H(x): "Existe polo menos un humano"
* Can(x): "x é can"
* Fiel(x): "x é fiel"
    ∀x (Can(x) → Fiel(x)): Todos os cans son fieis


> [!NOTE]
> Ás veces, en inglés, chaman á Lóxica de Primeira Orde *Predicate Logic* ou *First-Order Predicate Logic (FOPL)*. Tamén se pode atopar como *Quantificational Logic*, debido ao uso dos cuantificadores.
