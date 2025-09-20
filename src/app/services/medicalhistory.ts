import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicalhistoryModel } from '../models/medicalhistory.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalhistoryService {

  private histories = new BehaviorSubject<MedicalhistoryModel[]>([
    {
      id: 1,
      petId: 1,
      description: 'Vacunación anual',
      date: new Date('2024-05-20'),
      status: 'activo',
      createdAt: new Date('2024-05-20'),
      updatedAt: new Date()
    }
  ]);

  histories$ = this.histories.asObservable();

  getHistories() {
    return this.histories.value;
  }

  addHistory(history: MedicalhistoryModel) {
    const current = this.histories.value;
    history.id = current.length ? Math.max(...current.map(h => h.id)) + 1 : 1;
    history.createdAt = new Date();
    history.updatedAt = new Date();
    this.histories.next([...current, history]);
  }

  update(historyUpdated: MedicalhistoryModel) {
    const updatedList = this.histories.value.map(h =>
      h.id === historyUpdated.id
        ? { ...historyUpdated, updatedAt: new Date() }
        : h
    );
    this.histories.next(updatedList);
  }

  getHistoryById(id: number): MedicalhistoryModel | undefined {
    return this.histories.value.find(h => h.id === id);
  }
}
