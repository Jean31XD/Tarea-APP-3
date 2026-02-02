import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonAvatar } from '@ionic/react';
import React from 'react';
import './Home.css';
import profilePhoto from '../assets/profile.jpg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Página Inicial</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonCard className="profile-card">
          <div className="avatar-container">
            <IonAvatar className="profile-photo">
              <img alt="Foto personal" src={profilePhoto} />
            </IonAvatar>
          </div>
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Jean Maicor Sencion Martinez</IonCardTitle>
            <IonCardSubtitle>Matrícula: 20212377</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <p><strong>Estudiante de Desarrollo de Software</strong></p>
            <p><strong>Correo:</strong> 20212377@itla.edu.do</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
