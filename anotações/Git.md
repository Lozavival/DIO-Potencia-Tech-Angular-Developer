# Introdução ao Git e ao GitHub

Git é um sistema distribuído de versionamento, usado principalmente no desenvolvimento de software, mas que pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. GitHub, por sua vez, é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.

---

## Tabela de Conteúdos

- [Comandos básicos no terminal](#comandos-básicos-no-terminal)
- [Objetos Internos do Git](#objetos-internos-do-git)
    - [Blobs](#blobs)
    - [Trees](#trees)
    - [Commits](#commits)
- [Chaves SSH e Tokens (GitHub)](#chaves-ssh-e-tokens-github)
    - [Chave SSH](#chave-ssh)
    - [Token de Acesso Pessoal](#token-de-acesso-pessoal)
- [Primeiros comandos com Git](#primeiros-comandos-com-git)
    - [Definindo o usuário](#definindo-o-usuário)
    - [Criando um repositório](#criando-um-repositório)
    - [Adicionando um arquivo e criando um commit](#adicionando-um-arquivo-e-criando-um-commit)
- [Resolvendo conflitos](#resolvendo-conflitos)

---

## Comandos básicos no terminal

Para listar todos os diretórios presentes em uma pasta, utilizamos o comando `dir` no Windows e `ls` no Unix. Utilizando a flag `ls -a`, exibimos também os arquivos ocultos.

Para navegar entre pastas, utilizamos o comando `cd <nome da pasta>` (comum entre ambos SO). O comando `cd ..` nos permite subir ao diretório pai ao acessarmos um diretório que não seja a raiz.

Para limpar o terminal, utilizamos `cls` no Windows e `clear` no Unix (ou o atalho `Ctrl + L`).

Para criar uma pasta, utilizamos `mkdir <nome da pasta>` (igual para ambos SO).

Para criar um arquivo (tanto no Windows quanto em sistemas baseados no Unix), podemos utilizar o comando `echo hello > hello.txt`, por exemplo, para criar um arquivo `hello.txt` contendo a palavra "hello". No Unix, outro comando possível é `touch hello.txt` (nesse caso, o arquivo criado estará vazio).

Para deletar todos os arquivos contidos em uma pasta no Windows, utilizamos o comando `del <nome da pasta>` e, para remover a pasta em si, utilizamos `rmdir <nome da pasta> /S /Q`. No Unix, para deletar uma pasta e todos os diretórios nela contidos, utilizamos o comando `rm -rf <nome da pasta>`.

## Objetos Internos do Git

O Git utiliza o sistema de hashing SHA1 para identificar unicamente seus arquivos e objetos internos.

### Blobs

Os arquivos do Git ficam armazenados dentro de objetos chamados *blobs*, cuja estrutura é a seguinte:

- Tipo do arquivo (ou seja, "Blob");
- Tamanho do arquivo (ignorando os metadados);
- Caractere `\0`;
- Conteúdo de fato do arquivo.

### Trees

As *trees* armazenam *blobs* e seguem a mesma estrutura: metadados (tipo do arquivo, tamanho e `\0`) seguidos pelos *blobs* armazenados, no seguinte formato:
`blob <sha1 do blob> <nome do arquivo no blob>`.

É por meio das árvores que o Git monta a estrutura de onde estão localizados os arquivos. Sendo assim, *trees* podem armazenar *blobs* ou também outras *trees* (sub-diretórios).

### Commits

Um commit é o objeto que vai juntar os objetos anteriores e dar sentido à alteração feita. Um commit aponta para:

- uma árvore (contendo as alterações feitas);
- um pai (o commit anterior);
- o autor;
- a mensagem;
- o timestamp do momento em que foi realizado.

O SHA1 de um commit é o hash de todas essas informações.

## Chaves SSH e Tokens (GitHub)

### Chave SSH

Uma chave SSH é, a grosso modo, uma forma de estabelecer uma conexão segura entre duas máquinas. O GitHub tornou obrigatória a existência de uma chave SSH ligada a sua máquina local para permitir a conexão com o servidor. Para criar uma chave SSH e adicioná-la a sua conta, é necessário seguir o seguinte procedimento:

1. Execute o seguinte comando no terminal para gerar uma nova chave:

    ```bash
    ssh-keygen -t ed25519 -C <seu email>
    ```

    Em seguida, será pedido para que o usuário insira o arquivo onde a nova chave será criada; pressione apenas 'Enter' para salvar no local padrão. Em seguida, será requisitada uma senha para acessar aquela chave. Crie uma senha e, após a confirmação de senha, a chave será gerada e armazenada no arquivo especificado.

1. Execute o comando abaixo para visualizar a chave gerada e copie a chave mostrada:

    ```bash
    cat ~/.ssh/id_ed25519.pub
    ```

    Deve-se então acessar o site do GitHub para adicionar a chave SSH a sua conta. Na tela inicial, clique na sua foto do perfil (canto superior direito) > Configurações > Chaves SSH e GPG (na aba "Acesso") > Nova chave SSH. No campo "Título", adicione uma etiqueta descritiva para a nova chave e, no campo "Chave", cole a chave pública copiada no início deste passo. Por fim, clique em "Adicionar chave SSH" e confirme seu acesso à conta para adicionar a chave com sucesso.

1. Por fim, é necessário adicionar a chave gerada ao agente gerenciador de chaves:

    ```bash
    eval $(ssh-agent -s)
    ssh-add ~/.ssh/id_ed25519
    ```

### Token de Acesso Pessoal

Um token é um arquivo de credencial que fica armazenado na nossa máquina local e, ao realizarmos uma operação que necessita de senha (por exemplo, um push), utilizamos o token.

Ao criarmos um token no site do GitHub, podemos definir uma expiração para tal token (a partir do prazo definido, ele parará de funcionar e devemos gerar um novo).

## Primeiros comandos com Git

### Definindo o usuário

Ao utilizar o Git pela primeira vez, devemos definir nosso email e nome de usuário:

```bash
git config --global user.email "seu_email@exemplo.com"
git config --global user.name "Seu Usuário"
```

### Criando um repositório

O comando `git init` é utilizado para inicializar um repositório Git em um diretório. Ele pode ser executado em um diretório recém-criado para criar um repositório vazio ou em um diretório que já contenha arquivos para adicionar tais arquivos ao repositório.

```bash
mkdir meu-projeto
cd meu-projeto
git init
```

Após inicializar um repositório, devemos conectá-lo ao repositório remoto do servidor. Isso é feito por meio do seguinte comando:

```bash
git remote add origin <URL-do-repositório>
```

Alternativamente, podemos clonar o repositório remoto para nossa máquina local:

```bash
git clone <URL-do-repositório>
```

### Adicionando um arquivo e criando um commit

Após criar um novo arquivo no nosso repositório ou modificar um arquivo existente, devemos utilizar o comando `git add`. Podemos utilizá-lo de três formas distintas:

- `git add *`: adiciona todos os arquivos presentes no diretório raiz (incluindo seus sub-diretórios) do repositório;
- `git add .`: adiciona todos os arquivos presentes naquele diretório específico.
- `git add <nome do arquivo>`: adiciona apenas o(s) arquivo(s) especificado(s).

Adicionados os arquivos, devemos criar um commit com as alterações salvas. Isso é feito por meio do comando `git commit -m "<mensagem>"`.

```bash
git add .
git commit -m "Meu primeiro commit"
```

O comando `git push` envia os commits realizados ao servidor, de forma que as alterações locais sobrescrevam os arquivos do servidor (caso não haja nenhum conflito).

## Resolvendo conflitos

Como o Git é um sistema de versionamento distribuído, é possível que diferentes usuários produzam alterações conflitantes em determinado arquivo (ou seja, haverão duas versões diferentes de um mesmo arquivo e não é possível mesclar ambas versões automaticamente).

Para resolver isso, devemos executar o comando `git pull` para obtermos a versão mais atualizada do servidor e, localmente, modificar o arquivo para manter as alterações corretas e fazer um novo commit e push com os conflitos solucionados.
