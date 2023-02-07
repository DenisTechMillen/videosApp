import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos App';

  listaVideos: IFilme[] = [
    {
      nome: 'Gato de Botas 2: O Último Pedido (2022)',
      lancamento: '05/01/2023',
      duracao: '1h 43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pSr0JjkI9iM1Yxe9cqrS6YBonAA.jpg',
      generos: ['Animação', 'Aventura', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/gatodebotas'
    },
    {
      nome: 'Sonic 2 - O Filme (2022)',
      lancamento: '07/04/2022',
      duracao: '2h 2m',
      classificacao: 100,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aT2vdnR3qifI21f7fHTqYW5iAAz.jpg',
      generos: ['Ação', 'Aventura', 'Família', 'Comédia'],
      pagina: '/sonic'
    },
    {
      nome: 'Avatar: O Caminho da Água (2022)',
      lancamento: '15/12/2022',
      duracao: '3h 12m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg',
      generos: ['Ficção científica', 'Aventura', 'Ação'],
      pagina: '/avatar'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

}
