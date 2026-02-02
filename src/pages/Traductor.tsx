import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react';

const Traductor: React.FC = () => {
    const [numero, setNumero] = useState<number | string>('');
    const [letras, setLetras] = useState<string>('');

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas2 = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    const numeroALetras = (num: number): string => {
        if (num === 0) return 'cero';
        if (num === 1000) return 'mil';
        if (num < 0 || num > 1000) return 'Número fuera de rango (1-1000)';

        let res = '';

        // Centenas
        if (num >= 100) {
            if (num === 100) return 'cien';
            if (num < 200) res += 'ciento ';
            else res += centenas[Math.floor(num / 100)] + ' ';
            num %= 100;
        }

        // Decenas
        if (num >= 10 && num <= 19) {
            res += decenas[num - 10];
            return res.trim();
        } else if (num >= 20) {
            if (num === 20) res += 'veinte';
            else if (num < 30) res += 'veinti' + unidades[num % 10];
            else {
                res += decenas2[Math.floor(num / 10)];
                if (num % 10 !== 0) res += ' y ' + unidades[num % 10];
            }
            return res.trim();
        }

        // Unidades
        if (num > 0) {
            res += unidades[num];
        }

        return res.trim();
    };

    const handleTraducir = () => {
        const val = parseInt(numero as string);
        if (!isNaN(val)) {
            setLetras(numeroALetras(val));
        } else {
            setLetras('Por favor ingrese un número válido');
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Traductor de Números</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="stacked">Número (1-1000)</IonLabel>
                    <IonInput type="number" value={numero} onIonChange={e => setNumero(e.detail.value!)} min="1" max="1000" />
                </IonItem>

                <IonButton expand="block" className="ion-margin-top" onClick={handleTraducir}>
                    Traducir
                </IonButton>

                {letras && (
                    <div className="ion-margin-top ion-text-center">
                        <IonText color="secondary">
                            <h3 style={{ textTransform: 'capitalize' }}>{letras}</h3>
                        </IonText>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Traductor;
