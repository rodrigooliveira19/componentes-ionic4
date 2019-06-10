import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-app-todoconahack',
  templateUrl: './app-todoconahack.page.html',
  styleUrls: ['./app-todoconahack.page.scss'],
})
export class AppTodoconahackPage implements OnInit {

  private tasks: any[] = [];
  private tasksInp: boolean;

  constructor(private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private storage: Storage) { }

  ngOnInit() {
    //let tasksJson = localStorage.getItem('tasksDb');  Uso de localStorage
    this.storage.get('tasksDb').then(tasksJson => {
      if (tasksJson) {
        this.tasks = JSON.parse(tasksJson);
        this.isEmpyTask();
      }
    }).catch(d => {
    });

    
  }

  async showAdd() {
    let alert = await this.alertCtrl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'comprar pão'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('cancelar');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            this.add(data.taskToDo);
            this.updateLocalStorage();
          }
        }
      ]
    });

    await alert.present();

  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer ?',
      buttons: [
        {
          text: task.done ? 'Desmarcar' : 'Marcar',
          icon: task.done ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            task.done = !task.done;
            this.updateLocalStorage();
          }
        },
        {
          text: 'Canlelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });

    actionSheet.present();

  }

  updateLocalStorage() {
    //localStorage.setItem('tasksDb', JSON.stringify(this.tasks)); 
    this.storage.set('tasksDb', JSON.stringify(this.tasks));
    this.isEmpyTask(); 
  }

  async add(taskTodo: string) {
    if (taskTodo.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informar o que deseja fazer',
        duration: 2000,
        position: 'top'
      });

      toast.present();
      return;
    }

    let task = { nome: taskTodo, done: false };
    this.tasks.push(task);

  }

  isEmpyTask() {
    if (this.tasks.length == 0) {
      this.tasksInp = true;
      console.log(' == 0 | '+this.tasks.length); 
    } else {
      this.tasksInp = false;
      console.log(' else | '+this.tasks.length); 
    }
  }

  delete(task: any) {
    //splice(posicao,numElementos)
    //tasks.indexOf(task) 
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.updateLocalStorage();
  }

}
