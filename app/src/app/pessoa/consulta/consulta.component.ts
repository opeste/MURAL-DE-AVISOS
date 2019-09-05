import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
import {PessoaService} from '../../services/pessoa.service';
 
import {Pessoa} from '../../services/pessoa';
 
import {Response} from '../../services/response';
 
@Component({
    selector: 'app-consulta-pessoa',
    templateUrl: './consulta.component.html',
    styleUrls:["./consulta.component.css"]
  })
  export class ConsultaComponent implements OnInit {
 
    private pessoas: Pessoa[] = new Array();
    private titulo:string;
 
    constructor(private pessoaService: PessoaService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O T�TULO */
      this.titulo = "Registros Cadastrados";
 
      /*CHAMA O SERVI�O E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.pessoaService.getPessoas().subscribe((res: any) => {this.pessoas = res});
      
     
    }
 
    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OP��O EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {
 
      if(confirm("Deseja realmente excluir esse registro?")){
 
        /*CHAMA O SERVI�O PARA REALIZAR A EXCLUS�O */
        this.pessoaService.excluirPessoa(codigo).subscribe(response => {
 
              /**PEGA O RESPONSE DO SERVI�O */
              let res:Response = <Response>response;
 
              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVI�O E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.pessoas.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVI�O JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {                    
               /*MOSTRA ERROS N�O TRATADOS */
               alert(erro);
          });        
      }
 
    }
 
    editar(codigo:number):void{
 
      this.router.navigate(['/cadastro-pessoa',codigo]);
 
    }
 
  }