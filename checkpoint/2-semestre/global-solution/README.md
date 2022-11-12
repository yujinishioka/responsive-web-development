# GLOBAL SOLUTION 1TDST

## Integrantes:

Matrícula | Nome
--- | ---
RM94170 | Felipe Breno Sugisawa Altran
RM93187 | Gabriel João da Silva
RM94513 | Leandro Alves de Souza Braga
RM94266 | Vinicius Alves Torres
RM92895 | Vinicius Yuji Nishioka

---

## Funcionalidade:

O Aplicativo possui páginas de Cadastro para **usuário, empresa, veículo e motorista**, assim como alterar e deletar seus dados a partir do Frontend em REACT.

Os métodos **GET POST PUT DELETE** são feitos no Backend pelo Java e alterados dentro do Banco de Dados da FIAP (Oracle).

## Execução

### Rodando a API

O Java é necessário um servidor para rodar a API (utilizamos o Tomcat v9.0 - Link para download: https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.68/bin/apache-tomcat-9.0.68.zip) e uma IDE (Eclipse IDE for Java Developers - 2022 - 03). Dentro da IDE:

Rodando o Server:

* File -> New -> Other...

Buscar por: "server".

* Apache -> Tomcat v9.0 Server -> Next

Adicionar o arquivo Java (GlobalSolution) para a coluna da direita e "Finish".

Após o servidor estar configurado, clicar com o botão direito em cima do Projeto Java e selecionar:

Run as -> Run on Server -> localhost -> Tomcat v9.0 Server -> Finish

A API estará rodando, e para acessar os dados "Raw" as URL são:

* http://localhost:8080/GlobalSolution/rest/empresa

* http://localhost:8080/GlobalSolution/rest/carro

* http://localhost:8080/GlobalSolution/rest/motorista

### O React é executado de forma padrão e o Node utilizado foi a versão 16.15.0.

* Para adicionar as dependências.
```
npm i
```

* Para rodar o aplicativo.

```
npm start
```

### Banco de dados

Oracle

Nome: FIAP

usuario = RM94513
senha = 210902

hostname: oracle.fiap.com.br
port:  1521

SID: orcl