import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // data = [
  //   {title: "Neat!!! Tree", url: "assets/Ukraine.png", userName:"Howdy", text: "123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium repellendus ullam?"},
  //   {title: "another title", url: "assets/Ukraine.png", userName:"Howker", text: "456 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste"},
  //   {title: "something else", url: "assets/Ukraine.png", userName:"Browdy", text: "789 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium"},
  //   {title: "something else", url: "assets/Ukraine.png", userName:"Browdy", text: "789 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium"},
  // ];

  data(){ 
  return [
            {title: "Neat!!! Tree", url: "assets/Ukraine.png", userName:"Howdy", text: "123 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium repellendus ullam?"},
            {title: "another title", url: "assets/Ukraine.png", userName:"Howker", text: "456 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste"},
            {title: "something else", url: "assets/Ukraine.png", userName:"Browdy", text: "789 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium"},
            {title: "something else", url: "assets/Ukraine.png", userName:"Browdy", text: "789 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium"},
            {title: "something else", url: "assets/Ukraine.png", userName:"Browdy", text: "789 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate corporis suscipit quam fuga iste, dolore soluta accusantium"},
         ];
  }
}
