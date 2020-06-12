import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {name: string, valor: any};

@Injectable()
export class AppService {
  
    private itemsCollection: AngularFirestoreCollection<Item>;
    private itemDoc:AngularFirestoreDocument<Item>;
    
    items: Observable<Item[]>;

    constructor(private afs: AngularFirestore){
        this.itemsCollection = afs.collection('votos');
        this.items = this.itemsCollection.valueChanges();

    }

    getItems(){
        return this.items;
    }

    setItems(item: any){
        this.itemDoc = this.afs.doc<Item>('votos/OcwlxrNAoxH5jvENCYnu');
        this.itemDoc.update(item);
    }
}