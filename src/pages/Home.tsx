import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton, useIonModal, IonButtons } from '@ionic/react';
import { Modal } from '../components/Modal';
import './Home.css';

const Home: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(Modal, { onDismiss: handleDismiss });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => present()}>Show Modal</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        Content
        
        <IonButton onClick={() => present()}>Open Modal</IonButton>
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
