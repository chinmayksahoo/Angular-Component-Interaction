ng new Angular-Component-Interaction : To Create the Angular Project Structure

ng add @angular/material: To Use Angular Material UI

Create the Components:
    ng g c header
    ng g c noteInput
    ng g c showNotes
    ng g c footer

Design various component Visual using .html/.css & then integrate those by putting their selector nametag in the app.component.html

For Each material design import the libraries into app.module.ts

Once done use the below command to check the looks of html page in browser.
    ng serve -o

Parent-Child Interaction:
    @Input() title:string='';
    <app-header title="Legato Health Technologies"></app-header>

Child-Parent Interaction:
    @Output() total = new EventEmitter<string>();
    <a>Dashboard Button Clicked {{counter}} number of Times!!</a>

To start the json server to store data.
    json-server Database/insurance.json

To add Services:
    ng generate service Services/Insurance
    To add the service in your local component, add the below import to local component.
        import { HttpClient } from '@angular/common/http';

To Make the add Insurance Work add the below import to app.module.ts
    import { HttpClientModule } from '@angular/common/http';

To Create the Guard for routing use the below command.
    ng g guard Guard/login