import { AppComponent } from './app.component';
import { BrowserModule } from './hello.component';
import { TargetNumberComponent} from './target-number/target-number.component';

import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TargetNumberComponent, PlusComponent,MinusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
