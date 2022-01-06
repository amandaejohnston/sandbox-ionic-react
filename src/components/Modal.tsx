import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export const Modal: React.FC<{
  count: number;
  onDismiss: () => void;
  onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
  <IonPage>
    <IonContent>
      Modal 1
      <IonButton id="trigger2">Open Modal 2</IonButton>
      <IonModal trigger="trigger2">
        <IonContent>
          Modal 2
          <IonButton onClick={() => onDismiss()}>Dismiss</IonButton>
        </IonContent>
      </IonModal>
    </IonContent>
  </IonPage>
);