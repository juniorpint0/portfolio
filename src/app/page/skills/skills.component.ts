import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  passe = 'Passe o cursor em cima dos ícones para mais informações.'

  description = [
    {
    name: 'html',
    text: "HTML é uma linguagem baseada em marcação, compõe a maior parte das páginas da internet e dos aplicativos online, composta por uma série de marcações que dizem para os servidores da web qual a estrutura e informações de um documento."
  },
  {
    name: 'css',
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, ela funciona como uma camada de personalização ao conteúdo visível."
  },
  {
    name: 'javascript',
    text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
  },
  {
    name: 'angular',
    text: "Angular é um poderoso framework que utiliza HTML e TypeScript para criar a interface com o usuário, ou seja, o front-end em aplicações web, desktop e dispositivos móveis."
  },
  {
    name: 'material',
    text: 'Material Design é uma linguagem de design desenvolvida pela Google criado para padronizar todas as suas interfaces gráficas, esse padrão é sinônimo de fluidez, simplicidade e limpeza. Seus elementos são minimalistas, focados em oferecer a melhor experiência sem exageros visuais.'
  },
  {
    name: 'bootstrap',
    text: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo."
  },
  {
    name: 'git',
    text: "O Git é um sistema open-source de controle de versão, ajuda a controlar o fluxo de novas funcionalidades entre vários desenvolvedores no mesmo projeto com ferramentas para análise e resolução de conflitos quando o mesmo arquivo é editado por mais de uma pessoa em funcionalidades diferentes."
  },
  {
    name: 'typescript',
    text: "TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem."
  },
  {
    name: 'nodejs',
    text: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web."
  },
  {
    name: 'docker',
    text: "Docker é uma plataforma open source que facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado."
  },
  {
    name: 'vscode',
    text: "Visual Studio Code (VS Code) é um editor de código de código aberto desenvolvido pela Microsoft, é multiplataforma e inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código."
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  over(data: any){
    // console.log(data)
    // console.log(this.description[0].name)
    for(let pos in this.description){
      if(this.description[pos].name === data){
        this.passe = this.description[pos].text
      }
    }
  }
  
  out(){
    this.passe = 'Passe o cursor em cima dos ícones para mais informações.'
  }
}
