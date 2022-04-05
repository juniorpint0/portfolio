import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  passe = 'Passe o cursor em cima das imagens'

  description = [
    {
    name: 'html',
    text: "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
  },
  {
    name: 'css',
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
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
    name: 'css',
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
  },
  {
    name: 'css',
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
  }
  ]

  // description = [{
  //   name:".html",
  //   text:"HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
  // }]

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
    this.passe = 'Passe o cursor em cima das imagens'
  }
}
