import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonModal } from '@ionic/react';
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
          <IonTitle>Nested Modals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => present()}>Open Modal</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
