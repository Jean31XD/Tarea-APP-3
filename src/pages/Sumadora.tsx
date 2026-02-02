import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react';

const Sumadora: React.FC = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [resultado, setResultado] = useState<number | null>(null);

    const handleSumar = () => {
        setResultado(num1 + num2);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Sumadora</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonItem>
                    <IonLabel position="stacked">Número 1</IonLabel>
                    <IonInput type="number" value={num1} onIonChange={e => setNum1(parseFloat(e.detail.value!) || 0)} />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Número 2</IonLabel>
                    <IonInput type="number" value={num2} onIonChange={e => setNum2(parseFloat(e.detail.value!) || 0)} />
                </IonItem>

                <IonButton expand="block" className="ion-margin-top" onClick={handleSumar}>
                    Sumar
                </IonButton>

                {resultado !== null && (
                    <div className="ion-margin-top ion-text-center">
                        <IonText color="primary">
                            <h2>Resultado: {resultado}</h2>
                        </IonText>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Sumadora;
