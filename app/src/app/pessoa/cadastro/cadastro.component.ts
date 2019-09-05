import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import {PessoaService} from '../../services/pessoa.service';
 
import {Pessoa} from '../../services/pessoa';
 
import {Response} from '../../services/response';
 
import { Observable } from 'rxjs/Observable';
 
@Component({
    selector: 'app-cadastro-pessoa',
    templateUrl: './cadastro.component.html',
    styleUrls:["./cadastro.component.css"]
  })
  export class CadastroComponent implements OnInit {
 
    private titulo:string;
    private pessoa:Pessoa = new Pessoa();
 
    constructor(private pessoaService: PessoaService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZA��O DO COMPONENTE */
    ngOnInit() {
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["codigo"] == undefined){ 
          this.titulo = "Novo Cadastro de Pessoa";
        }
        else{
 
          this.titulo = "Editar Cadastro de Pessoa";
          this.pessoaService.getPessoa(Number(parametro['codigo'])).subscribe(res => this.pessoa = res);           
          console.log("CONSOLE TESTE "+this.pessoa);
        } 
      });      
    }
 
    /*FUN��O PARA SALVAR UM NOVO REGISTRO OU ALTERA��O EM UM REGISTRO EXISTENTE */
    salvar():void {
 
      /*SE N�O TIVER C�DIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.pessoa.codigo == undefined){
 
        /*CHAMA O SERVI�O PARA ADICIONAR UMA NOVA PESSOA */
        this.pessoaService.addPessoa(this.pessoa).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVI�O
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMUL�RIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.pessoa = new Pessoa();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS N�O TRATADOS
             EXEMPLO: SE APLICA��O N�O CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
      }
      else{
 
        /*AQUI VAMOS ATUALIZAR AS INFORMA��ES DE UM REGISTRO EXISTENTE */
        this.pessoaService.atualizarPessoa(this.pessoa).subscribe(response => {
 
        //PEGA O RESPONSE DO RETORNO DO SERVI�O
        let res:Response = <Response>response;
 
         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USU�RIO PARA A P�GINA DE CONSULTA*/
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/consulta-pessoa']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {                    
         /**AQUI VAMOS MOSTRAR OS ERROS N�O TRATADOS
          EXEMPLO: SE APLICA��O N�O CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });
      }
 
    }
 
  }