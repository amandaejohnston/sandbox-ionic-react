import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        Content
        
        <IonButton id="trigger1">Open Modal</IonButton>
        <IonModal trigger="trigger1">
          <IonContent>
            Modal 1
            <IonButton id="trigger2">Open Modal 2</IonButton>
            <IonModal trigger="trigger2">
              <IonContent>
                Modal 2
              </IonContent>
            </IonModal>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
