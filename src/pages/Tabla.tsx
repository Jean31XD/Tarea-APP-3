import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonList, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';

const Tabla: React.FC = () => {
    const [numero, setNumero] = useState<number>(1);

    const renderTabla = () => {
        const rows = [];
        for (let i = 1; i <= 13; i++) {
            rows.push(
                <IonRow key={i} className="ion-align-items-center" style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                    <IonCol className="ion-text-center">{numero}</IonCol>
                    <IonCol className="ion-text-center">x</IonCol>
                    <IonCol className="ion-text-center">{i}</IonCol>
                    <IonCol className="ion-text-center">=</IonCol>
                    <IonCol className="ion-text-center"><strong>{numero * i}</strong></IonCol>
                </IonRow>
            );
        }
        return rows;
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Tabla de Multiplicar</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="stacked">Número para la tabla</IonLabel>
                    <IonInput type="number" value={numero} onIonChange={e => setNumero(parseInt(e.detail.value!) || 0)} />
                </IonItem>

                <IonList className="ion-margin-top">
                    <IonGrid>
                        <IonRow style={{ backgroundColor: '#f4f4f4', fontWeight: 'bold' }}>
                            <IonCol className="ion-text-center">Num</IonCol>
                            <IonCol className="ion-text-center"></IonCol>
                            <IonCol className="ion-text-center">Mult</IonCol>
                            <IonCol className="ion-text-center"></IonCol>
                            <IonCol className="ion-text-center">Res</IonCol>
                        </IonRow>
                        {renderTabla()}
                    </IonGrid>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tabla;
