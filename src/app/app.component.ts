import { Component, Attribute,ElementRef } from '@angular/core';
import { GithubComponent } from './components/github/github.component';
import { GithubService } from './services/github.service'
// import { HTTP_PROVIDERS} from '@angular/http';
@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {

}
// export class AppComponent {
//   title = 'Servira si aplicamos lo mismo de ionic?';
//   viewMode = "map"
//   courses = ['Mate', "historia", "fisica"]
//   teachers = ['Juan', "José", "Fabiola"]
//   post  = {
//     title : "angular Tutorial for Beginners",
//     body : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
//   }
//   @Attribute("message") message: string;
//   constructor( elementRef: ElementRef){
//     console.log(this.message)
//     this.sayHello(elementRef.nativeElement.getAttribute('message'))
//   }
//   sayHello(message?){
//     this.title = message || 'No has dicho nada';
//   }
// }

