import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

/*
lathonez.github.io/2016/ionic-2-unit-testing/, 
lathonez.github.io/2016/ionic-2-e2e-testing/, 
www.joshmorony.com/how-to-unit-test-an-ionic-2-application/, 
https://www.udemy.com/react-redux-tutorial/, 
https://github.com/storybooks/react-native-storybook 
*/