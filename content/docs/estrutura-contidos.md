---
linkTitle: "Estrutura de contidos"
title: Estrutura de contidos
weight: 1
prev: /docs
next: false
---

## Organización do repositorio

Este repositorio contén materiais para o Grao en Enxeñaría Informática, organizados nunha estrutura clara que facilita o acceso e a navegación.


### Estrutura xeral da carpeta de contidos

{{< filetree/container >}}
  {{< filetree/folder name="Content" >}}
    {{< filetree/folder name="About" state="closed" >}}
      {{< filetree/file name="Información sobre o proxecto" >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="Changelog" state="closed" >}}
      {{< filetree/folder name="2025" state="closed" >}}
        {{< filetree/file name="Rexistro de actualizacións" >}}
      {{< /filetree/folder >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="Docs" >}}
      {{< filetree/folder name="Primeiro" >}}
        {{< filetree/file name="Materiais de primeiro curso" >}}
      {{< /filetree/folder >}}
    {{< /filetree/folder >}}
  {{< /filetree/folder >}}
{{< /filetree/container >}}

### Estrutura interna das asignaturas

Cada asignatura organízase nunha estrutura estándar que contén catro carpetas principais, para facilitar a localización dos materiais:

{{< filetree/container >}}
  {{< filetree/folder name="Asignatura" >}}
    {{< filetree/folder name="Apuntes" state="closed" >}}
      {{< filetree/file name="notas de clase, resumos e material teórico" >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="Exames" state="closed" >}}
      {{< filetree/file name="exames de anos anteriores con solucións" >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="Prácticas" state="closed" >}}
      {{< filetree/file name="exercicios, traballos e actividades prácticas" >}}
    {{< /filetree/folder >}}
    {{< filetree/folder name="Recursos" state="closed" >}}
      {{< filetree/file name="bibliografía, enlaces e materiais complementarios" >}}
    {{< /filetree/folder >}}
    {{< filetree/file name="_index.md" state="closed" >}}
  {{< /filetree/folder >}}
{{< /filetree/container >}}



## Como contribuír

Para engadir novos materiais ou mellorar os existentes:

1. Respecta a estrutura de carpetas establecida
2. Nomea os arquivos de forma clara e descritiva
3. Inclúe sempre un arquivo `_index.md` en cada nova carpeta de asignatura
4. Asegúrate de que os materiais están correctamente referenciados e atribúe as fontes cando sexa necesario

Os materiais poden ser enviados mediante pull requests ou contactando directamente cos administradores do repositorio.