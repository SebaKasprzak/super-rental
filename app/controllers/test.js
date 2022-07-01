import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TestController extends Controller {

    @tracked isDupa = true;

    @action disapear(){

        if(this.isDupa == false) {

            this.isDupa = true;
        
        } else {
            
            this.isDupa = false;

        }
        
        
        
    }    

}