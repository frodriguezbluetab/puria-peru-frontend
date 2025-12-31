import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../../environment/environment";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { GeneracionDocumento } from "../../../core/models/generacion-documento.model";

@Injectable({
  providedIn: 'root'
})

export class DocumentosAlcanceService {
    private router = inject(Router);
    private apiURL = environment.apiUrl + '/documentos-alcance';

    constructor(
        private http: HttpClient
    ) {}

    getTipo(): Observable<any> {
        return this.http.get<any>(`${this.apiURL}/getTipo`).pipe(
            catchError(error => {
                return throwError(() => new Error('Error en la comunicación con el servidor'));
            })
        )
    }

    getTabla(file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(`${this.apiURL}/getTabla`, formData).pipe(
            catchError(error => {
                return throwError(() => new Error('Error en la comunicación con el servidor'));
            })
        )
    }

    generateDocumento(data: GeneracionDocumento): Observable<any> {
        return this.http.post<any>(`${this.apiURL}/generateDocumento`, data).pipe(
            catchError(error => {
                return throwError(() => new Error('Error en la comunicación con el servidor'));
            })
        )
    }
}