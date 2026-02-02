import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

const Experiencia: React.FC = () => {
    // Actual video ID from user.
    const videoId = "5Pjo6PZKntM";

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Experiencia Personal</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h3>Mi experiencia con esta tarea</h3>
                <p>A continuación se muestra el video donde explico mi proceso de desarrollo.</p>

                <IonCard>
                    <IonCardContent>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Experiencia;
